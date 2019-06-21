import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MyProfile extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="personal-information">Personal Information</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="profiles">My Profile</Link><span className="divider">/</span></li>
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
                                            <h4 className="usa-sidenav-header"> <Link to="personal-information">Personal
                    Information</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link className="usa-current " to="profiles">My Profile</Link></li>
                                                <li><Link to="download-my-data">Download My Data</Link></li>
                                                <li><Link to="change-password">Change Password</Link></li>
                                                <li><Link to="in-case-of-emergency">In Case of Emergency</Link></li>
                                                <li><Link to="account">My Account</Link></li>
                                                <li><Link to="my-links">My Links</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_83_ portlet-static portlet-static-end portlet-borderless portlet-alerts " id="p_p_id_83_"> <span id="p_83" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="unread-entries">
                                                    <div className="entry first last read" id="_83_1208980020">
                                                        <h3 className="entry-title"> VA Appointments Unavailable </h3>
                                                        <ul className="edit-actions icons-container lfr-meta-actions"> </ul>
                                                        <div className=" entry-content entry-type-general"> <span className="entry-scope">General</span>
                                                            <div className="show-only-on-page" data-friendly-url="appointments">All
                                                              VA appointments may not be available for display. This is a
                          temporary situation. You may wish to <Link to="/index" target="_blank">telephone your VA Medical Center</Link> and
                          confirm any upcoming appointments.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="read-entries"> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_lMweZe2UcVFj_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_lMweZe2UcVFj" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_lMweZe2UcVFj_FullContent0">
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
                                    <div className="portlet-boundary portlet-boundary_mhvusermanagement_WAR_mhvusermgmtportalportlet_ portlet-static portlet-static-end portlet-borderless " id="p_p_id_mhvusermanagement_WAR_mhvusermgmtportalportlet_"> <span id="p_mhvusermanagement_WAR_mhvusermgmtportalportlet" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body"> </div>
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
                                            <h4 className="usa-sidenav-header"> <Link to="personal-information">Personal
                    Information</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link className="usa-current " to="profiles">My Profile</Link></li>
                                                <li><Link to="download-my-data">Download My Data</Link></li>
                                                <li><Link to="change-password">Change Password</Link></li>
                                                <li><Link to="in-case-of-emergency">In Case of Emergency</Link></li>
                                                <li><Link to="account">My Account</Link></li>
                                                <li><Link to="my-links">My Links</Link></li>
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

export default MyProfile;