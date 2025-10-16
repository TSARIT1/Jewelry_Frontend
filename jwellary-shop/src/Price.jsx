import React from 'react'

function Price() {
    return (
        <div className='' style={{ backgroundColor: 'black', marginTop: '-1%' }}>
            <section id="pricing" className="container py-5" >
                <h2 className="section-title text-center">Pricing Plans</h2>
                <div className="row d-flex align-items-stretch">
                    <div className="col-md-3">
                        <div className="card  p-4 shadow " style={{ height: '100% ' }}>
                            <h4>Basic Jwellary  Plan</h4>
                            <span className="save">  ₹50,000 Save 25%</span>
                            <h4>1500/3 months plan</h4>
                            <ul>
                                <h3>Key Features</h3>
                                <li> Limited customer records (up to 100 clients)</li>
                                <li> 1 outlet support</li>
                                <li>Basic stock tracking</li>
                                <li> Simple monthly sales repor</li>
                                <li>Secure data storage (cloud backup)</li>
                                <li>Email notifications for sales updates</li>

                            </ul>
                            <a href="#" className="btn btn-outline-light mt-2">Choose</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  p-4 shadow" style={{ height: '100% ' }}>
                            <h4>Royal Jwellary Plan</h4>
                            <span className="save">  ₹35 Save 30%</span>
                            <h4>6000/1 year plan</h4>
                            <ul>
                                <h3>Key Features</h3>
                                <li> Advanced CRM with follow-up reminders</li>
                                <li> Up to 3 outlets support</li>
                                <li> Stock + category-wise tracking</li>
                                <li> Detailed weekly/monthly reports with export</li>
                                <li>24/7 priority support</li>
                                <li>Role-based access control</li>
                            </ul>
                            <a href="#" className="btn btn-outline-light  mt-2" >Choose</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card  p-4 shadow" style={{ height: '100% ' }}>
                            <h4>Premium Plan</h4>
                            <span className="save">  ₹1,50,000 Save 30%</span>
                            <h4>15000/2 years plan</h4>
                            <ul>
                                <h3>Key Features</h3>
                                <li>Full CRM with automation, client insights & loyalty tracking</li>
                                <li> Multi-branch with centralized control</li>
                                <li> Smart inventory with alerts, barcodes & analytics</li>
                                <li>Advanced analytics, trends & custom report builder</li>

                            </ul>
                            <a href="#" className="btn btn-outline-light  mt-2" >Choose</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Price
