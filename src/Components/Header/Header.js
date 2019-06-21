import React, { Component } from 'react';
import favicon from './favicon-57.png';
import iconhttps from './icon-https.svg';
import icondotgov from './icon-dot-gov.svg';
import MHVlogo from './MHVLogoWhite-143x50.png';
import closesvg from './close.svg';
import {Link} from 'react-router-dom';

class Header extends Component {


    render() {
        return (
            <header id="banner" className="usa-header usa-header-extended" role="banner">
                {/* Gov banner BEGIN */}
                <div className="usa-banner">
                    <div className="usa-accordion">
                        <header className="usa-banner-header">
                            <div className="usa-grid usa-banner-inner"> <img src={favicon} alt="U.S. flag" />
                                <p>An official website of the United States government</p> <button className="usa-accordion-button usa-banner-button" aria-expanded="false" aria-controls="gov-banner"> <span className="usa-banner-button-text">Here's how you know.</span>
                                </button>
                            </div>
                        </header>
                        <div className="usa-banner-content usa-grid usa-accordion-content" id="gov-banner" aria-hidden="true">
                            <div className="usa-banner-guidance-gov usa-width-one-half"> <img className="usa-banner-icon usa-media_block-img" src={icondotgov} alt="Dot gov" />
                                <div className="usa-media_block-body">
                                    <p> <strong>The .gov means it’s official.</strong> <br /> Federal government websites
                                      always use a .gov or .mil domain. Before sharing sensitive information online, make sure
                                      you’re on a .gov or .mil site by inspecting your browser’s address (or
              “location”) bar. </p>
                                </div>
                            </div>
                            <div className="usa-banner-guidance-ssl usa-width-one-half"> <img className="usa-banner-icon usa-media_block-img" src={iconhttps} alt="SSL" />
                                <div className="usa-media_block-body">
                                    <p> This site is also protected by an SSL (Secure Sockets Layer) certificate that’s
              been signed by the U.S. government. The <strong>https://</strong> means all transmitted
                                        data is encrypted — in other words, any information or browsing history that you
              provide is transmitted securely. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Gov banner END */}
                <div className="usa-nav-container">
                    <div className="usa-navbar"> <button className="usa-menu-btn">Menu</button>
                        <div className="usa-logo" id="logo"> <em className="usa-logo-text"> <Link to="/VA"  title="VA" aria-label="Go to VA"> <strong>VA</strong> </Link> | <Link to="/" title="Go to My HealtheVet" className="float-right" aria-label="Go to My HealtheVet"> <span>My HealtheVet</span> <img id="mhv-logo-img" src={MHVlogo} alt="My HealtheVet" title="My HealtheVet" /> </Link> </em> </div>
                    </div>
                    <nav role="navigation" className="usa-nav">
                        <div className="usa-nav-inner"> <button className="usa-nav-close"> <img src={closesvg} alt="close" /> </button>
                            <ul className="usa-nav-primary usa-accordion">
                                <li> <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-1"> <span>Home</span> </button>
                                    <ul id="sidenav-1" className="usa-nav-submenu" aria-hidden="true">
                                        <li><Link to="/">Home</Link></li>
                                    </ul>
                                </li>
                                <li> <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-2"> <span>Personal Information</span> </button>
                                    <ul id="sidenav-2" className="usa-nav-submenu" aria-hidden="true">
                                        <li><Link to="/personal-information">Personal Information</Link></li>
                                        <li><Link to="/profiles">My Profile</Link></li>
                                        <li><Link to="/download-my-data">Download My Data</Link></li>
                                        <li><Link to="/change-password">Change Password</Link></li>
                                        <li><Link to="/in-case-of-emergency">In Case of Emergency</Link></li>
                                        <li><Link to="/account">My Account</Link></li>
                                        <li><Link to="/my-links">My Links</Link></li>
                                    </ul>
                                </li>
                                <li> <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-3"> <span>Pharmacy</span> </button>
                                    <ul id="sidenav-3" className="usa-nav-submenu" aria-hidden="true">
                                        <li><Link to="/pharmacy">Pharmacy</Link></li>
                                        <li><Link to="/refill-prescriptions">Refill VA Prescriptions</Link></li>
                                        <li><Link to="/prescriptions-history">VA Prescription History</Link></li>
                                        <li><Link to="/prescription-tracking">VA Prescription Tracking</Link></li>
                                        <li><Link to="/my-complete-medications-list">My Medications List</Link></li>
                                        <li><Link to="/va-medications-list">VA Medications List</Link></li>
                                        <li><Link to="/self-entered-medications-supplements">Self-Entered Medications +
                  Supplements</Link></li>
                                    </ul>
                                </li>
                                <li> <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-4"> <span>Get Care</span> </button>
                                    <ul id="sidenav-4" className="usa-nav-submenu" aria-hidden="true">
                                        <li><Link to="/get-care">Get Care</Link></li>
                                        <li><Link to="/care-givers">Care Givers</Link></li>
                                        <li><Link to="/treatment-facilities">Treatment Facilities</Link></li>
                                        <li><Link to="/my-coverage">My Coverage</Link></li>
                                        <li><Link to="/health-calendar">Health Calendar</Link></li>
                                    </ul>
                                </li>
                                <li> <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-5"> <span>Track Health</span> </button>
                                    <ul id="sidenav-5" className="usa-nav-submenu" aria-hidden="true">
                                        <li><Link to="/track-health">Track Health</Link></li>
                                        <li><Link to="/vitals">Vitals</Link></li>
                                        <li><Link to="/labs-tests">Labs + Tests</Link></li>
                                        <li><Link to="/health-history">Health History</Link></li>
                                        <li><Link to="/journals">Journals</Link></li>
                                        <li><Link to="/healtheliving-assessment">HealtheLiving Assessment</Link></li>
                                    </ul>
                                </li>
                                <li> <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-6"> <span>Research Health</span> </button>
                                    <ul id="sidenav-6" className="usa-nav-submenu" aria-hidden="true">
                                        <li><Link to="/research-health">Research Health</Link></li>
                                        <li><Link to="/healthy-living-centers">Healthy Living Centers</Link></li>
                                        <li><Link to="/mental-health">Mental Health</Link></li>
                                        <li><Link to="/medical-library">Medical Library</Link></li>
                                    </ul>
                                </li>
                                <li> <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-7"> <span>MHV Community</span> </button>
                                    <ul id="sidenav-7" className="usa-nav-submenu" aria-hidden="true">
                                        <li><Link to="/mhv-community">MHV Community</Link></li>
                                        <li><Link to="/va-benefits">VA Benefits</Link></li>
                                        <li><Link to="/mobile-apps">VA Mobile Apps</Link></li>
                                        <li><Link to="/in-the-spotlight">In the Spotlight</Link></li>
                                        <li><Link to="/get-involved">Get Involved</Link></li>
                                        <li><Link to="/subscribe">Subscribe</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="usa-nav-secondary">
                                <form className="usa-search usa-search-small js-search-form usa-sr-only" action="https://www.myhealth.va.gov/mhv-portal-web/web/myhealthevet/search" method="get">
                                    <input name="p_p_id" defaultValue={3} type="hidden" />
                                    <input name="p_p_lifecycle" defaultValue={0} type="hidden" />
                                    <input name="p_p_state" defaultValue="maximized" type="hidden" />
                                    <input name="p_p_mode" defaultValue="view" type="hidden" />
                                    <input name="p_p_col_id" defaultValue="column-1" type="hidden" />
                                    <input name="p_p_col_count" defaultValue={1} type="hidden" />
                                    <input name="_3_struts_action" defaultValue="/search/search" type="hidden" />
                                    <input name="_3_redirect" defaultValue="/mhv-portal-web/web/myhealthevet/search" type="hidden" />
                                    <div role="search" id="usa-search-container">
                                        <label className="usa-sr-only" htmlFor="_3_keywords">Search</label>
                                        <input id="_3_keywords" name="_3_keywords" type="search" tabIndex={-1} /> <button id="searchSbmt" className="usa-button-primary-alt" type="submit" tabIndex={-1}> <span className="usa-sr-only">Search</span> </button> </div>
                                </form>
                                <ul className="usa-unstyled-list usa-nav-secondary-links">
                                    <li className="js-search-button-container"> <button id="searchLink" className="usa-header-search-button js-search-button">Search</button> </li>
                                    <li><Link to="/about-mhv">About</Link></li>
                                    <li><Link to="/contact-mhv">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;