import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="active last"><Link to="/about-mhv">About MHV</Link><span className="divider">/</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-only usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_NGMt4erT4jUZ_"> <span id="p_56_INSTANCE_NGMt4erT4jUZ" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h2>About My HealtheVet</h2>
                                                    <p>About My HealtheVet offers you tips and tools to help you partner with
                                                      your health care team, so together you may work to manage your health.
                                                      Here you may find useful resources when you need them. The support tools
                                                      on this page are designed to enrich your experience with My HealtheVet
                      and help you make informed decisions.</p>
                                                </div>
                                                <div className="entry-links"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mhv-row-2 cardnavBottom usa-section mhv-padding-top-bottom ">
                        <div className="portlet-layout usa-grid">
                            <div className="portlet-boundary portlet-boundary_mhvcardnavigation_WAR_mhvnavigationportlet_ portlet-static portlet-static-end portlet-borderless mhv-card-navigation-portlet " id="p_p_id_mhvcardnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvCardnavBottom_"> <span id="p_mhvcardnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvCardnavBottom" />
                                <div className="portlet-borderless-container">
                                    <div className="portlet-body">
                                        <div id="mhvCardNavigation">
                                            <div className="nav-menu nav-menu-style-none">
                                                <ul className="layouts level-1">
                                                    <li className="card-nav-li"><a className="card-nav-link" href="../../how-do-i.html">
                                                        <h3 className="card-nav-title">How Do I</h3><span className="card-nav-description">Learn about various My HealtheVet
                                                          topics, from using the online features to applying for VA
                          benefits.</span>
                                                    </a></li>
                                                    <li className="card-nav-li"><a className="card-nav-link" href="../../learn-more.html">
                                                        <h3 className="card-nav-title">Learn More</h3><span className="card-nav-description">Learn how to use your VA health
                                                          record, or your self-reported information to partner with your
                          health care team.</span>
                                                    </a></li>
                                                    <li className="card-nav-li"><a className="card-nav-link" href="../../faqs.html">
                                                        <h3 className="card-nav-title">FAQs</h3><span className="card-nav-description">Find answers to frequently asked
                                                          questions about My HealtheVet's online tools and
                          features.</span>
                                                    </a></li>
                                                    <li className="card-nav-li"><a className="card-nav-link" href="../../how-to-use-mhv.html">
                                                        <h3 className="card-nav-title">How to Use MHV</h3><span className="card-nav-description">Learn how to use My HealtheVet and
                          better manage your health care online.</span>
                                                    </a></li>
                                                    <li className="card-nav-li"><a className="card-nav-link" href="https://www.myhealth.va.gov/help#quick-guides">
                                                        <h3 className="card-nav-title">Quick Guides</h3><span className="card-nav-description">One-page guides that provide
                          information at a glance.</span>
                                                    </a></li>
                                                    <li className="card-nav-li"><a className="card-nav-link" href="https://www.myhealth.va.gov/help#user-guides">
                                                        <h3 className="card-nav-title">User Guides</h3><span className="card-nav-description">Step-by-Step guides on how to use
                          specific features offered.</span>
                                                    </a></li>
                                                    <li className="card-nav-li"><a className="card-nav-link" href="../../webusers.html">
                                                        <h3 className="card-nav-title">Metrics</h3><span className="card-nav-description">Discover the usage metrics behind
                                                          My HealtheVet. View how many Veterans are using Secure
                                                          Messaging, downloading Blue Button reports, requesting
                          prescription refills, and more.</span>
                                                    </a></li>
                                                </ul><br className="clearboth" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="portlet-boundary portlet-boundary_1_WAR_kaleodesignerportlet_ portlet-static portlet-static-end portlet-borderless kaleo-designer-portlet " id="p_p_id_1_WAR_kaleodesignerportlet_"> <span id="p_1_WAR_kaleodesignerportlet" /> </div>
                    <div className="portlet-boundary portlet-boundary_1_WAR_samlportlet_ portlet-static portlet-static-end portlet-borderless " id="p_p_id_1_WAR_samlportlet_"> <span id="p_1_WAR_samlportlet" /> </div>
                    <form action="#" id="hrefFm" method="post" name="hrefFm"> <span /> </form>
                </div>
            </main>

        );
    }
}

export default About;