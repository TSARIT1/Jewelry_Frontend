import React from "react";


function Login() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Login</h2>
                <p className="auth-subtitle">
                    Login to manage your jewellery collection
                </p>

                <form>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>

                    <button type="submit" className="auth-btn">
                        Login
                    </button>

                    <p className="auth-footer">
                        Don’t have an account?{" "}
                        <a href="/register" className="auth-link">
                            Register
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
