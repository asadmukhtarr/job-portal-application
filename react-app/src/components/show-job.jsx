import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowJob() {
    const { id } = useParams();
    // Static job data - this would come from API/route params in real implementation
    const [job, setJob] = useState({});
    const fetchJob = async () => {
        const response = await fetch(`http://localhost:8001/api/vacancy/${id}`)
        const data = await response.json();
        setJob(data.vacancy);
        // console.log(data.vacancy);
    }

    const [showApplyForm, setShowApplyForm] = useState(false);
    const [applicationSubmitted, setApplicationSubmitted] = useState(false);
    const [applicationData, setApplicationData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: ''
    });

    const handleApplyChange = (e) => {
        setApplicationData({
            ...applicationData,
            [e.target.name]: e.target.value
        });
    };

    const handleApplySubmit = (e) => {
        e.preventDefault();
        // Here you would send the application to your backend
        console.log('Application submitted:', applicationData);
        setApplicationSubmitted(true);
        setTimeout(() => setApplicationSubmitted(false), 3000);
        setShowApplyForm(false);
        setApplicationData({ fullName: '', email: '', phone: '', coverLetter: '', resume: '' });
    };
    useEffect(function () {
        fetchJob();
    });
    return (
        <div className="bg-light">
            {/* Job Header */}
            <div className="bg-primary text-white py-4" style={{ background: 'linear-gradient(135deg, #0dfd25ff 0%, #0a58ca 100%)' }}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <span className="fs-1">{job.companyLogo}</span>
                                </div>
                                <div>
                                    <h1 className="display-5 fw-bold mb-2">{job.title}</h1>
                                    <p className="lead mb-0">{job.company}</p>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-3 mt-3">
                                <span className="badge bg-light text-dark rounded-pill px-3 py-2">
                                    <i className="bi bi-briefcase me-2"></i>{job.type}
                                </span>
                                <span className="badge bg-light text-dark rounded-pill px-3 py-2">
                                    <i className="bi bi-geo-alt me-2"></i>{job.location}
                                </span>
                                <span className="badge bg-light text-dark rounded-pill px-3 py-2">
                                    <i className="bi bi-cash-stack me-2"></i>{job.salary}
                                </span>
                                <span className="badge bg-light text-dark rounded-pill px-3 py-2">
                                    <i className="bi bi-eye me-2"></i>{job.views} views
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                            <button className="btn btn-light btn-lg rounded-pill px-5 me-2" onClick={() => setShowApplyForm(true)}>
                                Apply Now <i className="bi bi-arrow-right ms-2"></i>
                            </button>
                            <button className="btn btn-outline-light btn-lg rounded-pill px-4">
                                <i className="bi bi-bookmark"></i> Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        {/* Job Description */}
                        <div className="card border-0 shadow-sm rounded-4 mb-4">
                            <div className="card-body p-4">
                                <h3 className="fw-bold mb-3">Job Description</h3>
                                <p className="text-muted">{job.description}</p>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="card border-0 shadow-sm rounded-4 mb-4">
                            <div className="card-body p-4">
                                <h3 className="fw-bold mb-3">Requirements</h3>
                                <p className="text-muted">{job.requirements}</p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="card border-0 shadow-sm rounded-4 mb-4">
                            <div className="card-body p-4">
                                <h3 className="fw-bold mb-3">Required Skills</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    {job.skills?.split(', ').map((skill, idx) => (
                                        <span key={idx} className="badge bg-light text-dark border rounded-pill px-2 py-1">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        {/* Job Summary */}
                        <div className="card border-0 shadow-sm rounded-4 mb-4">
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-3">Job Summary</h4>
                                <div className="mb-3">
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-briefcase text-primary me-3"></i>
                                        <div>
                                            <strong>Job Type</strong>
                                            <p className="text-muted mb-0">{job.type}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-people text-primary me-3"></i>
                                        <div>
                                            <strong>Vacancies</strong>
                                            <p className="text-muted mb-0">{job.vacancies} positions available</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-clock-history text-primary me-3"></i>
                                        <div>
                                            <strong>Experience</strong>
                                            <p className="text-muted mb-0">{job.experience}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-cash-stack text-primary me-3"></i>
                                        <div>
                                            <strong>Salary Range</strong>
                                            <p className="text-muted mb-0">{job.salary}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <i className="bi bi-geo-alt text-primary me-3"></i>
                                        <div>
                                            <strong>Location</strong>
                                            <p className="text-muted mb-0">{job.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="card border-0 shadow-sm rounded-4 mb-4">
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-3">Company Overview</h4>
                                <div className="text-center mb-3">
                                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-2">
                                        <span className="fs-1">{job.companyLogo}</span>
                                    </div>
                                    <h5 className="fw-bold">{job.company}</h5>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-building text-primary me-3"></i>
                                        <div>
                                            <strong>Company Size</strong>
                                            <p className="text-muted mb-0">{job.companySize}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="bi bi-tag text-primary me-3"></i>
                                        <div>
                                            <strong>Industry</strong>
                                            <p className="text-muted mb-0">{job.industry}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <i className="bi bi-calendar text-primary me-3"></i>
                                        <div>
                                            <strong>Founded</strong>
                                            <p className="text-muted mb-0">{job.founded}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-primary w-100 rounded-pill">
                                    View Company Profile
                                </button>
                            </div>
                        </div>

                        {/* Share Job */}
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-3">Share This Job</h4>
                                <div className="d-flex justify-content-around">
                                    <a href="/" className="text-primary fs-4"><i className="bi bi-facebook"></i></a>
                                    <a href="/" className="text-primary fs-4"><i className="bi bi-twitter"></i></a>
                                    <a href="/" className="text-primary fs-4"><i className="bi bi-linkedin"></i></a>
                                    <a href="/" className="text-primary fs-4"><i className="bi bi-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Apply Now Modal */}
            {showApplyForm && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setShowApplyForm(false)}>
                    <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content rounded-4">
                            <div className="modal-header border-0">
                                <h3 className="modal-title fw-bold">Apply for {job.title}</h3>
                                <button type="button" className="btn-close" onClick={() => setShowApplyForm(false)}></button>
                            </div>
                            <div className="modal-body">
                                {applicationSubmitted && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <i className="bi bi-check-circle-fill me-2"></i>
                                        Application submitted successfully! We'll contact you soon.
                                        <button type="button" className="btn-close" onClick={() => setApplicationSubmitted(false)}></button>
                                    </div>
                                )}
                                <form onSubmit={handleApplySubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Full Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="fullName"
                                                value={applicationData.fullName}
                                                onChange={handleApplyChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Email Address *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={applicationData.email}
                                                onChange={handleApplyChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label fw-semibold">Resume/CV *</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                name="resume"
                                                onChange={(e) => setApplicationData({ ...applicationData, resume: e.target.files[0]?.name })}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer border-0 px-0 mt-4">
                                        <button type="button" className="btn btn-secondary rounded-pill px-4" onClick={() => setShowApplyForm(false)}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="btn btn-primary rounded-pill px-4">
                                            Submit Application <i className="bi bi-send ms-2"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}