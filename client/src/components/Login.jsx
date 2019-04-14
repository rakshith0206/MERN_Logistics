import React, {Component} from 'react';
import { Link } from "react-router-dom"; 

class Login extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="jumbotron mt-5">
                        <div className="col-sm-8 mx-auto">
                            <div class="d4 d6 d5 dk ko kp kf">
                                <div class="dotcom-header-cta-group-item cp cq lo le lb">
                                    <div class="b7 cl ma jk m8 mb mc ds">
                                        <svg aria-hidden="true" focusable="false" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.596 20.89v-3.763a5.369 5.369 0 0 0 3.532-3.532h3.762a9.034 9.034 0 0 1-7.294 7.294M3.11 13.595h3.762a5.369 5.369 0 0 0 3.532 3.532v3.762a9.034 9.034 0 0 1-7.294-7.294m8.889.932A2.528 2.528 0 1 1 12 9.472a2.528 2.528 0 0 1 0 5.055m0-11.566c4.447 0 8.135 3.214 8.89 7.443h-3.762C16.444 8.21 14.42 6.605 12 6.605s-4.443 1.604-5.127 3.8H3.11C3.866 6.174 7.554 2.96 12 2.96M12 0C5.373 0 0 5.371 0 12c0 6.626 5.373 12 12 12 6.628 0 12-5.374 12-12 0-6.629-5.372-12-12-12"></path>
                                        </svg>
                                    </div>
                                    <Link to ="/truckerLogin">
                                    <a aria-label="Log in to driver account" class="dotcom-header-cta-group-item__link ef cl ib md me d4 mf d5 mg bp b5 ii bq mh mi mj mk ml mm">
                                        <span class="b7 ic iy ih ms iz al mt bq j0 mu l9 la j8 mv mw mx">Trucker Login</span>
                                        <div class="cl my b7 j6 ma mz j8 n0 n1 kb">
                                            <svg aria-hidden="true" focusable="false" width="1em" height="1em" fill="currentColor" viewBox="0 0 36 36">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    </Link>
                                </div>
                                
                                <div class="dotcom-header-cta-group-item cp cq lp le lb">
                                    <div class="b7 cl ma jk m8 mb mc ds">
                                        <svg aria-hidden="true" focusable="false" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.354 13.14C5.788 13.14 4 14.927 4 17.492v4.17l8.505-8.506c.07.005-4.15-.018-4.15-.018M6.163 24h13.902v-2.885h-6.358l6.357-6.358c-.694-.912-1.757-1.498-3.059-1.6L6.164 24zm6.31-20.924a2.728 2.728 0 1 1 0 5.457 2.728 2.728 0 0 1 0-5.457m0 8.533a5.804 5.804 0 1 0 0-11.608 5.804 5.804 0 0 0 0 11.608"></path>
                                        </svg>
                                    </div>
                                    <Link to ="/companyLogin">
                                    <a aria-label="Log in to rider account" class="dotcom-header-cta-group-item__link ef cl ib md me d4 mf d5 mg bp b5 ii bq mh mi mj mk ml mm">
                                        <span class="b7 ic iy ih ms iz al mt bq j0 mu l9 la j8 mv mw mx">Company Login</span>
                                        <div class="cl my b7 j6 ma mz j8 n0 n1 kb">
                                            <svg aria-hidden="true" focusable="false" width="1em" height="1em" fill="currentColor" viewBox="0 0 36 36">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    </Link>
                                </div>
                                
                                <div class="dotcom-header-cta-group-item cp cq lp le lb">
                                    <div class="b7 cl ma jk m8 mb mc ds">
                                        <svg aria-hidden="true" focusable="false" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.354 13.14C5.788 13.14 4 14.927 4 17.492v4.17l8.505-8.506c.07.005-4.15-.018-4.15-.018M6.163 24h13.902v-2.885h-6.358l6.357-6.358c-.694-.912-1.757-1.498-3.059-1.6L6.164 24zm6.31-20.924a2.728 2.728 0 1 1 0 5.457 2.728 2.728 0 0 1 0-5.457m0 8.533a5.804 5.804 0 1 0 0-11.608 5.804 5.804 0 0 0 0 11.608"></path>
                                        </svg>
                                    </div>
                                    <Link to ="/logisticsLogin">
                                    <a aria-label="Log in to rider account" class="dotcom-header-cta-group-item__link ef cl ib md me d4 mf d5 mg bp b5 ii bq mh mi mj mk ml mm">
                                        <span class="b7 ic iy ih ms iz al mt bq j0 mu l9 la j8 mv mw mx">Logistics Login</span>
                                        <div class="cl my b7 j6 ma mz j8 n0 n1 kb">
                                            <svg aria-hidden="true" focusable="false" width="1em" height="1em" fill="currentColor" viewBox="0 0 36 36">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
