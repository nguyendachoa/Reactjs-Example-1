import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class GetCare extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="active last"><Link to="get-care">Get Care</Link><span className="divider">/</span></li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-only usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_ZSvpPLZFc3q0_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_ZSvpPLZFc3q0" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_ZSvpPLZFc3q0_FullContent0">
                                                        <div className="asset-content">
                                                            <div className="journal-content-article">
                                                                <h2>Get Care</h2>
                                                                <p>To access Get Care, you must be logged into your personal
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
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="care-givers">
                                                        <h3 className="card-nav-title">Care Givers</h3><span className="card-nav-description">Keep track of all health care
                          providers in one convenient location.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="treatment-facilities">
                                                        <h3 className="card-nav-title">Treatment Facilities</h3><span className="card-nav-description">Find VA treatment centers online
                          and record the facilities where you have been treated.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="my-coverage">
                                                        <h3 className="card-nav-title">My Coverage</h3><span className="card-nav-description">Track health care providers,
                                                          appointments, treatment facilities and all relevant insurance
                                                          information here. My Coverage puts you in control of your health
                          care.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="health-calendar">
                                                        <h3 className="card-nav-title">Health Calendar</h3><span className="card-nav-description">Keep doctor appointments organized
                                                          online. Check your health calendar for any changes or
                          cancellations before your visit.</span>
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
                    <form action="#" id="toFm" method="post" name="toFm"> <span /> </form>
                </div>
            </main>

        );
    }
}

export default GetCare;