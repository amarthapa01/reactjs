import React from 'react';

export default function About(props){


let myStyle = {
  backgroundcolor : props.mode === "dark"?"black": "white" ,
  color : props.mode === "dark"?"white": "black",
  
}
  return (
    <div>
      <div className="container my-5" style = {myStyle}>
  <div className="row">
    <div className="col-md-6">
      <img src="../image/chef.png"
      />
    </div>
    <div className="col-md-6">
      <h2>About Us</h2>
      <p className="lead" style = {myStyle}>
        We are a team of passionate individuals dedicated to bringing the best
        service to our customers. Our mission is to provide high-quality
        products and services with a focus on customer satisfaction.
      </p>
      <p>
        Since our founding, we have worked tirelessly to grow our company while
        maintaining the core values of integrity, trust, and commitment to
        excellence. Join us on this journey as we continue to strive for
        greatness.
      </p>
      <a href="/contact" className="btn btn-primary mt-3">
        Contact Us
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

