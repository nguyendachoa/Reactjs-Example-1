import React, { Component } from 'react';
import MHVLogoWhite238x83826d from './MHVLogoWhite-238x83826d.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="usa-footer usa-footer-big" role="contentinfo">
                <div className="usa-grid usa-footer-return-to-top"> <a href="">Return to top</a>  </div>
                <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_56789_"> <span id="p_56_INSTANCE_56789" />
                    <div className="portlet-borderless-container">
                        <div className="portlet-body">
                            <div className="journal-content-article">
                                <div className="usa-footer-primary-section">
                                    <div className="row-fluid usa-grid">
                                        <nav className="usa-footer-nav span8">
                                            <div className="row-fluid">
                                                <ul className="usa-unstyled-list usa-footer-primary-content span3">
                                                    <li className="usa-footer-primary-link">
                                                        <h4>About</h4>
                                                    </li>
                                                    <li><Link to="/about-mhv">Site Overview</Link></li>
                                                    <li><Link to="/sitemap">Site Map</Link></li>
                                                    <li><Link to="/help">Help &amp; User Guides</Link></li>
                                                    <li><Link to="/faqs">FAQ</Link></li>
                                                    <li><Link to="/privacy-security">Privacy &amp;
                        Security</Link></li>
                                                    <li><Link to="/terms-conditions">Terms and
                        Conditions</Link></li>
                                                </ul>
                                                <ul className="usa-unstyled-list usa-footer-primary-content span3">
                                                    <li className="usa-footer-primary-link">
                                                        <h4>Policies</h4>
                                                    </li>
                                                    <li><Link className="usa-external_link" to="/privacy-security" target="_blank">Privacy Policy</Link></li>
                                                    <li><Link className="usa-external_link" to="/webpolicylinks" target="_blank" rel="noopener noreferrer">Web Policies</Link></li>
                                                    <li><Link className="usa-external_link" to="/index" target="_blank" rel="noopener noreferrer">FOIA</Link></li>
                                                    <li><Link to="/accessibility">Accessibility</Link></li>
                                                    <li><Link to="/system-use-notification.">System Use</Link>
                                                    </li>
                                                </ul>
                                                <ul className="usa-unstyled-list usa-footer-primary-content span3">
                                                    <li className="usa-footer-primary-link">
                                                        <h4>Important Links</h4>
                                                    </li>
                                                    <li><Link className="usa-external_link" to="/index" target="_blank" rel="noopener noreferrer">VA Home</Link></li>
                                                    <li><Link className="usa-external_link" to="/index" target="_blank" rel="noopener noreferrer">White House</Link></li>
                                                    <li><Link className="usa-external_link" to="/index" target="_blank" rel="noopener noreferrer">USA.gov</Link></li>
                                                    <li><Link className="usa-external_link" to="/index" target="_blank" rel="noopener noreferrer">Inspector General</Link></li>
                                                    <li><Link className="usa-external_link" to="/index" target="_blank" rel="noopener noreferrer">Facility and Service Locator</Link></li>
                                                </ul>
                                                <ul className="usa-unstyled-list usa-footer-primary-content span3">
                                                    <li className="usa-footer-primary-link">
                                                        <h4>Quick Links</h4>
                                                    </li>
                                                    <li><Link className="usa-external_link" to="/veterans"  target="_blank" title="Mobile Apps" rel="noopener noreferrer">Mobile
                        Apps</Link></li>
                                                    <li><Link className="usa-external_link" to="/homepage" target="_blank" title="eBenefits" rel="noopener noreferrer">eBenefits</Link></li>
                                                    <li><Link className="usa-external_link" to="/index" target="_blank" rel="noopener noreferrer">TriCare</Link></li>
                                                    <li><Link className="usa-external_link" to="/how-to-use-mhv"  target="_blank" title="How to Use My HealtheVet">How to Use My
                        HealtheVet</Link></li>
                                                    <li><Link className="usa-external_link" to="/index"  target="_blank" title="VA Dental Insurance" rel="noopener noreferrer">VA Dental Insurance</Link></li>
                                                    <li><Link className="usa-external_link" to="/va-forms"  target="_blank" title="Most Requested Forms">Most Requested Forms</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                        <div className="usa-sign_up-block span4">
                                            <h3 className="usa-sign_up-header">Subscribe to Receive My HealtheVet Updates</h3>
                                            <form acceptCharset="UTF-8" action="https://public.govdelivery.com/accounts/USVHA/subscribers/qualify" id="GD-snippet-form" method="post"><input name="utf8" type="hidden" defaultValue="¿" />
                                                <input name="authenticity_token" style={{ width: 120 }} type="hidden" defaultValue="zrD8Ri9HkK5xMUmPd/64OtM13GRi0R9lmtOiprc1K4N/I6+cXT+0y+g1HmXpYPAt0ZT4lSgWuQk99qqiAsy/ZQ==" />
                                                <input id="topic_id" name="topic_id" type="hidden" defaultValue="USVHA_60" />
                                                <fieldset>
                                                    <legend className="usa-sr-only">Subscribe to Receive My HealtheVet Updates
                    </legend><label htmlFor="email0">Your email address</label> <input id="email0" name="email" type="email" />
                                                    <div className="button_panel"><strong><input className="form_button" name="commit" type="submit" defaultValue="Submit" /></strong></div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="usa-footer-secondary_section usa-footer-big-secondary-section">
                                    <div className="usa-grid">
                                        <div className="usa-footer-logo usa-width-one-fourth"><img alt="My HealtheVet" className="usa-footer-logo-img" src={MHVLogoWhite238x83826d} />
                                            <h3 className="usa-footer-logo-heading">My HealtheVet</h3>
                                        </div>
                                        <div className="usa-footer-contact-links usa-width-three-fourths"><Link className="usa-social_link" to="../../www.facebook.com/veteranshealth"><i className="fa fa-facebook" title="Facebook"><span>Facebook</span></i> </Link>  <Link className="usa-social_link" to="../../www.flickr.com/photos/VeteransAffairs/index"> <i className="fa fa-flickr" title="Flickr"><span>Flickr</span></i> </Link>  <Link className="usa-social_link" to="../../www.instagram.com/deptvetaffairs/index"> <i className="fa fa-instagram" title="Instagram"><span>Instagram</span></i> </Link>  <Link className="usa-social_link" to="../../twitter.com/veteranshealth"> <i className="fa fa-twitter" title="Twitter"><span>Twitter</span></i> </Link>  <Link className="usa-social_link" to="../../www.youtube.com/user/VeteransHealthAdmin"> <i className="fa fa-youtube" title="YouTube"><span>YouTube</span></i> </Link> 
                                            {/*<Link class="usa-social_link" to="javascript:void(0);"> <i class="fa fa-rss" title="RSS"><span>RSS</span></i> </Link> */}
                                            <address>
                                                <h3 className="usa-footer-contact-heading">My HealtheVet Help Desk:</h3>
                                                <p>You can call Monday - Friday, 7:00 a.m. - 7:00 p.m. (Central Time)<br /> <Link to="tel:+18773270022">1-877-327-0022</Link> <br /> <Link to="tel:+18008778339">1-800-877-8339 (TTY)</Link> </p>
                                                <p><Link to="web/myhealthevet/contact-mhv"><strong>Contact My
                        HealtheVet</strong></Link> <br /> for any questions or concerns about
                    this site.</p> <span className="h2 usa-footer-contact-heading"><strong>Veteran's
                      Crisis Line:</strong> <Link to="tel:+18002738255">1-800-273-8255 (Press
                      1)</Link>  </span>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="entry-links" />
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;