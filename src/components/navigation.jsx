import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <div>
                <img src="img/xo_dengue.png"/> 
                <i className="fa fa-phone"> 4109-2759</i> | <i className="fa fa-whatsapp ">(81) 98413-2509</i> 
              </div>

            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#servicos" className="page-scroll">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#certs" className="page-scroll">
                  Certificações
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contato
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
