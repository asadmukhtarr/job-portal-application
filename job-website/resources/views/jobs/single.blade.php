@extends('layouts.header')
@section('title','Senior Frontend Developer (React) - TechVision Inc.')
@section('content')
<style>
    /* Additional CSS for Single Job Page */
    :root {
        --main-color: #135E85;
        --main-color-light: rgba(19, 94, 133, 0.1);
        --main-color-dark: #0e4a6b;
        --main-color-lightest: rgba(19, 94, 133, 0.05);
        --text-color: #334155;
    }
    
    .job-hero {
        background: linear-gradient(135deg, var(--main-color-lightest) 0%, rgba(255,255,255,1) 100%);
        padding: 80px 0 40px;
        border-bottom: 3px solid var(--main-color-light);
    }
    
    .section-title {
        color: var(--main-color);
        font-weight: 700;
        margin-bottom: 25px;
        position: relative;
        padding-bottom: 15px;
    }
    
    .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 4px;
        background-color: var(--main-color);
        border-radius: 2px;
    }
    
    .job-header-card {
        background: white;
        border-radius: 15px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        margin-bottom: 30px;
        border-left: 5px solid var(--main-color);
    }
    
    .company-logo-large {
        width: 120px;
        height: 120px;
        background-color: white;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--main-color-light);
        box-shadow: 0 5px 15px rgba(19, 94, 133, 0.1);
        margin-right: 30px;
        flex-shrink: 0;
    }
    
    .company-logo-large i {
        font-size: 50px;
        color: var(--main-color);
    }
    
    .job-title-main {
        color: var(--main-color);
        font-weight: 700;
        margin-bottom: 10px;
        font-size: 2.2rem;
    }
    
    .company-name-large {
        color: var(--text-color);
        font-size: 1.3rem;
        margin-bottom: 20px;
    }
    
    .job-meta-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin: 25px 0;
    }
    
    .meta-item {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: var(--main-color-lightest);
        border-radius: 10px;
        transition: all 0.3s ease;
    }
    
    .meta-item:hover {
        background-color: var(--main-color-light);
        transform: translateY(-3px);
    }
    
    .meta-icon {
        width: 50px;
        height: 50px;
        background-color: var(--main-color);
        color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        flex-shrink: 0;
    }
    
    .meta-icon i {
        font-size: 20px;
    }
    
    .meta-content h4 {
        font-size: 0.9rem;
        color: #64748b;
        margin-bottom: 5px;
    }
    
    .meta-content p {
        font-weight: 600;
        color: var(--text-color);
        margin-bottom: 0;
    }
    
    .job-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px 0;
    }
    
    .job-badge {
        padding: 8px 20px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.9rem;
    }
    
    .badge-fulltime {
        background-color: var(--main-color);
        color: white;
    }
    
    .badge-remote {
        background-color: #10b981;
        color: white;
    }
    
    .badge-urgent {
        background-color: #ef4444;
        color: white;
    }
    
    .badge-featured {
        background-color: #f59e0b;
        color: white;
    }
    
    .job-content-card {
        background: white;
        border-radius: 15px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        margin-bottom: 30px;
    }
    
    .job-description {
        line-height: 1.8;
        color: var(--text-color);
    }
    
    .requirements-list, .benefits-list {
        list-style: none;
        padding-left: 0;
    }
    
    .requirements-list li, .benefits-list li {
        padding: 12px 0;
        border-bottom: 1px solid #f1f5f9;
        display: flex;
        align-items: flex-start;
    }
    
    .requirements-list li:last-child, .benefits-list li:last-child {
        border-bottom: none;
    }
    
    .requirements-list li i, .benefits-list li i {
        color: var(--main-color);
        margin-right: 12px;
        margin-top: 3px;
        flex-shrink: 0;
    }
    
    .skills-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px 0;
    }
    
    .skill-tag {
        background-color: var(--main-color-light);
        color: var(--main-color);
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.3s ease;
    }
    
    .skill-tag:hover {
        background-color: var(--main-color);
        color: white;
        transform: translateY(-2px);
    }
    
    .sidebar-widget {
        background: white;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        margin-bottom: 30px;
    }
    
    .widget-title {
        color: var(--main-color);
        font-weight: 600;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--main-color-light);
    }
    
    .btn-apply-main {
        background-color: var(--main-color);
        color: white;
        border: none;
        border-radius: 10px;
        padding: 16px 30px;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .btn-apply-main:hover {
        background-color: var(--main-color-dark);
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(19, 94, 133, 0.3);
    }
    
    .btn-apply-main i {
        margin-right: 10px;
        font-size: 1.2rem;
    }
    
    .btn-save-job {
        background-color: transparent;
        color: var(--main-color);
        border: 2px solid var(--main-color);
        border-radius: 10px;
        padding: 16px 30px;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }
    
    .btn-save-job:hover {
        background-color: var(--main-color-light);
    }
    
    .btn-save-job i {
        margin-right: 10px;
    }
    
    .company-info {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .company-info-logo {
        width: 60px;
        height: 60px;
        background-color: var(--main-color-light);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        flex-shrink: 0;
    }
    
    .company-info-logo i {
        font-size: 25px;
        color: var(--main-color);
    }
    
    .company-details {
        flex-grow: 1;
    }
    
    .company-details h4 {
        color: var(--main-color);
        margin-bottom: 5px;
    }
    
    .company-details p {
        color: #64748b;
        font-size: 0.9rem;
        margin-bottom: 5px;
    }
    
    .view-company-btn {
        color: var(--main-color);
        font-weight: 600;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        margin-top: 10px;
    }
    
    .view-company-btn:hover {
        color: var(--main-color-dark);
    }
    
    .view-company-btn i {
        margin-left: 5px;
    }
    
    .share-job {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    
    .share-btn {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: all 0.3s ease;
        text-decoration: none;
    }
    
    .share-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    
    .share-facebook { background-color: #1877f2; }
    .share-twitter { background-color: #1da1f2; }
    .share-linkedin { background-color: #0077b5; }
    .share-whatsapp { background-color: #25d366; }
    
    .similar-jobs {
        background-color: var(--main-color-lightest);
        padding: 60px 0;
        margin-top: 40px;
    }
    
    .similar-job-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        margin-bottom: 25px;
        transition: all 0.3s ease;
        height: 100%;
    }
    
    .similar-job-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(19, 94, 133, 0.15);
    }
    
    .similar-job-card h5 {
        color: var(--main-color);
        margin-bottom: 10px;
    }
    
    .similar-job-company {
        color: #64748b;
        font-size: 0.9rem;
        margin-bottom: 15px;
    }
    
    .similar-job-meta {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        color: #475569;
        font-size: 0.85rem;
    }
    
    .application-stats {
        display: flex;
        justify-content: space-between;
        background-color: var(--main-color-lightest);
        padding: 15px;
        border-radius: 10px;
        margin-top: 20px;
    }
    
    .stat-item {
        text-align: center;
    }
    
    .stat-number {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--main-color);
    }
    
    .stat-label {
        font-size: 0.85rem;
        color: #64748b;
    }
    
    .job-details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin: 30px 0;
    }
    
    .detail-item {
        background-color: var(--main-color-lightest);
        padding: 20px;
        border-radius: 10px;
    }
    
    .detail-item h5 {
        color: var(--main-color);
        font-size: 1rem;
        margin-bottom: 10px;
    }
    
    @media (max-width: 768px) {
        .job-hero {
            padding: 60px 0 30px;
        }
        
        .job-header-card {
            padding: 25px;
        }
        
        .company-logo-large {
            width: 80px;
            height: 80px;
            margin-right: 20px;
            margin-bottom: 20px;
        }
        
        .company-logo-large i {
            font-size: 35px;
        }
        
        .job-title-main {
            font-size: 1.8rem;
        }
        
        .job-meta-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

<!-- Hero Section -->
<section class="job-hero">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="{{ route('welcome') }}" class="text-decoration-none text-main">Home</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('jobs') }}" class="text-decoration-none text-main">Available Jobs</a></li>
                        <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-main">Technology</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Senior Frontend Developer</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</section>

<!-- Main Job Content -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <!-- Main Content -->
            <div class="col-lg-8">
                <!-- Job Header -->
                <div class="job-header-card">
                    <div class="d-flex flex-column flex-md-row align-items-start">
                        <div class="company-logo-large">
                            <i class="fa fa-building"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h1 class="job-title-main">Senior Frontend Developer (React)</h1>
                            <p class="company-name-large">TechVision Inc.</p>
                            
                            <div class="job-badges">
                                <span class="job-badge badge-fulltime">Full Time</span>
                                <span class="job-badge badge-remote">Remote</span>
                                <span class="job-badge badge-urgent">Urgent Hiring</span>
                                <span class="job-badge badge-featured">Featured</span>
                            </div>
                            
                            <div class="job-meta-grid">
                                <div class="meta-item">
                                    <div class="meta-icon">
                                        <i class="fa fa-money"></i>
                                    </div>
                                    <div class="meta-content">
                                        <h4>Salary</h4>
                                        <p>$120,000 - $150,000 / year</p>
                                    </div>
                                </div>
                                
                                <div class="meta-item">
                                    <div class="meta-icon">
                                        <i class="fa fa-map-marker"></i>
                                    </div>
                                    <div class="meta-content">
                                        <h4>Location</h4>
                                        <p>Remote (Global) / San Francisco, CA</p>
                                    </div>
                                </div>
                                
                                <div class="meta-item">
                                    <div class="meta-icon">
                                        <i class="fa fa-clock-o"></i>
                                    </div>
                                    <div class="meta-content">
                                        <h4>Experience</h4>
                                        <p>5+ years required</p>
                                    </div>
                                </div>
                                
                                <div class="meta-item">
                                    <div class="meta-icon">
                                        <i class="fa fa-graduation-cap"></i>
                                    </div>
                                    <div class="meta-content">
                                        <h4>Education</h4>
                                        <p>Bachelor's Degree Preferred</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="application-stats">
                                <div class="stat-item">
                                    <div class="stat-number">247</div>
                                    <div class="stat-label">Views</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">89</div>
                                    <div class="stat-label">Applications</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">5</div>
                                    <div class="stat-label">Days Left</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">Easy</div>
                                    <div class="stat-label">Apply</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Job Description -->
                <div class="job-content-card">
                    <h2 class="section-title">Job Description</h2>
                    <div class="job-description">
                        <p>We are seeking a talented Senior Frontend Developer to join our innovative team at TechVision Inc. In this role, you'll be responsible for building cutting-edge web applications that serve millions of users worldwide.</p>
                        
                        <p>As a Senior Frontend Developer, you'll work closely with our design and backend teams to create responsive, accessible, and performant user interfaces. You'll have the opportunity to mentor junior developers and contribute to architectural decisions.</p>
                        
                        <h4 class="mt-4 mb-3 text-main">Key Responsibilities:</h4>
                        <ul class="requirements-list">
                            <li><i class="fa fa-check-circle"></i> Develop and maintain high-quality, scalable frontend applications using React and TypeScript</li>
                            <li><i class="fa fa-check-circle"></i> Collaborate with UX/UI designers to implement pixel-perfect designs</li>
                            <li><i class="fa fa-check-circle"></i> Optimize applications for maximum speed and scalability</li>
                            <li><i class="fa fa-check-circle"></i> Write clean, maintainable, and well-documented code</li>
                            <li><i class="fa fa-check-circle"></i> Participate in code reviews and provide constructive feedback</li>
                            <li><i class="fa fa-check-circle"></i> Implement responsive designs that work across all devices</li>
                            <li><i class="fa fa-check-circle"></i> Integrate with backend APIs and third-party services</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Requirements -->
                <div class="job-content-card">
                    <h2 class="section-title">Requirements</h2>
                    <ul class="requirements-list">
                        <li><i class="fa fa-check"></i> 5+ years of professional experience with React and modern JavaScript/TypeScript</li>
                        <li><i class="fa fa-check"></i> Strong proficiency in React, Redux, and React Hooks</li>
                        <li><i class="fa fa-check"></i> Experience with Next.js and server-side rendering</li>
                        <li><i class="fa fa-check"></i> Solid understanding of HTML5, CSS3, and responsive design</li>
                        <li><i class="fa fa-check"></i> Experience with testing frameworks (Jest, React Testing Library)</li>
                        <li><i class="fa fa-check"></i> Knowledge of GraphQL and REST APIs</li>
                        <li><i class="fa fa-check"></i> Familiarity with CI/CD pipelines and deployment processes</li>
                        <li><i class="fa fa-check"></i> Excellent problem-solving and communication skills</li>
                    </ul>
                    
                    <h4 class="mt-4 mb-3 text-main">Nice to Have:</h4>
                    <ul class="requirements-list">
                        <li><i class="fa fa-star"></i> Experience with micro-frontend architecture</li>
                        <li><i class="fa fa-star"></i> Knowledge of WebSocket and real-time applications</li>
                        <li><i class="fa fa-star"></i> Familiarity with AWS or other cloud platforms</li>
                        <li><i class="fa fa-star"></i> Open source contributions or personal projects</li>
                    </ul>
                </div>
                
                <!-- Skills Required -->
                <div class="job-content-card">
                    <h2 class="section-title">Required Skills</h2>
                    <div class="skills-tags">
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">TypeScript</span>
                        <span class="skill-tag">Next.js</span>
                        <span class="skill-tag">Redux</span>
                        <span class="skill-tag">GraphQL</span>
                        <span class="skill-tag">HTML5/CSS3</span>
                        <span class="skill-tag">Jest</span>
                        <span class="skill-tag">REST APIs</span>
                        <span class="skill-tag">Responsive Design</span>
                        <span class="skill-tag">Webpack</span>
                        <span class="skill-tag">Git</span>
                        <span class="skill-tag">AWS</span>
                    </div>
                </div>
                
                <!-- Benefits -->
                <div class="job-content-card">
                    <h2 class="section-title">Benefits & Perks</h2>
                    <div class="job-details-grid">
                        <div class="detail-item">
                            <h5><i class="fa fa-heartbeat me-2"></i> Health & Wellness</h5>
                            <p class="mb-0">Comprehensive medical, dental, and vision insurance</p>
                        </div>
                        <div class="detail-item">
                            <h5><i class="fa fa-money me-2"></i> Financial Benefits</h5>
                            <p class="mb-0">Competitive salary, equity options, 401(k) matching</p>
                        </div>
                        <div class="detail-item">
                            <h5><i class="fa fa-plane me-2"></i> Time Off</h5>
                            <p class="mb-0">Unlimited PTO, paid parental leave, flexible holidays</p>
                        </div>
                        <div class="detail-item">
                            <h5><i class="fa fa-graduation-cap me-2"></i> Learning & Growth</h5>
                            <p class="mb-0">$3,000 annual learning budget, conference allowances</p>
                        </div>
                        <div class="detail-item">
                            <h5><i class="fa fa-home me-2"></i> Remote Work</h5>
                            <p class="mb-0">Fully remote, home office stipend, co-working spaces</p>
                        </div>
                        <div class="detail-item">
                            <h5><i class="fa fa-users me-2"></i> Team Culture</h5>
                            <p class="mb-0">Team retreats, wellness programs, company events</p>
                        </div>
                    </div>
                </div>
                
                <!-- About Company -->
                <div class="job-content-card">
                    <h2 class="section-title">About TechVision Inc.</h2>
                    <div class="job-description">
                        <p>TechVision Inc. is a leading technology company specializing in innovative software solutions for businesses worldwide. Founded in 2015, we've grown to serve over 10,000 clients across 50+ countries.</p>
                        
                        <p>Our mission is to empower businesses through technology. We believe in creating products that make a real difference in people's lives while fostering a culture of innovation, collaboration, and continuous learning.</p>
                        
                        <div class="mt-4">
                            <h5 class="text-main">Company Culture:</h5>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <ul class="requirements-list">
                                        <li><i class="fa fa-check text-success"></i> Flexible remote work policy</li>
                                        <li><i class="fa fa-check text-success"></i> Transparent communication</li>
                                        <li><i class="fa fa-check text-success"></i> Emphasis on work-life balance</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="requirements-list">
                                        <li><i class="fa fa-check text-success"></i> Diverse and inclusive environment</li>
                                        <li><i class="fa fa-check text-success"></i> Regular team-building activities</li>
                                        <li><i class="fa fa-check text-success"></i> Continuous learning opportunities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Sidebar -->
            <div class="col-lg-4">
                <!-- Apply Now Card -->
                <div class="sidebar-widget">
                    <h3 class="widget-title">Apply for this Job</h3>
                    <button class="btn btn-apply-main">
                        <i class="fa fa-paper-plane"></i>
                        Apply Now
                    </button>
                    <button class="btn btn-save-job">
                        <i class="fa fa-bookmark"></i>
                        Save for Later
                    </button>
                    
                    <div class="mt-4 pt-3 border-top">
                        <h6 class="text-main mb-3">Application Deadline</h6>
                        <div class="d-flex align-items-center">
                            <i class="fa fa-calendar text-main me-2"></i>
                            <span>December 30, 2024</span>
                        </div>
                        <div class="progress mt-2" style="height: 8px;">
                            <div class="progress-bar bg-main" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small class="text-muted">5 days remaining</small>
                    </div>
                </div>
                
                <!-- Company Info -->
                <div class="sidebar-widget">
                    <h3 class="widget-title">Company Information</h3>
                    <div class="company-info">
                        <div class="company-info-logo">
                            <i class="fa fa-building"></i>
                        </div>
                        <div class="company-details">
                            <h4>TechVision Inc.</h4>
                            <p><i class="fa fa-map-marker text-main me-1"></i> San Francisco, CA</p>
                            <p><i class="fa fa-globe text-main me-1"></i> techvision.com</p>
                            <p><i class="fa fa-users text-main me-1"></i> 500+ employees</p>
                            <a href="#" class="view-company-btn">
                                View Company Profile
                                <i class="fa fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Job Details -->
                <div class="sidebar-widget">
                    <h3 class="widget-title">Job Details</h3>
                    <ul class="requirements-list">
                        <li>
                            <i class="fa fa-briefcase text-main"></i>
                            <div>
                                <strong>Job Type:</strong>
                                <div>Full Time</div>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-clock-o text-main"></i>
                            <div>
                                <strong>Experience Level:</strong>
                                <div>Senior (5+ years)</div>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-graduation-cap text-main"></i>
                            <div>
                                <strong>Education:</strong>
                                <div>Bachelor's Degree Preferred</div>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-industry text-main"></i>
                            <div>
                                <strong>Industry:</strong>
                                <div>Technology / Software</div>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-calendar text-main"></i>
                            <div>
                                <strong>Posted:</strong>
                                <div>December 1, 2024</div>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-refresh text-main"></i>
                            <div>
                                <strong>Job ID:</strong>
                                <div>TECH-78945</div>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <!-- Share Job -->
                <div class="sidebar-widget">
                    <h3 class="widget-title">Share This Job</h3>
                    <div class="share-job">
                        <a href="#" class="share-btn share-facebook">
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a href="#" class="share-btn share-twitter">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" class="share-btn share-linkedin">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a href="#" class="share-btn share-whatsapp">
                            <i class="fa fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Report Job -->
                <div class="sidebar-widget">
                    <div class="text-center">
                        <a href="#" class="text-decoration-none text-muted">
                            <i class="fa fa-flag me-1"></i>
                            Report this job
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Similar Jobs -->
<section class="similar-jobs">
    <div class="container">
        <h2 class="section-title text-center">Similar Jobs You Might Like</h2>
        <p class="text-center mb-5">Browse other opportunities that match your skills and interests</p>
        
        <div class="row">
            <div class="col-md-4">
                <div class="similar-job-card">
                    <h5>React Developer</h5>
                    <p class="similar-job-company">Digital Solutions LLC</p>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span class="badge bg-main">Remote</span>
                        <span class="badge bg-success">$100k - $130k</span>
                    </div>
                    <div class="similar-job-meta">
                        <span><i class="fa fa-map-marker text-main me-1"></i> Remote</span>
                        <span><i class="fa fa-clock-o text-main me-1"></i> Full Time</span>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="similar-job-card">
                    <h5>Frontend Engineer</h5>
                    <p class="similar-job-company">InnovateTech Corp</p>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span class="badge bg-main">Hybrid</span>
                        <span class="badge bg-success">$110k - $140k</span>
                    </div>
                    <div class="similar-job-meta">
                        <span><i class="fa fa-map-marker text-main me-1"></i> New York, NY</span>
                        <span><i class="fa fa-clock-o text-main me-1"></i> Full Time</span>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="similar-job-card">
                    <h5>JavaScript Developer</h5>
                    <p class="similar-job-company">WebCraft Studios</p>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span class="badge bg-main">Remote</span>
                        <span class="badge bg-success">$90k - $120k</span>
                    </div>
                    <div class="similar-job-meta">
                        <span><i class="fa fa-map-marker text-main me-1"></i> Remote</span>
                        <span><i class="fa fa-clock-o text-main me-1"></i> Contract</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-4">
            <a href="{{ route('jobs') }}" class="btn btn-apply-main" style="width: auto; padding: 12px 30px;">
                <i class="fa fa-briefcase me-2"></i>
                View All Similar Jobs
            </a>
        </div>
    </div>
</section>

@endsection