import React, { useState } from 'react';

export default function Jobs() {
    // Static job data
    const [jobs] = useState([
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
            views: 2847,
            company: "TechNova Solutions",
            postedDate: "2024-01-15"
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
            views: 1923,
            company: "StackScale Inc.",
            postedDate: "2024-01-10"
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
            views: 1567,
            company: "CreativeMinds Studio",
            postedDate: "2024-01-12"
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
            views: 2145,
            company: "CloudNative Solutions",
            postedDate: "2024-01-08"
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
            views: 876,
            company: "AppCraft Labs",
            postedDate: "2024-01-14"
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
            views: 1102,
            company: "DataInsights Corp",
            postedDate: "2024-01-09"
        },
        {
            id: 7,
            title: "Product Manager",
            type: "Full-time",
            location: "Seattle, WA",
            salary: "$120,000 - $160,000",
            skills: "Agile, Scrum, Product Strategy, User Stories, Analytics",
            description: "Lead product development from concept to launch. Work with cross-functional teams to deliver exceptional products.",
            requirements: "5+ years of product management experience, strong analytical skills, excellent communication.",
            vacancies: 1,
            experience: "5+ Years",
            views: 2341,
            company: "InnovateTech",
            postedDate: "2024-01-07"
        },
        {
            id: 8,
            title: "QA Automation Engineer",
            type: "Full-time",
            location: "Chicago, IL",
            salary: "$75,000 - $95,000",
            skills: "Selenium, Java, Jenkins, TestNG, JIRA",
            description: "Design and implement automated test frameworks. Ensure software quality through comprehensive testing strategies.",
            requirements: "Experience with automation tools, strong programming skills, attention to detail.",
            vacancies: 2,
            experience: "3+ Years",
            views: 654,
            company: "QualityFirst Inc.",
            postedDate: "2024-01-11"
        }
    ]);

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
                                                Apply Now <i className="bi bi-arrow-right ms-2"></i>
                                            </button>
                                            <button className="btn btn-outline-secondary rounded-pill px-3">
                                                <i className="bi bi-bookmark"></i>
                                            </button>
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
        </div>
    );
}