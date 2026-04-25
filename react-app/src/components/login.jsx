import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}
        if (!email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid'
        }
        if (!password) {
            newErrors.password = 'Password is required'
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Login submitted:', { email, password, rememberMe })
            // Add your login logic here
        }
    }

    return (
        <div className="container-fluid align-items-center justify-content-center p-5" style={{
            background: 'linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 100%)'
        }}>
            <div className="row w-100 justify-content-center">
                <div className="col-md-5 col-lg-4">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5">
                            {/* Header */}
                            <div className="text-center mb-4">
                                <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-3" style={{
                                    width: '70px',
                                    height: '70px',
                                    background: 'linear-gradient(135deg, #28a745, #007bff)'
                                }}>
                                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <h2 className="fw-bold" style={{
                                    background: 'linear-gradient(135deg, #28a745, #007bff)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Welcome Back
                                </h2>
                                <p className="text-muted">Please sign in to continue</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                {/* Email Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text" style={{ backgroundColor: '#f8f9fa' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2">
                                                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                            </svg>
                                        </span>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    {errors.password && (
                                        <div className="invalid-feedback d-block">{errors.password}</div>
                                    )}
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            style={{ borderColor: '#28a745' }}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn w-100 text-white fw-semibold py-2 mb-3"
                                    style={{
                                        background: 'linear-gradient(135deg, #28a745, #007bff)',
                                        border: 'none',
                                        transition: 'transform 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                                >
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}