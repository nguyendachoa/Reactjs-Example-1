import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ReseachHealth extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="active last"><Link to="research-health">Research Health</Link><span className="divider">/</span></li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-only usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_V34zedbn0vr5_"> <span id="p_56_INSTANCE_V34zedbn0vr5" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h2>Research Health</h2>
                                                    <p>The Research Health section of My HealtheVet is where you can get health
                                                      information, research a topic, and simply learn more about your health.
                                                      Read about common conditions and VA health programs. Get answers to your
                                                      health questions from trusted medical resources. My HealtheVet makes it
                                                      easy to stay informed by bringing a wealth of information right to your
                      fingertips.</p>
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
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="healthy-living-centers">
                                                        <h3 className="card-nav-title">Healthy Living Centers</h3><span className="card-nav-description">Learn how to improve your health
                                                          with Healthy Living Centers' educational materials on
                          healthy living.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="mental-health">
                                                        <h3 className="card-nav-title">Mental Health</h3><span className="card-nav-description">Veterans dealing with mental health
                                                          issues can find treatment, counseling, and other support
                          here.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="medical-library">
                                                        <h3 className="card-nav-title">Medical Library</h3><span className="card-nav-description">Online VA medical libraries help
                                                          Veterans learn about health problems and how to control
                          them.</span>
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

export default ReseachHealth;