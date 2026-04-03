import React from 'react';

export default function Home() {
    // Manually added static job data - will be replaced with API later
    const jobs = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            type: "Full-time",
            location: "Remote (Worldwide)",
            salary: "$85,000 - $110,000",
            skills: "React, TypeScript, Tailwind, Redux",
            description: "Build responsive and high-performance user interfaces for our job platform. Collaborate with designers and backend engineers to create exceptional user experiences.",
            requirements: "5+ years of frontend experience, strong React skills, understanding of modern JavaScript and state management.",
            vacancies: 3,
            experience: "5+ Years",
            views: 2847
        },
        {
            id: 2,
            title: "Backend Engineer",
            type: "Full-time",
            location: "New York, NY",
            salary: "$100,000 - $135,000",
            skills: "Node.js, Python, PostgreSQL, AWS",
            description: "Design and maintain scalable backend services and RESTful APIs. Optimize database performance and ensure system reliability.",
            requirements: "Strong experience with Node.js or Python, knowledge of cloud infrastructure and microservices architecture.",
            vacancies: 2,
            experience: "4+ Years",
            views: 1923
        },
        {
            id: 3,
            title: "UI/UX Designer",
            type: "Contract",
            location: "San Francisco, CA",
            salary: "$70 - $90 / hour",
            skills: "Figma, Adobe XD, User Research, Prototyping",
            description: "Create beautiful and intuitive designs for web and mobile applications. Conduct user research and usability testing.",
            requirements: "Portfolio showcasing user-centered design, experience with design systems and collaboration tools.",
            vacancies: 1,
            experience: "3+ Years",
            views: 1567
        },
        {
            id: 4,
            title: "DevOps Engineer",
            type: "Full-time",
            location: "Austin, TX",
            salary: "$110,000 - $145,000",
            skills: "Kubernetes, Docker, CI/CD, Terraform, AWS",
            description: "Manage cloud infrastructure and deployment pipelines. Ensure high availability, security, and monitoring.",
            requirements: "Experience with container orchestration, infrastructure as code, and CI/CD tools.",
            vacancies: 2,
            experience: "5+ Years",
            views: 2145
        },
        {
            id: 5,
            title: "Mobile Developer (iOS)",
            type: "Full-time",
            location: "Remote (US only)",
            salary: "$95,000 - $125,000",
            skills: "Swift, UIKit, SwiftUI, Core Data",
            description: "Develop and maintain iOS applications with excellent user experience and performance.",
            requirements: "Published apps in App Store, strong Swift knowledge, experience with MVVM architecture.",
            vacancies: 2,
            experience: "3+ Years",
            views: 876
        },
        {
            id: 6,
            title: "Data Scientist",
            type: "Part-time",
            location: "Boston, MA",
            salary: "$60 - $80 / hour",
            skills: "Python, SQL, Machine Learning, Pandas, TensorFlow",
            description: "Analyze large datasets and build predictive models to drive business decisions.",
            requirements: "Strong statistical background, experience with ML frameworks, data visualization skills.",
            vacancies: 1,
            experience: "3+ Years",
            views: 1102
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-primary text-white py-5" style={{ background: 'linear-gradient(135deg, #0dfd25ff 0%, #0a58ca 100%)' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h1 className="display-3 fw-bold mb-3">Find Your Dream Job Today</h1>
                            <p className="lead mb-4">
                                Discover thousands of job opportunities with top companies.
                                Start your career journey with JobPortal.com - your gateway to professional success.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <button className="btn btn-light btn-lg px-4">Browse Jobs</button>
                                <button className="btn btn-outline-light btn-lg px-4">Post a Job</button>
                            </div>
                            <div className="mt-4 d-flex gap-4">
                                <div>
                                    <span className="fw-bold fs-4">10,000+</span>
                                    <p className="mb-0 small">Active Jobs</p>
                                </div>
                                <div>
                                    <span className="fw-bold fs-4">500+</span>
                                    <p className="mb-0 small">Companies</p>
                                </div>
                                <div>
                                    <span className="fw-bold fs-4">50,000+</span>
                                    <p className="mb-0 small">Happy Candidates</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center">
                            <i className="bi bi-briefcase-fill display-1 opacity-50"></i>
                            <div className="bg-white rounded-4 p-4 shadow mt-3">
                                <h5 className="text-dark mb-3">Quick Job Search</h5>
                                <input type="text" className="form-control mb-2" placeholder="Job title or keyword" />
                                <input type="text" className="form-control mb-2" placeholder="Location" />
                                <button className="btn btn-primary w-100">Search Jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Jobs Section */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Featured Job Opportunities</h2>
                    <p className="lead text-muted">Explore the latest openings from top companies</p>
                </div>

                {/* Job Filters */}
                <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
                    <button className="btn btn-primary rounded-pill px-4">All Jobs</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4">Full-time</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4">Part-time</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4">Contract</button>
                    <button className="btn btn-outline-secondary rounded-pill px-4">Remote</button>
                </div>

                {/* Jobs Grid */}
                <div className="row g-4">
                    {jobs.map((job) => (
                        <div key={job.id} className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <span className={`badge ${job.type === 'Full-time' ? 'bg-success' : job.type === 'Part-time' ? 'bg-info' : 'bg-warning'} rounded-pill px-3 py-2`}>
                                                {job.type}
                                            </span>
                                        </div>
                                        <small className="text-muted">
                                            <i className="bi bi-eye me-1"></i> {job.views} views
                                        </small>
                                    </div>

                                    <h5 className="card-title fw-bold mb-2">{job.title}</h5>

                                    <div className="mb-3">
                                        <p className="text-muted mb-1">
                                            <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                                            {job.location}
                                        </p>
                                        <p className="text-success fw-bold mb-1">
                                            <i className="bi bi-cash-stack me-2"></i>
                                            {job.salary}
                                        </p>
                                        <p className="text-muted mb-1">
                                            <i className="bi bi-briefcase me-2"></i>
                                            Experience: {job.experience}
                                        </p>
                                        <p className="text-muted mb-2">
                                            <i className="bi bi-people me-2"></i>
                                            Vacancies: {job.vacancies}
                                        </p>
                                    </div>

                                    <div className="mb-3">
                                        <p className="small fw-bold mb-2">Required Skills:</p>
                                        <div className="d-flex flex-wrap gap-1">
                                            {job.skills.split(', ').map((skill, idx) => (
                                                <span key={idx} className="badge bg-light text-dark border rounded-pill px-2 py-1">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="card-text text-muted small mb-3">
                                        {job.description.substring(0, 100)}...
                                    </p>

                                    <button className="btn btn-outline-primary w-100 rounded-pill">
                                        View Details <i className="bi bi-arrow-right ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Jobs Button */}
                <div className="text-center mt-5">
                    <button className="btn btn-primary btn-lg rounded-pill px-5">
                        Browse All Jobs <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-light py-5">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Why Choose JobPortal?</h2>
                        <p className="lead text-muted">We make your job search easier and faster</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4 text-center">
                            <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                                <i className="bi bi-search fs-1 text-primary mb-3 d-block"></i>
                                <h4 className="fw-bold mb-3">Easy Job Search</h4>
                                <p className="text-muted">Find relevant jobs with advanced filters and smart recommendations.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                                <i className="bi bi-building fs-1 text-primary mb-3 d-block"></i>
                                <h4 className="fw-bold mb-3">Top Companies</h4>
                                <p className="text-muted">Connect with industry-leading employers and startups.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                                <i className="bi bi-chat-dots fs-1 text-primary mb-3 d-block"></i>
                                <h4 className="fw-bold mb-3">Career Support</h4>
                                <p className="text-muted">Get resume tips, interview preparation, and career guidance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-dark text-white py-5">
                <div className="container text-center py-4">
                    <h2 className="display-5 fw-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="lead mb-4">Join thousands of professionals who found their dream jobs through JobPortal</p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <button className="btn btn-primary btn-lg px-5 rounded-pill">Create Account</button>
                        <button className="btn btn-outline-light btn-lg px-5 rounded-pill">Post a Job</button>
                    </div>
                </div>
            </div>


            <style jsx>{`
        .transition {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
      `}</style>
        </div>
    );
}