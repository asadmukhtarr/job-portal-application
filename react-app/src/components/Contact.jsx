import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-primary text-white py-4" style={{ background: 'linear-gradient(135deg, #0dfd25ff 0%, #0a58ca 100%)' }}>
                <div className="container py-4">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
                            <p className="lead mb-0">
                                We'd love to hear from you. Get in touch with our team
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {/* Contact Information */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">
                                <h3 className="fw-bold mb-4">Get in Touch</h3>
                                <p className="text-muted mb-4">
                                    Have questions about job listings, account issues, or partnership opportunities? Our team is here to help.
                                </p>

                                <div className="mb-4">
                                    <div className="d-flex mb-3">
                                        <div className="me-3">
                                            <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Our Office</h6>
                                            <p className="text-muted mb-0">123 Business Avenue, Suite 100<br />New York, NY 10001, USA</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3">
                                        <div className="me-3">
                                            <i className="bi bi-envelope-fill text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Email Us</h6>
                                            <p className="text-muted mb-0">support@jobportal.com<br />careers@jobportal.com</p>
                                        </div>
                                    </div>

                                    <div className="d-flex mb-3">
                                        <div className="me-3">
                                            <i className="bi bi-telephone-fill text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Call Us</h6>
                                            <p className="text-muted mb-0">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <div className="me-3">
                                            <i className="bi bi-clock-fill text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Business Hours</h6>
                                            <p className="text-muted mb-0">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h6 className="fw-bold mb-3">Follow Us</h6>
                                    <div className="d-flex gap-2">
                                        <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                        <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                        <a href="#" className="btn btn-outline-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-4 p-lg-5">
                                <h3 className="fw-bold mb-4">Send Us a Message</h3>

                                {submitted && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        Thank you for contacting us! We'll get back to you within 24 hours.
                                        <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label fw-semibold">Full Name *</label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white">
                                                    <i className="bi bi-person text-primary"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label fw-semibold">Email Address *</label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white">
                                                    <i className="bi bi-envelope text-primary"></i>
                                                </span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="subject" className="form-label fw-semibold">Subject *</label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white">
                                                    <i className="bi bi-chat-text text-primary"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="How can we help you?"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label fw-semibold">Message *</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                rows="6"
                                                placeholder="Please describe your question or concern in detail..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5">
                                                Send Message <i className="bi bi-send ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                            <div className="card-body p-0">
                                <iframe
                                    title="Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7e1b9%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1644262070686!5m2!1sen!2sus"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="text-center mb-4">
                            <h2 className="display-6 fw-bold">Frequently Asked Questions</h2>
                            <p className="lead text-muted">Find quick answers to common questions</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3">
                                            <i className="bi bi-question-circle-fill text-primary me-2"></i>
                                            How do I apply for a job?
                                        </h5>
                                        <p className="text-muted mb-0">
                                            Simply browse our job listings, click on the job you're interested in, and click the "Apply Now" button. You'll be guided through the application process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3">
                                            <i className="bi bi-question-circle-fill text-primary me-2"></i>
                                            How can employers post jobs?
                                        </h5>
                                        <p className="text-muted mb-0">
                                            Employers can create a company account, choose a subscription plan, and start posting job openings immediately. Contact our sales team for enterprise solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3">
                                            <i className="bi bi-question-circle-fill text-primary me-2"></i>
                                            Is there a fee for job seekers?
                                        </h5>
                                        <p className="text-muted mb-0">
                                            No, JobPortal is completely free for job seekers. You can browse jobs, apply, and create profiles at no cost.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm rounded-4 h-100">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3">
                                            <i className="bi bi-question-circle-fill text-primary me-2"></i>
                                            How do I reset my password?
                                        </h5>
                                        <p className="text-muted mb-0">
                                            Click on "Forgot Password" on the login page, enter your registered email, and we'll send you instructions to reset your password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Hours */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="bg-primary bg-opacity-10 rounded-4 p-4 text-center">
                            <i className="bi bi-headset display-4 text-primary"></i>
                            <h3 className="fw-bold mt-3 mb-2">Need Immediate Assistance?</h3>
                            <p className="lead mb-3">Our support team is ready to help you</p>
                            <div className="d-flex justify-content-center gap-4 flex-wrap">
                                <div>
                                    <i className="bi bi-telephone-fill text-primary me-2"></i>
                                    <strong>+1 (555) 123-4567</strong>
                                </div>
                                <div>
                                    <i className="bi bi-envelope-fill text-primary me-2"></i>
                                    <strong>support@jobportal.com</strong>
                                </div>
                                <div>
                                    <i className="bi bi-chat-dots-fill text-primary me-2"></i>
                                    <strong>Live Chat (9 AM - 6 PM)</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}