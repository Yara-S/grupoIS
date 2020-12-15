import React, { Component } from "react";
import GoogleMaps from '../components/googleMaps';

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">


                      <div className="">
                            <div className="">
                                  <div className="section-title">
                                    <h2>Entre em contato</h2>     
                                  </div>                
                            </div>
                      </div> {/*fechamento vazio*/}


                      <div className="container">

                                <div className="contact-info-blocks">
                                
                                      <div className="contact-info">




                                          <div className="contact-item">
                                            <div>
                                              <span>
                                                <i className="fa fa-map-marker"></i> Endereço
                                              </span>
                                              {this.props.data ? this.props.data.address : "loading"}
                                            </div>
                                          </div> {/* fechamento contact-item*/}




                                          <div className="contact-item">
                                            <div>
                                              <span>
                                                <i className="fa fa-phone"></i> Telefone
                                              </span>{" "}
                                              {this.props.data ? this.props.data.phone : "loading"}
                                            </div>
                                          </div> {/* fechamento contact-item*/}



                                          <div className="contact-item">
                                            <div>
                                              <span>
                                                <i className="fa fa-envelope-o"></i> Email
                                              </span>{" "}
                                              {this.props.data ? this.props.data.email : "loading"}
                                            </div>
                                          </div> {/* fechamento contact-item*/}
                                

                                      </div> {/* fechamento contact-info*/}


                                      <div className="contact-info">
                                        <GoogleMaps />
                                      </div> {/*fechamento contact-info2*/}


                                </div> {/*fechamento contact-info-blocks*/}
                        
                          
                        
                      </div> {/*fechamento container*/}
              

                      <div className="col-md-12">
                        <div className="row">
                          <div className="social">
                            <ul>
                              <li>
                                <a
                                  href={this.props.data ? this.props.data.facebook : "/"}
                                  target="_blank" >
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                            </ul>
                          </div> {/* fechamento social*/}
                        </div> {/* fechamento row*/}
                      </div> {/* fechamento col-md-12*/}


          </div> {/* fechamento container maior*/}
        </div> {/* fechamento contact*/}



        <div id="footer">
          
            <p>
              &copy; Instante Saude Dedetização. Design by{" "}
              <div className="linkDev">
              <a
                        href={this.props.data ? this.props.data.contatoDev: "/"}
               target="_blank" > Yara de Souza
              </a>
              </div> {/* fechamento linkDev*/}
              </p>
            
         
        </div> {/* fechamento footer*/}
      </div>  
    );
  }
}

export default Contact;
