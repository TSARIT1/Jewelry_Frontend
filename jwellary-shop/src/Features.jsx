import React from 'react'

function Features() {
  return (

    <div className='feature-card' id='features'>
      <h1 className=' text-center'> Features</h1>
      <div className='container '>
        <div className='row'>

          {/* Features 1 */}
          <div className='col-4'>
            <div className="card" style={{ width: "18rem" }}>
              <i className="fa-solid fa-chart-line feature-icon" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>  <div className="card-body">
                <h5 className="card-title">Real-Time Sales Dashboard</h5>
                <a href="#" className="btn btn-outline-light">More</a>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className='col-4'>
            <div className="card" style={{ width: "18rem" }}>
              <i className="fa-solid fa-bell feature-icon" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
              <div className="card-body">
                <h5 className="card-title">Stock Alerts & Metal Rate Updates</h5>
                <a href="#" className="btn btn-outline-light">More</a>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className='col-4'>
            <div className="card" style={{ width: "18rem" }}>
              <i className="fa-solid fa-file-invoice-dollar feature-icon" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
              <div className="card-body">
                <h5 className="card-title">Smart Invoice & Payment Tracking</h5>
                <a href="#" className="btn btn-outline-light">More</a>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className='col-4'>
            <div className="card" style={{ width: "18rem" }}>
              <i className="fa-solid fa-calculator feature-icon" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
              <div className="card-body">
                <h5 className="card-title">Auto GST / Tax Calculation</h5>
                <a href="#" className="btn btn-outline-light">More</a>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className='col-4'>
            <div className="card" style={{ width: "18rem" }}>
              <i className="fa-solid fa-file-export feature-icon" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
              <div className="card-body">
                <h5 className="card-title">Report Export (PDF, Excel, CSV)</h5>
                <a href="#" className="btn btn-outline-light">More</a>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
          <div className='col-4'>
            <div className="card" style={{ width: "18rem" }}>
              <i className="fa-solid fa-user-shield feature-icon" style={{ fontSize: "3rem", textAlign: 'center', marginLeft: '37%', marginTop: '5%', borderRadius: '50%' }} ></i>
              <div className="card-body">
                <h5 className="card-title">Role-Based Access Control</h5>
                <a href="#" className="btn btn-outline-light">More</a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Features;
