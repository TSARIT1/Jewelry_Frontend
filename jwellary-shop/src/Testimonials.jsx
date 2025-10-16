import React from 'react'

function Testimonials() {
    return (
        <div>
            <section id="testimonials" className="container py-5">
                <h2 className="section-title text-center">Testimonials</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="testimonial">
                            <p>“Amazing service! Photos were stunning.”</p>
                            <h6>- Anjali Mehra</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial">
                            <p>“Professional team, very responsive and talented.”</p>
                            <h6>- Rohit Verma</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial">
                            <p>“Highly recommend for all jewelry photoshoots!”</p>
                            <h6>- Priya Sharma</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
