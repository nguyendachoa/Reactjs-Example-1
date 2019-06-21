import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HealthyLivingCenter extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="research-health">Research Health</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="healthy-living-centers">Healthy Living
            Centers</Link><span className="divider">/</span></li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <aside className="portlet-column portlet-column-last usa-width-one-fourth usa-layout-docs-sidenav hideBelow950" id="column-2">
                                <div className="portlet-boundary portlet-boundary_mhvsidebarnavigation_WAR_mhvnavigationportlet_ portlet-static portlet-static-end portlet-borderless mhv-sidebar-navigation-portlet " id="p_p_id_mhvsidebarnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvSidebarLeft_"> <span id="p_mhvsidebarnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvSidebarLeft" />
                                    <div className="portlet-borderless-container">
                                        <div className="portlet-body">
                                            <h4 className="usa-sidenav-header"> <Link to="research-health">Research Health</Link>
                                            </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link className="usa-current " to="healthy-living-centers">Healthy Living
                      Centers</Link>
                                                    <ul className="usa-sidenav-sub_list">
                                                        <li><Link to="eat-wisely">Eat Wisely</Link></li>
                                                        <li><Link to="physical-activity">Physical Activity</Link></li>
                                                        <li><Link to="healthy-sleep">Healthy Sleep</Link></li>
                                                        <li><Link to="medications-play-it-safe">Medications: Play It
                          Safe</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="mental-health">Mental Health</Link></li>
                                                <li><Link to="medical-library">Medical Library</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_oskAiZZqC0vh_"> <span id="p_56_INSTANCE_oskAiZZqC0vh" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h2>Healthy Living Centers</h2>
                                                    <p>Healthy Living Centers are educational and health promotion materials on
                                                      healthy living. The Centers enable Veterans to take control of their own
                                                      health. From eating better, to physical activity, to healthy behaviors
                                                      and medication safety, the Centers provide information and services for
                                                      Veterans and Servicemembers making the move from active duty to civilian
                                                      life. Veterans can use these Centers to improve their health on their
                      own terms.</p>
                                                </div>
                                                <div className="entry-links"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mhv-row-2 usa-grid-full usa-section mhv-padding-top-bottom hideAbove950">
                        <div className="portlet-layout">
                            <aside className="portlet-column portlet-column-last" id="column-3">
                                <div className="portlet-boundary portlet-boundary_mhvsidebarnavigation_WAR_mhvnavigationportlet_ portlet-static portlet-static-end portlet-borderless mhv-sidebar-navigation-portlet " id="p_p_id_mhvsidebarnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvSidebarMobile_"> <span id="p_mhvsidebarnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvSidebarMobile" />
                                    <div className="portlet-borderless-container">
                                        <div className="portlet-body">
                                            <h4 className="usa-sidenav-header"> <Link to="research-health">Research Health</Link>
                                            </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link className="usa-current " to="healthy-living-centers">Healthy Living
                      Centers</Link>
                                                    <ul className="usa-sidenav-sub_list">
                                                        <li><Link to="eat-wisely">Eat Wisely</Link></li>
                                                        <li><Link to="physical-activity">Physical Activity</Link></li>
                                                        <li><Link to="healthy-sleep">Healthy Sleep</Link></li>
                                                        <li><Link to="medications-play-it-safe">Medications: Play It
                          Safe</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="mental-health">Mental Health</Link></li>
                                                <li><Link to="medical-library">Medical Library</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-3" />
                            </aside>
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

export default HealthyLivingCenter;