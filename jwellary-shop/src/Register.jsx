import React from "react";


function Register() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Register</h2>
                <p className="auth-subtitle">
                    Join us and shine with our luxury jewellery collection
                </p>

                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter your phone number" required />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>



                    <button type="submit" className="auth-btn">
                        Register
                    </button>

                    <p className="auth-footer">
                        Already have an account?{" "}
                        <a href="/login" className="auth-link">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
