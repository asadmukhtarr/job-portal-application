@extends('layouts.header')
@section('title','Available Jobs')
@section('content')
<style>
    /* Additional CSS for Jobs Page */
    :root {
        --main-color: #135E85;
        --main-color-light: rgba(19, 94, 133, 0.1);
        --main-color-dark: #0e4a6b;
        --main-color-lightest: rgba(19, 94, 133, 0.05);
        --text-color: #334155;
    }
    
    .jobs-hero {
        background: linear-gradient(135deg, var(--main-color-lightest) 0%, rgba(255,255,255,1) 100%);
        padding: 80px 0 40px;
        border-bottom: 3px solid var(--main-color-light);
    }
    
    .section-title {
        color: var(--main-color);
        font-weight: 700;
        margin-bottom: 30px;
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
    
    .search-container {
        background: white;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        margin-bottom: 40px;
    }
    
    .form-control, .form-select {
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        padding: 12px 15px;
        transition: all 0.3s ease;
    }
    
    .form-control:focus, .form-select:focus {
        border-color: var(--main-color);
        box-shadow: 0 0 0 3px var(--main-color-light);
    }
    
    .btn-search {
        background-color: var(--main-color);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 12px 30px;
        font-weight: 600;
        transition: all 0.3s ease;
        width: 100%;
    }
    
    .btn-search:hover {
        background-color: var(--main-color-dark);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(19, 94, 133, 0.2);
    }
    
    .job-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        margin-bottom: 25px;
        border-left: 5px solid var(--main-color);
        transition: all 0.3s ease;
        position: relative;
    }
    
    .job-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(19, 94, 133, 0.15);
    }
    
    .job-card.featured {
        border: 2px solid var(--main-color);
        background: linear-gradient(to right, white 97%, var(--main-color) 3%);
    }
    
    .job-card.urgent::before {
        content: 'URGENT';
        position: absolute;
        top: 15px;
        right: 15px;
        background-color: #ef4444;
        color: white;
        padding: 3px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
    }
    
    .job-card.featured::before {
        content: 'FEATURED';
        position: absolute;
        top: 15px;
        right: 15px;
        background-color: var(--main-color);
        color: white;
        padding: 3px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
    }
    
    .company-logo {
        width: 70px;
        height: 70px;
        background-color: var(--main-color-light);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        flex-shrink: 0;
    }
    
    .company-logo img {
        max-width: 50px;
        max-height: 50px;
    }
    
    .job-title {
        color: var(--main-color);
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 1.25rem;
    }
    
    .company-name {
        color: #64748b;
        font-size: 0.95rem;
        margin-bottom: 5px;
    }
    
    .job-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 15px 0;
    }
    
    .job-meta-item {
        display: flex;
        align-items: center;
        color: #475569;
        font-size: 0.9rem;
    }
    
    .job-meta-item i {
        color: var(--main-color);
        margin-right: 8px;
        font-size: 16px;
    }
    
    .job-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 15px 0;
    }
    
    .skill-tag {
        background-color: var(--main-color-light);
        color: var(--main-color);
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 500;
    }
    
    .job-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e2e8f0;
    }
    
    .job-type {
        background-color: var(--main-color);
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
    }
    
    .job-type.remote {
        background-color: #10b981;
    }
    
    .job-type.part-time {
        background-color: #f59e0b;
    }
    
    .job-type.contract {
        background-color: #8b5cf6;
    }
    
    .btn-apply {
        background-color: var(--main-color);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 8px 20px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .btn-apply:hover {
        background-color: var(--main-color-dark);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(19, 94, 133, 0.2);
    }
    
    .btn-view {
        background-color: transparent;
        color: var(--main-color);
        border: 2px solid var(--main-color);
        border-radius: 8px;
        padding: 8px 20px;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .btn-view:hover {
        background-color: var(--main-color);
        color: white;
    }
    
    .sidebar-card {
        background: white;
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        margin-bottom: 25px;
    }
    
    .sidebar-title {
        color: var(--main-color);
        font-weight: 600;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--main-color-light);
    }
    
    .filter-group {
        margin-bottom: 25px;
    }
    
    .filter-title {
        font-weight: 600;
        color: var(--text-color);
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .filter-option {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
    }
    
    .filter-option input[type="checkbox"] {
        margin-right: 10px;
        accent-color: var(--main-color);
    }
    
    .salary-range {
        width: 100%;
        margin-top: 10px;
        accent-color: var(--main-color);
    }
    
    .salary-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        color: #64748b;
        font-size: 0.85rem;
    }
    
    .stats-card {
        background: linear-gradient(135deg, var(--main-color) 0%, var(--main-color-dark) 100%);
        color: white;
        border-radius: 15px;
        padding: 25px;
        text-align: center;
        margin-bottom: 25px;
    }
    
    .stats-number {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
    
    .stats-label {
        font-size: 1rem;
        opacity: 0.9;
    }
    
    .pagination .page-link {
        color: var(--main-color);
        border: 2px solid #e2e8f0;
        margin: 0 5px;
        border-radius: 8px;
        font-weight: 600;
    }
    
    .pagination .page-link:hover {
        background-color: var(--main-color-light);
        border-color: var(--main-color);
    }
    
    .pagination .page-item.active .page-link {
        background-color: var(--main-color);
        border-color: var(--main-color);
        color: white;
    }
    
    .no-jobs {
        text-align: center;
        padding: 60px 20px;
    }
    
    .no-jobs-icon {
        font-size: 4rem;
        color: var(--main-color-light);
        margin-bottom: 20px;
    }
    
    .job-detail-modal .modal-content {
        border-radius: 15px;
        border: none;
    }
    
    .job-detail-modal .modal-header {
        background-color: var(--main-color-lightest);
        border-radius: 15px 15px 0 0;
        padding: 25px;
    }
    
    .job-detail-modal .modal-title {
        color: var(--main-color);
        font-weight: 600;
    }
    
    @media (max-width: 768px) {
        .jobs-hero {
            padding: 60px 0 30px;
        }
        
        .job-actions {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
        }
        
        .job-meta {
            gap: 10px;
        }
    }
</style>

<!-- Hero Section -->
<section class="jobs-hero">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8">
                <h1 class="display-5 fw-bold text-main mb-3">Find Your Dream Job</h1>
                <p class="lead mb-4">Browse through <span class="text-main fw-bold">2,347+</span> verified job opportunities from top companies. Filter by location, salary, and job type to find your perfect match.</p>
                <div class="d-flex align-items-center">
                    <div class="me-4">
                        <i class="fa fa-briefcase fa-2x text-main"></i>
                    </div>
                    <div>
                        <p class="mb-1"><span class="fw-bold">1,238</span> new jobs posted this week</p>
                        <p class="mb-0"><span class="fw-bold">89%</span> of employers respond within 48 hours</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 text-center">
                <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" alt="Job Search" class="img-fluid rounded" style="max-height: 250px;">
            </div>
        </div>
    </div>
</section>

<!-- Search Section -->
<section class="py-5">
    <div class="container">
        <div class="search-container">
            <form action="/" method="GET">
                <div class="row g-3">
                    <div class="col-md-5">
                        <div class="form-group">
                            <label class="form-label">Job Title, Skills, or Company</label>
                            <div class="input-group">
                                <span class="input-group-text bg-main text-white">
                                    <i class="fa fa-search"></i>
                                </span>
                                <input type="text" class="form-control" name="query" placeholder="Software Engineer, Marketing Manager, etc." value="{{ request('query') }}">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="form-label">Location</label>
                            <div class="input-group">
                                <span class="input-group-text bg-main text-white">
                                    <i class="fa fa-map-marker"></i>
                                </span>
                                <input type="text" class="form-control" name="location" placeholder="City, State, or Remote" value="{{ request('location') }}">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <label class="form-label">Job Type</label>
                            <select class="form-select" name="job_type">
                                <option value="">All Job Types</option>
                                <option value="full-time" {{ request('job_type') == 'full-time' ? 'selected' : '' }}>Full Time</option>
                                <option value="part-time" {{ request('job_type') == 'part-time' ? 'selected' : '' }}>Part Time</option>
                                <option value="contract" {{ request('job_type') == 'contract' ? 'selected' : '' }}>Contract</option>
                                <option value="remote" {{ request('job_type') == 'remote' ? 'selected' : '' }}>Remote</option>
                                <option value="internship" {{ request('job_type') == 'internship' ? 'selected' : '' }}>Internship</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <label class="form-label">&nbsp;</label>
                        <button type="submit" class="btn btn-search">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <div class="row">
            <!-- Sidebar Filters -->
            <div class="col-lg-3">
                <div class="sidebar-card">
                    <h3 class="sidebar-title">Filters</h3>
                    
                    <div class="filter-group">
                        <div class="filter-title">
                            <span>Job Type</span>
                            <button type="button" class="btn btn-link p-0 text-main" style="font-size: 0.85rem;">Clear</button>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="type-fulltime" checked>
                            <label for="type-fulltime">Full Time</label>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="type-parttime">
                            <label for="type-parttime">Part Time</label>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="type-remote" checked>
                            <label for="type-remote">Remote</label>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="type-contract">
                            <label for="type-contract">Contract</label>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="type-internship">
                            <label for="type-internship">Internship</label>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <div class="filter-title">
                            <span>Experience Level</span>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="exp-entry" checked>
                            <label for="exp-entry">Entry Level (0-2 yrs)</label>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="exp-mid" checked>
                            <label for="exp-mid">Mid Level (2-5 yrs)</label>
                        </div>
                        <div class="filter-option">
                            <input type="checkbox" id="exp-senior">
                            <label for="exp-senior">Senior (5+ yrs)</label>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <div class="filter-title">
                            <span>Salary Range</span>
                        </div>
                        <input type="range" class="salary-range" min="0" max="200000" value="80000" step="10000">
                        <div class="salary-labels">
                            <span>$0</span>
                            <span>$100k</span>
                            <span>$200k+</span>
                        </div>
                        <div class="mt-2 text-center">
                            <span class="text-main fw-bold">$80,000+ per year</span>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <div class="filter-title">
                            <span>Date Posted</span>
                        </div>
                        <div class="filter-option">
                            <input type="radio" id="date-anytime" name="date_posted" checked>
                            <label for="date-anytime">Anytime</label>
                        </div>
                        <div class="filter-option">
                            <input type="radio" id="date-last24" name="date_posted">
                            <label for="date-last24">Last 24 hours</label>
                        </div>
                        <div class="filter-option">
                            <input type="radio" id="date-lastweek" name="date_posted">
                            <label for="date-lastweek">Last week</label>
                        </div>
                        <div class="filter-option">
                            <input type="radio" id="date-lastmonth" name="date_posted">
                            <label for="date-lastmonth">Last month</label>
                        </div>
                    </div>
                    
                    <button class="btn btn-search w-100 mt-3">
                        <i class="fa fa-filter me-2"></i>
                        Apply Filters
                    </button>
                </div>
                
                <div class="stats-card">
                    <div class="stats-number">2,347</div>
                    <div class="stats-label">Active Job Listings</div>
                    <div class="mt-3">
                        <small>Updated: Today, 10:30 AM</small>
                    </div>
                </div>
                
                <div class="sidebar-card">
                    <h3 class="sidebar-title">Popular Searches</h3>
                    <div class="d-flex flex-wrap gap-2">
                        <a href="#" class="skill-tag">Software Engineer</a>
                        <a href="#" class="skill-tag">Marketing Manager</a>
                        <a href="#" class="skill-tag">Data Analyst</a>
                        <a href="#" class="skill-tag">Remote Jobs</a>
                        <a href="#" class="skill-tag">UX Designer</a>
                        <a href="#" class="skill-tag">Sales Executive</a>
                        <a href="#" class="skill-tag">Project Manager</a>
                        <a href="#" class="skill-tag">React Developer</a>
                    </div>
                </div>
            </div>
            
            <!-- Job Listings -->
            <div class="col-lg-9">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2 class="section-title mb-0">Available Jobs <small class="text-muted fs-6">(Showing 1-8 of 2,347)</small></h2>
                    <div class="d-flex align-items-center">
                        <span class="me-3">Sort by:</span>
                        <select class="form-select form-select-sm" style="width: auto;">
                            <option>Most Relevant</option>
                            <option>Newest First</option>
                            <option>Salary: High to Low</option>
                            <option>Salary: Low to High</option>
                        </select>
                    </div>
                </div>
                
                <!-- Job Cards -->
                <div class="job-card featured">
                    <div class="d-flex">
                        <div class="company-logo">
                            <i class="fa fa-building fa-2x text-main"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h3 class="job-title">Senior Frontend Developer (React)</h3>
                            <p class="company-name">TechVision Inc.</p>
                            <div class="job-meta">
                                <span class="job-meta-item">
                                    <i class="fa fa-map-marker"></i>
                                    Remote (Global)
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-money"></i>
                                    $120,000 - $150,000
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-clock-o"></i>
                                    Full Time
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-briefcase"></i>
                                    5+ years experience
                                </span>
                            </div>
                            <div class="job-skills">
                                <span class="skill-tag">React</span>
                                <span class="skill-tag">TypeScript</span>
                                <span class="skill-tag">Redux</span>
                                <span class="skill-tag">Next.js</span>
                                <span class="skill-tag">GraphQL</span>
                            </div>
                            <div class="job-actions">
                                <div>
                                    <span class="job-type remote">Remote</span>
                                    <span class="ms-2 text-muted">
                                        <i class="fa fa-calendar me-1"></i>
                                        Posted 2 days ago
                                    </span>
                                </div>
                                <div>
                                    <button class="btn btn-view me-2" data-bs-toggle="modal" data-bs-target="#jobDetailModal">
                                        View Details
                                    </button>
                                    <button class="btn btn-apply">
                                        <i class="fa fa-paper-plane me-2"></i>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="job-card">
                    <div class="d-flex">
                        <div class="company-logo">
                            <i class="fa fa-apple fa-2x text-main"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h3 class="job-title">Marketing Manager</h3>
                            <p class="company-name">GlobalTech Solutions</p>
                            <div class="job-meta">
                                <span class="job-meta-item">
                                    <i class="fa fa-map-marker"></i>
                                    New York, NY
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-money"></i>
                                    $90,000 - $120,000
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-clock-o"></i>
                                    Full Time
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-briefcase"></i>
                                    3+ years experience
                                </span>
                            </div>
                            <div class="job-skills">
                                <span class="skill-tag">Digital Marketing</span>
                                <span class="skill-tag">SEO</span>
                                <span class="skill-tag">Social Media</span>
                                <span class="skill-tag">Content Strategy</span>
                            </div>
                            <div class="job-actions">
                                <div>
                                    <span class="job-type">Full Time</span>
                                    <span class="ms-2 text-muted">
                                        <i class="fa fa-calendar me-1"></i>
                                        Posted 1 week ago
                                    </span>
                                </div>
                                <div>
                                    <button class="btn btn-view me-2">View Details</button>
                                    <button class="btn btn-apply">
                                        <i class="fa fa-paper-plane me-2"></i>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="job-card urgent">
                    <div class="d-flex">
                        <div class="company-logo">
                            <i class="fa fa-amazon fa-2x text-main"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h3 class="job-title">Data Scientist</h3>
                            <p class="company-name">DataInsight Corp</p>
                            <div class="job-meta">
                                <span class="job-meta-item">
                                    <i class="fa fa-map-marker"></i>
                                    San Francisco, CA
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-money"></i>
                                    $140,000 - $180,000
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-clock-o"></i>
                                    Full Time
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-briefcase"></i>
                                    4+ years experience
                                </span>
                            </div>
                            <div class="job-skills">
                                <span class="skill-tag">Python</span>
                                <span class="skill-tag">Machine Learning</span>
                                <span class="skill-tag">SQL</span>
                                <span class="skill-tag">TensorFlow</span>
                                <span class="skill-tag">AWS</span>
                            </div>
                            <div class="job-actions">
                                <div>
                                    <span class="job-type">Full Time</span>
                                    <span class="ms-2 text-muted">
                                        <i class="fa fa-calendar me-1"></i>
                                        Posted 1 day ago
                                    </span>
                                </div>
                                <div>
                                    <button class="btn btn-view me-2">View Details</button>
                                    <button class="btn btn-apply">
                                        <i class="fa fa-paper-plane me-2"></i>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="job-card">
                    <div class="d-flex">
                        <div class="company-logo">
                            <i class="fa fa-google fa-2x text-main"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h3 class="job-title">UX/UI Designer</h3>
                            <p class="company-name">Creative Minds Agency</p>
                            <div class="job-meta">
                                <span class="job-meta-item">
                                    <i class="fa fa-map-marker"></i>
                                    Chicago, IL
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-money"></i>
                                    $75,000 - $95,000
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-clock-o"></i>
                                    Contract
                                </span>
                                <span class="job-meta-item">
                                    <i class="fa fa-briefcase"></i>
                                    2+ years experience
                                </span>
                            </div>
                            <div class="job-skills">
                                <span class="skill-tag">Figma</span>
                                <span class="skill-tag">Adobe XD</span>
                                <span class="skill-tag">UI/UX</span>
                                <span class="skill-tag">Prototyping</span>
                            </div>
                            <div class="job-actions">
                                <div>
                                    <span class="job-type contract">Contract</span>
                                    <span class="ms-2 text-muted">
                                        <i class="fa fa-calendar me-1"></i>
                                        Posted 3 days ago
                                    </span>
                                </div>
                                <div>
                                    <button class="btn btn-view me-2">View Details</button>
                                    <button class="btn btn-apply">
                                        <i class="fa fa-paper-plane me-2"></i>
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- More job cards... -->
                
                <!-- Pagination -->
                <nav aria-label="Job pagination" class="mt-5">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">
                                <i class="fa fa-chevron-left"></i>
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                <i class="fa fa-chevron-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section class="py-5" style="background-color: var(--main-color-lightest);">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8">
                <h3 class="text-main mb-3">Can't find the right job?</h3>
                <p class="mb-0">Create a job alert and we'll notify you when matching positions become available.</p>
            </div>
            <div class="col-lg-4 text-lg-end">
                <button class="btn btn-apply" style="background-color: white; color: var(--main-color); border: 2px solid var(--main-color);">
                    <i class="fa fa-bell me-2"></i>
                    Create Job Alert
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Job Detail Modal -->
<div class="modal fade job-detail-modal" id="jobDetailModal" tabindex="-1" aria-labelledby="jobDetailModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="jobDetailModalLabel">Senior Frontend Developer (React)</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row mb-4">
                    <div class="col-md-8">
                        <h6 class="text-main">TechVision Inc.</h6>
                        <div class="d-flex flex-wrap gap-2 mt-2">
                            <span class="badge bg-main">Remote</span>
                            <span class="badge bg-success">Full Time</span>
                            <span class="badge bg-warning">$120k - $150k</span>
                        </div>
                    </div>
                    <div class="col-md-4 text-end">
                        <button class="btn btn-apply">
                            <i class="fa fa-paper-plane me-2"></i>
                            Apply Now
                        </button>
                    </div>
                </div>
                
                <h6 class="text-main">Job Description</h6>
                <p>We are looking for a skilled Senior Frontend Developer to join our growing team. You will be responsible for building responsive web applications using React and modern frontend technologies.</p>
                
                <h6 class="text-main mt-4">Requirements</h6>
                <ul>
                    <li>5+ years of experience with React and TypeScript</li>
                    <li>Strong understanding of Redux state management</li>
                    <li>Experience with Next.js and SSR</li>
                    <li>Knowledge of GraphQL and REST APIs</li>
                    <li>Familiarity with testing frameworks (Jest, React Testing Library)</li>
                </ul>
                
                <h6 class="text-main mt-4">Benefits</h6>
                <ul>
                    <li>Fully remote work</li>
                    <li>Competitive salary and equity</li>
                    <li>Health, dental, and vision insurance</li>
                    <li>Unlimited PTO</li>
                    <li>Professional development budget</li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-apply">Apply for this Job</button>
            </div>
        </div>
    </div>
</div>

@endsection