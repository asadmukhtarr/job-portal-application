import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Jobs() {
    // Static job data
    const [jobs, setJobs] = useState([]);
    const fetchJobs = async () => {
        const response = await fetch("http://localhost:8001/api/vacancies");
        const data = await response.json();
        setJobs(data.vacancies.reverse());
        // console.log("data is here", data.vacancies);
    }
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;

    // Get unique job types and locations for filters
    const jobTypes = ['All', ...new Set(jobs.map(job => job.type))];
    const locations = ['All', ...new Set(jobs.map(job => job.location))];

    // Filter jobs based on search and filters
    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'All' || job.type === selectedType;
        const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
        return matchesSearch && matchesType && matchesLocation;
    });

    // Pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(function () {
        fetchJobs();
    });
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-primary text-white py-4" style={{ background: 'linear-gradient(135deg, #0dfd25ff 0%, #0a58ca 100%)' }}>
                <div className="container py-4">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="display-4 fw-bold mb-3">Find Your Dream Job</h1>
                            <p className="lead mb-0">
                                Discover thousands of opportunities from top companies worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                {/* Search and Filter Section */}
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-4">
                                <div className="row g-3">
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white border-end-0">
                                                <i className="bi bi-search"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-start-0 ps-0"
                                                placeholder="Search by job title, company, or skills..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            className="form-select"
                                            value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}
                                        >
                                            {jobTypes.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            className="form-select"
                                            value={selectedLocation}
                                            onChange={(e) => setSelectedLocation(e.target.value)}
                                        >
                                            {locations.map(location => (
                                                <option key={location} value={location}>{location}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-1">
                                        <button
                                            className="btn btn-outline-secondary w-100"
                                            onClick={() => {
                                                setSearchTerm('');
                                                setSelectedType('All');
                                                setSelectedLocation('All');
                                            }}
                                        >
                                            <i className="bi bi-arrow-repeat"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="text-muted mb-0">
                        Found <strong>{filteredJobs.length}</strong> jobs
                    </p>
                    <p className="text-muted mb-0">
                        Showing {indexOfFirstJob + 1} to {Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length}
                    </p>
                </div>

                {/* Jobs Grid */}
                {currentJobs.length > 0 ? (
                    <div className="row g-4">
                        {currentJobs.map((job) => (
                            <div key={job.id} className="col-lg-6">
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
                                        <p className="text-primary mb-2">
                                            <i className="bi bi-building me-2"></i>
                                            {job.company}
                                        </p>

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

                                        <div className="d-flex gap-2">
                                            <button className="btn btn-primary rounded-pill px-4 flex-grow-1">
                                                Apply Now <i className="fa fa-arrow-right ms-2"></i>
                                            </button>
                                            <Link to={`/show-jobs/${job.id}`} className="btn btn-outline-secondary rounded-pill px-3">
                                                <i className="fa fa-eye"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-5">
                        <i className="bi bi-inbox display-1 text-muted"></i>
                        <h3 className="mt-3">No jobs found</h3>
                        <p className="text-muted">Try adjusting your search or filters</p>
                        <button
                            className="btn btn-primary rounded-pill px-4 mt-2"
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedType('All');
                                setSelectedLocation('All');
                            }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav className="mt-5">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                                    Previous
                                </button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>

            {/* Apply Now Modal (you can add this later) */}
            {/* Call to Action */}
            <div className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">Don't See the Right Job?</h2>
                    <p className="lead text-muted mb-4">Subscribe to get notified when new jobs are posted</p>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email address" />
                                <button className="btn btn-primary btn-lg px-4">Subscribe</button>
                            </div>
                        </div>
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
        </div >
    );
}