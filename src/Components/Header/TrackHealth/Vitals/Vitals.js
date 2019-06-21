import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Vitals extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="track-health">Track Health</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="vitals">Vitals</Link><span className="divider">/</span></li>
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
                                                <li><Link className="usa-current " to="vitals">Vitals</Link>
                                                    <ul className="usa-sidenav-sub_list">
                                                        <li><Link to="blood-pressure">Blood Pressure</Link></li>
                                                        <li><Link to="heart-rate">Heart Rate</Link></li>
                                                        <li><Link to="body-weight">Body Weight</Link></li>
                                                        <li><Link to="body-temperature">Body Temperature</Link></li>
                                                        <li><Link to="pain">Pain</Link></li>
                                                        <li><Link to="blood-sugar">Blood Sugar</Link></li>
                                                        <li><Link to="cholesterol-lipids-profile">Cholesterol (Lipids
                          Profile)</Link></li>
                                                        <li><Link to="pulse-oximetry">Pulse Oximetry</Link></li>
                                                        <li><Link to="international-normalized-ratio-inr">International
                          Normalized Ratio (INR)</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="labs-tests">Labs + Tests</Link></li>
                                                <li><Link to="health-history">Health History</Link></li>
                                                <li><Link to="journals">Journals</Link></li>
                                                <li><Link to="healtheliving-assessment">HealtheLiving Assessment</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_A3Pf8Gs5MeAs_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_A3Pf8Gs5MeAs" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_A3Pf8Gs5MeAs_FullContent0">
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
                    <section className="mhv-row-2 usa-grid-full usa-section mhv-padding-top-bottom hideAbove950">
                        <div className="portlet-layout">
                            <aside className="portlet-column portlet-column-last" id="column-3">
                                <div className="portlet-boundary portlet-boundary_mhvsidebarnavigation_WAR_mhvnavigationportlet_ portlet-static portlet-static-end portlet-borderless mhv-sidebar-navigation-portlet " id="p_p_id_mhvsidebarnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvSidebarMobile_"> <span id="p_mhvsidebarnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvSidebarMobile" />
                                    <div className="portlet-borderless-container">
                                        <div className="portlet-body">
                                            <h4 className="usa-sidenav-header"> <Link to="track-health">Track Health</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link className="usa-current " to="vitals">Vitals</Link>
                                                    <ul className="usa-sidenav-sub_list">
                                                        <li><Link to="blood-pressure">Blood Pressure</Link></li>
                                                        <li><Link to="heart-rate">Heart Rate</Link></li>
                                                        <li><Link to="body-weight">Body Weight</Link></li>
                                                        <li><Link to="body-temperature">Body Temperature</Link></li>
                                                        <li><Link to="pain">Pain</Link></li>
                                                        <li><Link to="blood-sugar">Blood Sugar</Link></li>
                                                        <li><Link to="cholesterol-lipids-profile">Cholesterol (Lipids
                          Profile)</Link></li>
                                                        <li><Link to="pulse-oximetry">Pulse Oximetry</Link></li>
                                                        <li><Link to="international-normalized-ratio-inr">International
                          Normalized Ratio (INR)</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="labs-tests">Labs + Tests</Link></li>
                                                <li><Link to="health-history">Health History</Link></li>
                                                <li><Link to="journals">Journals</Link></li>
                                                <li><Link to="healtheliving-assessment">HealtheLiving Assessment</Link></li>
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

export default Vitals;