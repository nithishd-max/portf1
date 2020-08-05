import React from 'react';

const Footer=()=>{
    return(
        <div>
             
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            HouseNumber:4-8-263-27-2 Near Narayana Junior College
                            <br />
                            Pulivendula, IN 516390
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/nithish.reddy.39/"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/nithishd-max"><i className="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.cn/in/nithish-reddy-213634156/"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/nithish_reddy.devireddy/"><i className="fab fa-fw fa-instagram"></i></a>
                    </div>
                    
                    {/* <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                    </div> */}
                </div>
            </div>
        </footer>
       
        </div>
    )
}
export default Footer;