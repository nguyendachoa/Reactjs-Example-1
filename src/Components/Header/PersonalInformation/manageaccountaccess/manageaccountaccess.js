import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class manageaccountaccess extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/web/myhealthevet">My HealtheVet</Link><span className="divider">/</span></li>
                            <li><Link to="/personal-information">Personal
            Information</Link><span className="divider">/</span></li>
                            <li className="current-parent breadcrumb-truncate"><Link to="/account">My Account</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="/manage-account-access">Manage Account
            Access</Link><span className="divider">/</span></li>
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
                                            <h4 className="usa-sidenav-header"> <Link to="/account">My Account</Link>
                                            </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="/change-password">Change
                      Password</Link></li>
                                                <li><Link to="/account-activity-history">Account
                      Activity History</Link></li>
                                                <li><Link to="/my-account-type">My
                      Account Type</Link></li>
                                                <li><Link className="usa-current " to="/manage-account-access">Manage
                      Account Access</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_dkUYhzNtAmuD_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_dkUYhzNtAmuD" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_dkUYhzNtAmuD_FullContent0">
                                                        <div className="asset-content">
                                                            <div className="journal-content-article">
                                                                <h2>Personal Information</h2>
                                                                <p>To access Personal Information, you must be logged into your
                                                                  personal account. If you do not have a My HealtheVet
                            account, please take this time to <Link to="/user-registration">register</Link>.
                          </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-boundary portlet-boundary_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_ portlet-static portlet-static-end portlet-borderless " id="p_p_id_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_"> <span id="p_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div id="_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_" className="liferay-faces-bridge-body">
                                                    <form id="_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_:manageAccountAccess" name="_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_:manageAccountAccess" method="post" action="https://www.myhealth.va.gov:443/mhv-portal-web/manage-account-access?p_auth=GluboqjV&p_p_id=mhvManageAccountAccess_WAR_mhvusermgmtportalportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=2&p_p_col_pos=1&_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet__facesViewIdRender=%2Fviews%2Faccount%2FmanageAccountAccess.xhtml" encType="application/x-www-form-urlencoded"> <input type="hidden" name="_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_:manageAccountAccess" defaultValue="_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_:manageAccountAccess" />
                                                        <input type="hidden" name="javax.faces.encodedURL" defaultValue="https://www.myhealth.va.gov:443/mhv-portal-web/manage-account-access?p_p_id=mhvManageAccountAccess_WAR_mhvusermgmtportalportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=2&p_p_col_pos=1&_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet__jsfBridgeAjax=true&_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet__facesViewIdResource=%2Fviews%2Faccount%2FmanageAccountAccess.xhtml" />
                                                        <h2>Manage Account Access</h2>
                                                        <div className="portlet-toolbar"> <Link to="/faqs" target="_blank" title="Help" alt="Help"><span className="fa fa-question-circle" title="Help" />Help</Link>
                                                        </div><input type="hidden" name="javax.faces.ViewState" id="_mhvManageAccountAccess_WAR_mhvusermgmtportalportlet_:javax.faces.ViewState:0" defaultValue="-229958415594209878:1629219481260020253" autoComplete="off" />
                                                    </form>
                                                </div>
                                                {/* Mirrored from www.myhealth.va.gov/mhv-portal-web/manage-account-access by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 14 Jun 2019 14:21:29 GMT */}
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
                                            <h4 className="usa-sidenav-header"> <Link to="/account">My Account</Link>
                                            </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="/change-password">Change
                      Password</Link></li>
                                                <li><Link to="/account-activity-history">Account
                      Activity History</Link></li>
                                                <li><Link to="/my-account-type">My
                      Account Type</Link></li>
                                                <li><Link className="usa-current " to="/manage-account-access">Manage
                      Account Access</Link></li>
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
                    <form action="#" id="toFm" method="post" name="toFm"> <span /> </form>
                </div>
            </main>

        );
    }
}

export default manageaccountaccess;