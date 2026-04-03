import React from 'react';

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-primary text-white py-5" style={{ background: 'linear-gradient(135deg, #0dfd25ff 0%, #0a58ca 100%)' }}>
                <div className="container py-4">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="display-3 fw-bold mb-3">About Us</h1>
                            <p className="lead mb-0">
                                Connecting talent with opportunity since 2020
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container py-5">
                {/* Our Story Section */}
                <div className="row mb-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="display-6 fw-bold mb-4">Our Story</h2>
                        <p className="lead text-muted mb-3">
                            JobPortal.com was founded with a simple mission: to make job searching easier, faster, and more effective for everyone.
                        </p>
                        <p className="text-muted">
                            In today's fast-paced digital world, finding the right job opportunity shouldn't be complicated. We've built a platform that connects talented professionals with forward-thinking companies, creating meaningful career opportunities that transform lives.
                        </p>
                        <p className="text-muted">
                            What started as a small initiative has now grown into a trusted job portal serving thousands of job seekers and employers worldwide. Our commitment to innovation, transparency, and user experience drives everything we do.
                        </p>
                        <div className="mt-4">
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
                                <span>10,000+ successful job placements</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
                                <span>500+ trusted company partners</span>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-check-circle-fill text-primary me-3 fs-4"></i>
                                <span>50,000+ active job seekers</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-light rounded-4 p-4 h-100 d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <i className="bi bi-building fs-1 text-primary mb-3 d-block"></i>
                                <i className="bi bi-people fs-1 text-primary mb-3 d-block"></i>
                                <i className="bi bi-graph-up fs-1 text-primary mb-3 d-block"></i>
                                <p className="text-muted fst-italic mt-3">
                                    "Building careers, shaping futures"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <div className="text-center mb-3">
                                    <i className="bi bi-bullseye display-4 text-primary"></i>
                                </div>
                                <h3 className="fw-bold text-center mb-3">Our Mission</h3>
                                <p className="text-muted text-center mb-0">
                                    To empower individuals to find fulfilling careers and help organizations build exceptional teams through innovative technology and personalized support.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <div className="text-center mb-3">
                                    <i className="bi bi-eye display-4 text-primary"></i>
                                </div>
                                <h3 className="fw-bold text-center mb-3">Our Vision</h3>
                                <p className="text-muted text-center mb-0">
                                    To become the world's most trusted job platform where every professional finds their dream job and every company discovers their ideal candidate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-5">
                    <div className="text-center mb-4">
                        <h2 className="display-6 fw-bold mb-3">Our Core Values</h2>
                        <p className="lead text-muted">The principles that guide everything we do</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-3 col-sm-6">
                            <div className="text-center">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-heart-fill text-primary fs-2"></i>
                                </div>
                                <h5 className="fw-bold">Integrity</h5>
                                <p className="small text-muted">Honest and transparent in all our interactions</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="text-center">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-stars text-primary fs-2"></i>
                                </div>
                                <h5 className="fw-bold">Innovation</h5>
                                <p className="small text-muted">Constantly improving and evolving our platform</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="text-center">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-people-fill text-primary fs-2"></i>
                                </div>
                                <h5 className="fw-bold">Collaboration</h5>
                                <p className="small text-muted">Building strong relationships with our community</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="text-center">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                                    <i className="bi bi-trophy-fill text-primary fs-2"></i>
                                </div>
                                <h5 className="fw-bold">Excellence</h5>
                                <p className="small text-muted">Delivering the highest quality service</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-5">
                    <div className="text-center mb-4">
                        <h2 className="display-6 fw-bold mb-3">Meet Our Leadership</h2>
                        <p className="lead text-muted">Passionate professionals dedicated to your success</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm rounded-4 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3" style={{ width: '100px', height: '100px' }}>
                                        <i className="bi bi-person-circle text-primary fs-1 m-auto"></i>
                                    </div>
                                    <h5 className="fw-bold mb-1">John Anderson</h5>
                                    <p className="text-primary small mb-2">CEO & Founder</p>
                                    <p className="small text-muted">
                                        15+ years in recruitment technology, passionate about connecting talent with opportunity.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm rounded-4 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3" style={{ width: '100px', height: '100px' }}>
                                        <i className="bi bi-person-circle text-primary fs-1 m-auto"></i>
                                    </div>
                                    <h5 className="fw-bold mb-1">Sarah Martinez</h5>
                                    <p className="text-primary small mb-2">Head of Operations</p>
                                    <p className="small text-muted">
                                        Expert in scaling platforms and ensuring exceptional user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm rounded-4 text-center">
                                <div className="card-body p-4">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3" style={{ width: '100px', height: '100px' }}>
                                        <i className="bi bi-person-circle text-primary fs-1 m-auto"></i>
                                    </div>
                                    <h5 className="fw-bold mb-1">David Chen</h5>
                                    <p className="text-primary small mb-2">CTO</p>
                                    <p className="small text-muted">
                                        Technology leader driving innovation in job matching algorithms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="bg-primary bg-opacity-10 rounded-4 p-4 mb-4">
                    <div className="row text-center">
                        <div className="col-md-3 col-6 mb-3 mb-md-0">
                            <h3 className="display-6 fw-bold text-primary">2020</h3>
                            <p className="text-muted mb-0">Founded</p>
                        </div>
                        <div className="col-md-3 col-6 mb-3 mb-md-0">
                            <h3 className="display-6 fw-bold text-primary">10K+</h3>
                            <p className="text-muted mb-0">Jobs Posted</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h3 className="display-6 fw-bold text-primary">500+</h3>
                            <p className="text-muted mb-0">Companies</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <h3 className="display-6 fw-bold text-primary">98%</h3>
                            <p className="text-muted mb-0">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center py-4">
                    <h3 className="fw-bold mb-3">Ready to Start Your Journey?</h3>
                    <p className="text-muted mb-4">Join thousands of professionals who found their dream jobs through JobPortal</p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <button className="btn btn-primary btn-lg rounded-pill px-4">
                            Browse Jobs <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                        <button className="btn btn-outline-secondary btn-lg rounded-pill px-4">
                            Contact Us <i className="bi bi-envelope ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;