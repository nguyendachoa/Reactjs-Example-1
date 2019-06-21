import React, { Component } from 'react';
import bbdownloadmydata7a6d from './bb-download-my-data7a6d.png';
import {Link} from 'react-router-dom';


class DownloadMyData extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="/personal-information">Personal Information</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="/download-my-data">Download My
            Data</Link><span className="divider">/</span></li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-only usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_Fo6c9TiDiHfq_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_Fo6c9TiDiHfq" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_Fo6c9TiDiHfq_FullContent0">
                                                        <div className="asset-content">
                                                            <div className="journal-content-article">
                                                                <h2><img alt="Select Type of Report" src={bbdownloadmydata7a6d} title="Select Type of Report" /> Select Type of Report
                          </h2>
                                                                <p>To access Download My Data, you must be logged into your
                                                                  personal account. If you do not have a My HealtheVet
                            account, please take this time to <Link to="user-registration">register</Link>.
                          </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-boundary portlet-boundary_mhvcardnavigation_WAR_mhvnavigationportlet_ portlet-static portlet-static-end portlet-borderless mhv-card-navigation-portlet " id="p_p_id_mhvcardnavigation_WAR_mhvnavigationportlet_"> <span id="p_mhvcardnavigation_WAR_mhvnavigationportlet" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div id="mhvCardNavigation">
                                                    <div className="nav-menu nav-menu-style-none"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default DownloadMyData;