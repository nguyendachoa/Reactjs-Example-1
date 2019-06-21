import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SeftEntered extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="pharmacy">Pharmacy</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="self-entered-medications-supplements">Self-Entered Medications +
            Supplements</Link><span className="divider">/</span></li>
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
                                            <h4 className="usa-sidenav-header"> <Link to="pharmacy">Pharmacy</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="refill-prescriptions">Refill VA Prescriptions</Link></li>
                                                <li><Link to="prescriptions-history">VA Prescription History</Link></li>
                                                <li><Link to="prescription-tracking">VA Prescription Tracking</Link></li>
                                                <li><Link to="my-complete-medications-list">My Medications List</Link></li>
                                                <li><Link to="va-medications-list">VA Medications List</Link></li>
                                                <li><Link className="usa-current " to="self-entered-medications-supplements">Self-Entered
                      Medications + Supplements</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_RErQUgRuut5e_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_RErQUgRuut5e" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_RErQUgRuut5e_FullContent0">
                                                        <div className="asset-content">
                                                            <div className="journal-content-article">
                                                                <h2>Pharmacy</h2>
                                                                <p>There are four (4) features available in the My HealtheVet
                            Pharmacy section:</p>
                                                                <ul className="no-bullets">
                                                                    <li><strong>My Medication + Supplements</strong> - for any
                              user with a My HealtheVet account</li>
                                                                    <li><strong>Refill VA Prescriptions</strong> - for users
                              registered as a VA patient</li>
                                                                    <li><strong>VA Prescription History</strong> - for users
                              registered as a VA patient</li>
                                                                    <li><strong>My VA Medication List</strong> - for users with
                              an <Link to="/upgrading-your-my-healthevet-account-through-in-person-or-online-authentication">upgraded</Link>
                                                                        My HealtheVet account</li>
                                                                </ul>
                                                                <p>To access Pharmacy, you must be logged into your personal My
                                                                  HealtheVet account. If you do not have an account, please
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
                                            <h4 className="usa-sidenav-header"> <Link to="pharmacy">Pharmacy</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="refill-prescriptions">Refill VA Prescriptions</Link></li>
                                                <li><Link to="prescriptions-history">VA Prescription History</Link></li>
                                                <li><Link to="prescription-tracking">VA Prescription Tracking</Link></li>
                                                <li><Link to="my-complete-medications-list">My Medications List</Link></li>
                                                <li><Link to="va-medications-list">VA Medications List</Link></li>
                                                <li><Link className="usa-current " to="self-entered-medications-supplements">Self-Entered
                      Medications + Supplements</Link></li>
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

export default SeftEntered;