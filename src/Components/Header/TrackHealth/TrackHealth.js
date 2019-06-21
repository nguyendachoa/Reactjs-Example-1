import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrackHealth extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="active last"><Link to="track-health">Track Health</Link><span className="divider">/</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-only usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_25qK57DZdFKv_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_25qK57DZdFKv" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_25qK57DZdFKv_FullContent1">
                                                        <div className="asset-content">
                                                            <div className="journal-content-article">
                                                                <h2>Track Health</h2>
                                                                <p>To access Track Health, you must be logged into your personal
                                                                  account. If you do not have a My HealtheVet account, please
                            take this time to <Link to="/user-registration">register</Link>.
                          </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="vitals">
                                                        <h3 className="card-nav-title">Vitals</h3><span className="card-nav-description">Blood pressure, heart rate, and
                                                          cholesterol are among the nine vital signs you can record and
                                                          track online. Learn how to track your health statistics
                          today.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="labs-tests">
                                                        <h3 className="card-nav-title">Labs + Tests</h3><span className="card-nav-description">Access your VA lab and test results
                                                          securely online. View, download and print your results to stay
                          up to date on your health care.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="health-history">
                                                        <h3 className="card-nav-title">Health History</h3><span className="card-nav-description">Your health history is available to
                                                          review and update securely, online. Manage your health by
                          tracking and acting on your medical records today.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="journals">
                                                        <h3 className="card-nav-title">Journals</h3><span className="card-nav-description">Record your daily activity and food
                                                          intake online. My HealtheVet journals help you manage your
                          health and fitness.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="healtheliving-assessment">
                                                        <h3 className="card-nav-title">HealtheLiving Assessment</h3><span className="card-nav-description">Take the HealtheLiving Assessment
                                                          and receive a personalized report telling you your health
                          age.</span>
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

export default TrackHealth;