import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [rememberMe, setRememberMe] = useState(false)
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        // Name validation
        if (!formData.name) {
            newErrors.name = 'Full name is required'
        } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters'
        } else if (formData.name.length > 50) {
            newErrors.name = 'Name must be less than 50 characters'
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        } else if (!/(?=.*[A-Z])/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter'
        } else if (!/(?=.*[0-9])/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one number'
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password'
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Registration submitted:', { ...formData, rememberMe })
            const data = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    rememberMe
                })
            });
            const response = await data.json();
            if (response.code == 201) {
                window.location.href = "/login";
            }
            // console.log(response.code);
            // Add your registration logic here
            // Example: await registerAPI({ name, email, password, rememberMe })
        }
    }

    return (
        <div className="container-fluid align-items-center justify-content-center p-3" style={{
            background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 100%)'
        }}>
            <div className="row w-100 justify-content-center">
                <div className="col-md-6 col-lg-5 col-xl-4">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4 p-md-5">
                            {/* Header */}
                            <div className="text-center mb-4">
                                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{
                                    width: '70px',
                                    height: '70px',
                                    background: 'linear-gradient(135deg, #667eea, #764ba2)'
                                }}>
                                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </div>
                                <h2 className="fw-bold" style={{
                                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Create Account
                                </h2>
                                <p className="text-muted">Join us today! It's free and easy</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                {/* Name Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text" style={{ backgroundColor: '#f8f9fa' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            name="name"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="invalid-feedback d-block">{errors.name}</div>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text" style={{ backgroundColor: '#f8f9fa' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#764ba2" strokeWidth="2">
                                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    {errors.email && (
                                        <div className="invalid-feedback d-block">{errors.email}</div>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text" style={{ backgroundColor: '#f8f9fa' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <div className="invalid-feedback d-block">{errors.password}</div>
                                    )}
                                    <small className="text-muted">
                                        Password must be at least 6 characters with 1 uppercase and 1 number
                                    </small>
                                </div>

                                {/* Confirm Password Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Confirm Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text" style={{ backgroundColor: '#f8f9fa' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#764ba2" strokeWidth="2">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                <path d="M9 12h6" />
                                            </svg>
                                        </span>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                        >
                                            {showConfirmPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <div className="invalid-feedback d-block">{errors.confirmPassword}</div>
                                    )}
                                </div>

                                {/* Remember Me & Terms */}
                                <div className="mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            style={{ borderColor: '#667eea' }}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="rememberMe">
                                            Remember me on this device
                                        </label>
                                    </div>
                                    <small className="text-muted d-block mt-2">
                                        By creating an account, you agree to our
                                        <a href="#" className="text-decoration-none mx-1">Terms of Service</a>
                                        and
                                        <a href="#" className="text-decoration-none mx-1">Privacy Policy</a>
                                    </small>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn w-100 text-white fw-semibold py-2 mb-3"
                                    style={{
                                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                        border: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)'
                                        e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                >
                                    Sign Up
                                </button>

                                {/* Login Link */}
                                <div className="text-center">
                                    <span className="text-muted">Already have an account? </span>
                                    <a href="/login" className="text-decoration-none fw-semibold" style={{ color: '#667eea' }}>
                                        Sign In
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}