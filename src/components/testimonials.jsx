import React, { Component } from "react";

export class testimonials extends Component {
  render() {
    return (
      <div id="certs">
        <div className="container">
          <div className="section-title text-center">
            <h2>Somos uma empresa certificada</h2>
          </div>
          <div className="testimonial-container">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} >
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>

                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
