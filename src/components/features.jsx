import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="servicos" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Serviços</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    
                  </div>
                ))
              : "Carregando..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
