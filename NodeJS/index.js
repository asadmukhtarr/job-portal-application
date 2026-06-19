const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');

// ========== STEP 1: Session middleware FIRST ==========
app.use(session({
    secret: '03264300993',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// ========== STEP 2: Custom middleware that uses session ==========
app.use((req, res, next) => {
    // Check if session exists before accessing properties
    if (req.session) {
        res.locals.user = req.session;
        res.locals.isLoggedIn = req.session.isLoggedIn || false;
    } else {
        res.locals.user = null;
        res.locals.isLoggedIn = false;
    }
    next();
});

// ========== STEP 3: Body parsers ==========
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ========== STEP 4: View engine ==========
app.set('view engine', 'ejs');

// ========== Database connection ==========
const connectDB = async () => {
    try {
        const mongoURI = 'mongodb://localhost:27017/jobhub';
        await mongoose.connect(mongoURI);
        console.log('✅ MongoDB connected successfully!');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1);
    }
};
connectDB();

// ========== Routes ==========
app.get('/', (req, res) => {
    res.render('index', { currentPage: 'home' });
});

app.get('/about', (req, res) => {
    res.render('about', { currentPage: 'about' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { currentPage: 'contact' });
});

app.get('/jobs', (req, res) => {
    res.render('jobs', { currentPage: 'jobs' });
});
// Create New Job Route
app.get('/creat-new-job', (req, res) => {
    res.render('afterlogin/layouts/dashboard', {
        body: 'cnj',  // Change this to match your file name (cnj.ejs)
        title: 'Post New Job',
        activePage: 'create-job',
        userName: req.session?.user?.name || 'John Doe',
        userEmail: req.session?.user?.email || 'john@example.com',
        totalJobs: 12,
        activeJobs: 8,
        totalViews: 1234,
        currentPage: 'Create New Job',
        job: null,  // Add this to fix the error
        errors: null  // Add this to fix the error
    });
});
// Save Job Route
app.post('/save/job', async (req, res) => {
    try {
        // 1. Extract form data
        const {
            user_id,
            title,
            type,
            location,
            salary,
            skills,
            description,
            requirements,
            vacancies,
            experience,
            status,
            views
        } = req.body;

        // 2. Validation
        const errors = [];

        if (!title || title.trim().length < 3) {
            errors.push('Job title is required and must be at least 3 characters');
        }

        if (!type) {
            errors.push('Please select a job type');
        }

        if (!location || location.trim().length < 2) {
            errors.push('Location is required');
        }

        if (!skills || skills.trim().length < 2) {
            errors.push('Please enter at least one skill');
        }

        if (!description || description.trim().length < 20) {
            errors.push('Job description must be at least 20 characters');
        }

        if (!requirements || requirements.trim().length < 10) {
            errors.push('Job requirements must be at least 10 characters');
        }

        if (!vacancies || parseInt(vacancies) < 1) {
            errors.push('Number of vacancies must be at least 1');
        }

        if (!experience) {
            errors.push('Please select required experience level');
        }

        // 3. If validation fails, return to form with errors
        if (errors.length > 0) {
            const user = req.session?.user || {
                userId: user_id || 1,
                name: 'John Doe',
                email: 'john@example.com'
            };

            return res.render('afterlogin/layouts/dashboard', {
                body: 'cnj',
                title: 'Post New Job',
                activePage: 'create-job',
                userName: user.name,
                userEmail: user.email,
                user: user,
                totalJobs: 12,
                activeJobs: 8,
                totalViews: 1234,
                currentPage: 'Create New Job',
                job: req.body,  // Return submitted data
                errors: errors  // Show validation errors
            });
        }

        // 4. Process skills (convert comma-separated string to array)
        const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);

        // 5. Process requirements (split by new lines)
        const requirementsArray = requirements.split('\n').filter(r => r.trim());

        // 6. Prepare job data for database
        const jobData = {
            user_id: user_id,
            title: title.trim(),
            type: type,
            location: location.trim(),
            salary: salary ? salary.trim() : 'Negotiable',
            skills: skillsArray,
            description: description.trim(),
            requirements: requirementsArray,
            vacancies: parseInt(vacancies),
            experience: experience,
            status: status || 'active',
            views: parseInt(views) || 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: status === 'active' ? true : false
        };

        // 7. Console the job object for debugging
        console.log('📝 Job Data to Save:', JSON.stringify(jobData, null, 2));

        // 8. Save to database
        const db = mongoose.connection.db;
        const collection = db.collection('job');
        const result = await collection.insertOne(jobData);

        console.log('✅ Job inserted successfully with ID:', result.insertedId);

        // 9. Set success flash message (if using flash)
        req.session.success = 'Job posted successfully!';

        // 10. Redirect to dashboard with success parameter
        res.redirect('/dashboard?success=Job posted successfully!');

    } catch (error) {
        console.error('❌ Error saving job:', error);

        // Handle duplicate key errors or other database errors
        if (error.code === 11000) {
            // Duplicate key error
            req.session.error = 'A job with this title already exists. Please use a different title.';
        } else {
            req.session.error = 'An error occurred while saving the job. Please try again.';
        }

        // Get user data for the form
        const user = req.session?.user || {
            userId: req.body.user_id || 1,
            name: 'John Doe',
            email: 'john@example.com'
        };

        // Return to form with error
        return res.render('afterlogin/layouts/dashboard', {
            body: 'cnj',
            title: 'Post New Job',
            activePage: 'create-job',
            userName: user.name,
            userEmail: user.email,
            user: user,
            totalJobs: 12,
            activeJobs: 8,
            totalViews: 1234,
            currentPage: 'Create New Job',
            job: req.body,  // Return submitted data
            errors: ['An error occurred while saving the job. Please try again.']
        });
    }
});
app.get('/apply', (req, res) => {
    res.render('apply', { currentPage: 'apply' });
});

app.get('/login', (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/dashboard');
    }
    res.render('login', { currentPage: 'login' });
});

app.get('/register', (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/dashboard');
    }
    res.render('register', { currentPage: 'register' });
});

// Register functionality
app.post('/register', async (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        fullname: req.body.fullname,
        phone: req.body.phone,
        accountType: req.body.accountType,
        company: req.body.company,
        termsAccepted: req.body.termsAccepted,
        newsletterOptIn: req.body.newsletterOptIn
    };

    try {
        const db = mongoose.connection.db;
        const collection = db.collection('users');
        const result = await collection.insertOne(userData);
        console.log('User inserted successfully:', result.insertedId);
        res.redirect('/login');
    } catch (error) {
        console.error('Registration error:', error);
        res.redirect('/register');
    }
});

// Login functionality
app.post('/login', async (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    };

    try {
        const db = mongoose.connection.db;
        const collection = db.collection('users');
        const result = await collection.findOne(userData);

        if (!result) {
            return res.redirect('/login?error=invalid');
        } else {
            req.session.userName = result.fullname;
            req.session.userEmail = result.email;
            req.session.userId = result._id;
            req.session.isLoggedIn = true;

            req.session.save((err) => {
                if (err) {
                    console.error('Session save error:', err);
                }
                return res.redirect('/dashboard');
            });
        }
    } catch (error) {
        console.error('Login error:', error);
        return res.redirect('/login');
    }
});

// Dashboard after login page
// In your index.js
app.get('/dashboard', (req, res) => {
    res.render('afterlogin/layouts/dashboard', {
        body: 'dashboard',  // This loads afterlogin/dashboard.ejs
        title: 'Dashboard',
        activePage: 'dashboard',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        totalJobs: 12,
        activeJobs: 8,
        totalViews: 1234
    });
});
// Post New Job
app.get('/post-new-job', (req, res) => {
    res.render('afterlogin/layouts/dashboard', {
        body: 'cnj',  // This loads afterlogin/dashboard.ejs
        title: 'Post New Job',
        activePage: 'cnj',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        totalJobs: 12,
        activeJobs: 8,
        totalViews: 1234
    });
});
// My jobs
app.get('/my-jobs', async (req, res) => {
    const db = mongoose.connection.db;
    const collection = db.collection('job');

    const result = await collection.find({
        user_id: req.session.userId
    }).toArray();

    //  console.log(req.session.userId);
    res.render('afterlogin/layouts/dashboard', {
        body: 'myjobs',  // This loads afterlogin/dashboard.ejs
        title: 'My Jobs',
        activePage: 'myjobs',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        totalJobs: 12,
        activeJobs: 8,
        totalViews: 1234
    });
});
// Applicatoins
app.get('/applications', (req, res) => {
    res.render('afterlogin/layouts/dashboard', {
        body: 'applications',  // This loads afterlogin/dashboard.ejs
        title: 'Applications',
        activePage: 'applications',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        totalJobs: 12,
        activeJobs: 8,
        totalViews: 1234
    });
});
// shortlist
app.get('/short-list', (req, res) => {
    res.render('afterlogin/layouts/dashboard', {
        body: 'shortlisted',  // This loads afterlogin/dashboard.ejs
        title: 'Shortlist',
        activePage: 'shortlisted',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        totalJobs: 12,
        activeJobs: 8,
        totalViews: 1234
    });
});
// settings
app.get('/settings', (req, res) => {
    res.render('afterlogin/layouts/dashboard', {
        body: 'settings',  // This loads afterlogin/dashboard.ejs
        title: 'Applications',
        activePage: 'settings',
        userName: 'John Doe',
        userEmail: 'john@example.com',
        totalJobs: 12,
        activeJobs: 8,
        totalViews: 1234
    });
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Logout error:', err);
        }
        res.redirect('/login');
    });
});

app.listen(3000, () => {
    console.log('App is running on 3000 port');
});