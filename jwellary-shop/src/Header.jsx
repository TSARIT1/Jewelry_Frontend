// // import { item } from "react-router-dom";

// function Header(){

//     return(
//      <header>

//         <nav className="navbar navbar-expand-lg  fixed-top shadow-sm">
//   <div className="container navigation">

//     <a className="navbar-brand fs-5 fw-bold" href="#">Gold shop</a>  



//     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-item active "  href="#slide">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-item" href="#about">About</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-item" href="#features">Features</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-item" href="#price">Pricing</a>
//         </li>
//         <li>
//               <button className="btn btn-outline-light"> <a className='login' href="/login"> Login </a></button>
//         </li>
//         <li>
//               <button className="btn btn-outline-light"> <a className='registration' href="/register">Register</a></button>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>


//      </header>
//     );
// }
// export default Header

import React from 'react'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">

                    <a className="navbar-brand text-light fw-bold" href="#">Jwellary shop</a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">


                        <div className="navbar-nav mx-auto">
                            <a className="nav-link text-light" href="/">Home</a>
                            <a className="nav-link text-light" href="#features">Features</a>
                            <a className="nav-link text-light" href="#pricing">Price</a>
                            <a className="nav-link text-light" href="#contact">Contact</a>
                        </div>


                        <div className="d-flex gap-2 button">
                            <button className="btn btn-outline-light "> <a className='login' href="/login"> Login </a></button>
                            <button className="btn btn-outline-light"> <a className='register' href="/register">Register</a></button>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
