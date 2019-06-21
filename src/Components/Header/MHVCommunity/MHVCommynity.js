import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MHVCommynity extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="active last"><Link to="mhv-community">MHV Community</Link><span className="divider">/</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-only usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_DHU3tvA4OEGk_"> <span id="p_56_INSTANCE_DHU3tvA4OEGk" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h2>The My HealtheVet Community</h2>
                                                    <p>The My HealtheVet Community is where you can find all kinds of
                                                      information about your Veteran community. There are links to news and
                                                      events, information on volunteering, VA benefits as well as health
                      information you can use.</p>
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
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="va-benefits">
                                                        <h3 className="card-nav-title">VA Benefits</h3><span className="card-nav-description">VA benefits include medical,
                                                          surgical, financial, and rehabilitative care for Refill VA
                                                          Prescriptions Veterans as well as their spouses, and
                          dependents.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="mobile-apps">
                                                        <h3 className="card-nav-title">VA Mobile Apps</h3><span className="card-nav-description">Learn about the variety of
                          health-related VA mobile apps for Veterans.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="in-the-spotlight">
                                                        <h3 className="card-nav-title">In the Spotlight</h3><span className="card-nav-description">Feature stories on managing your
                          health</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="get-involved">
                                                        <h3 className="card-nav-title">Get Involved</h3><span className="card-nav-description">Learn how to join volunteer
                          programs or participate in VA medical research.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="subscribe">
                                                        <h3 className="card-nav-title">Subscribe</h3><span className="card-nav-description">Get the updates you need to manage
                                                          your health care by signing up for My HealtheVet biweekly
                          newsletter.</span>
                                                    </Link></li>
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

export default MHVCommynity;