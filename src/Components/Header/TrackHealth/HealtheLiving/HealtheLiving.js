import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HealtheLiving extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="track-health">Track Health</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="healtheliving-assessment">HealtheLiving
            Assessment</Link><span className="divider">/</span></li>
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
                                            <h4 className="usa-sidenav-header"> <Link to="track-health">Track Health</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="vitals">Vitals</Link></li>
                                                <li><Link to="labs-tests">Labs + Tests</Link></li>
                                                <li><Link to="health-history">Health History</Link></li>
                                                <li><Link to="journals">Journals</Link></li>
                                                <li><Link className="usa-current " to="healtheliving-assessment">HealtheLiving
                      Assessment</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_mhvHraHome_WAR_mhvhraportalportlet_ portlet-static portlet-static-end portlet-borderless " id="p_p_id_mhvHraHome_WAR_mhvhraportalportlet_"> <span id="p_mhvHraHome_WAR_mhvhraportalportlet" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <h2>Track Health - HealtheLiving Assessment</h2>
                                                <h3>What is HealtheLivingAssessment ?</h3>
                                                <p className="introText"> This assessment asks you questions about your medical
                                                  history and health choices. After you have answered all of the
                                                  questions,a personalized summary report will be created for you. A full
                    report contains more information and resources. </p>
                                                <h4>Your summary report has:</h4>
                                                <ul>
                                                    <li>Your current health status.</li>
                                                    <li>Your risks of developing major diseases.</li>
                                                    <li>A list of healthy changes you can make now.</li>
                                                    <li>Your Health Age.</li>
                                                </ul>
                                                <p> To access the HealtheLiving Assessment, you must be logged into your
                                                  personal account. If you do not have a My HealtheVet account, please
                    take this time to <Link to="/user-registration">register</Link>.
                  </p>
                                                {/* Mirrored from www.myhealth.va.gov/mhv-portal-web/healtheliving-assessment by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 14 Jun 2019 14:15:47 GMT */}
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
                                            <h4 className="usa-sidenav-header"> <Link to="track-health">Track Health</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="vitals">Vitals</Link></li>
                                                <li><Link to="labs-tests">Labs + Tests</Link></li>
                                                <li><Link to="health-history">Health History</Link></li>
                                                <li><Link to="journals">Journals</Link></li>
                                                <li><Link className="usa-current " to="healtheliving-assessment">HealtheLiving
                      Assessment</Link></li>
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

export default HealtheLiving;