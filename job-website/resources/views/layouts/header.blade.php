<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') | web Career</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 4 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .navbar-brand {
            font-weight: 700;
            font-size: 1.8rem;
            color: #1e293b !important;
        }
        
        .navbar-brand i {
            color: #2563eb;
            margin-right: 10px;
        }
        
        .navbar-nav .nav-link {
            font-weight: 500;
            padding: 8px 15px;
            margin: 0 5px;
            border-radius: 6px;
            transition: all 0.3s ease;
            color: #334155 !important;
            display: flex;
            align-items: center;
        }
        
        .navbar-nav .nav-link i {
            margin-right: 8px;
            font-size: 1.1rem;
        }
        
        .navbar-nav .nav-link:hover {
            background-color: rgba(37, 99, 235, 0.1);
            color: #2563eb !important;
            transform: translateY(-2px);
        }
        
        .navbar-nav .nav-link.active {
            background-color: #2563eb;
            color: white !important;
        }
        
        .dropdown-menu {
            border: none;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 10px;
        }
        
        .dropdown-item {
            padding: 10px 15px;
            border-radius: 6px;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
        }
        
        .dropdown-item i {
            margin-right: 10px;
            width: 20px;
        }
        
        .dropdown-item:hover {
            background-color: rgba(37, 99, 235, 0.1);
            color: #2563eb;
        }
        
        .btn-login {
            background-color: #2563eb;
            color: white;
            border-radius: 6px;
            padding: 8px 20px;
            font-weight: 600;
            border: none;
        }
        
        .btn-login:hover {
            background-color: #1d4ed8;
            transform: translateY(-2px);
        }
        
        .btn-register {
            background-color: transparent;
            color: #2563eb;
            border: 2px solid #2563eb;
            border-radius: 6px;
            padding: 8px 20px;
            font-weight: 600;
        }
        
        .btn-register:hover {
            background-color: #2563eb;
            color: white;
        }
        
        @media (max-width: 991px) {
            .navbar-nav {
                padding: 15px 0;
            }
            
            .navbar-nav .nav-link {
                margin: 5px 0;
                padding: 10px 15px;
            }
            
            .account-buttons {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 15px 0;
            }
            
            .btn-login, .btn-register {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
        <div class="container-fluid">
            <!-- Brand Logo -->
            <a class="navbar-brand" href="{{ route('welcome') }}">
                <i class="fa fa-briefcase"></i>
                JobPortal
            </a>
            
            <!-- Mobile Toggle Button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- Navbar Content -->
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="{{ route('welcome') }}">
                            <i class="fa fa-home"></i>
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('about') }}">
                            <i class="fa fa-info-circle"></i>
                            About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('jobs') }}">
                            <i class="fa fa-briefcase"></i>
                            Available Jobs
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('services') }}">
                            <i class="fa fa-cog fa-spin"></i>
                            Services
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('contact') }}">
                            <i class="fa fa-envelope"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                
                <!-- Account Section -->
                <div class="d-flex align-items-center">
                    <!-- Separate Login/Register Buttons -->
                    <div class="account-buttons d-none d-lg-flex">
                        <a href="{{ route('login') }}" class="btn btn-login me-2">
                            <i class="fa fa-sign-in"></i>
                            Login
                        </a>
                        <a href="{{ route('register') }}" class="btn btn-register">
                            <i class="fa fa-user-plus"></i>
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    @yield('content')
    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>