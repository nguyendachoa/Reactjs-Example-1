import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GetInvolved extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="mhv-community">MHV Community</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="get-involved">Get Involved</Link><span className="divider">/</span></li>
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
                                            <h4 className="usa-sidenav-header"> <Link to="mhv-community">MHV Community</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="va-benefits">VA Benefits</Link></li>
                                                <li><Link to="mobile-apps">VA Mobile Apps</Link></li>
                                                <li><Link to="in-the-spotlight">In the Spotlight</Link></li>
                                                <li><Link className="usa-current " to="get-involved">Get Involved</Link></li>
                                                <li><Link to="subscribe">Subscribe</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_6iGjS1HfzaXH_"> <span id="p_56_INSTANCE_6iGjS1HfzaXH" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="user-actions">
                                                    <div className="print-action"> <span className> <Link to="javascript:_56_INSTANCE_6iGjS1HfzaXH_printPage();" className=" taglib-icon" id="_56_INSTANCE_6iGjS1HfzaXH_rjus__column1__0"> <img id="rjus__column1__0" src="mhv-portal-theme/images/common/print.png" alt lang /> <span className="taglib-text ">Print <span className="hide-accessible">Get Involved</span></span> </Link>
                                                    </span> </div>
                                                </div>
                                                <div className="journal-content-article">
                                                    <h2>Get Involved</h2>
                                                    <p>Join the thousands of Veterans who serve other Veterans in various
                                                      volunteer programs. Also find out how you can help with VA medical
                                                      research and development by participating in clinical trials, as well as
                      the Million Veterans Program.</p>
                                                    <p><img alt="female veteran volunteer with african americanveteran" className="pull-left" src="../../www.volunteer.va.gov/images/rotate_Volunteer_500x275.jpg" style={{ maxWidth: 175 }} /><Link to="http://www.volunteer.va.gov/" target="_blank">VA Voluntary Service</Link> - The Voluntary Service
                                                      (VAVS) was founded in 1946 to "serve those who served" while they are
                                                      cared for by VA health care facilities. Volunteers have given more than
                                                      11 million hours in service to America's Veterans. It is impossible to
                                                      calculate the amount of caring and sharing that these VAVS volunteers
                                                      provide to Veteran patients. VAVS volunteers are a priceless asset to
                      the Nation's Veterans and to the Department of Veterans Affairs. <Link to="http://www.volunteer.va.gov/index.asp" target="_blank"> Learn
                        how you can volunteer</Link>.</p>
                                                    <p><img alt="female veteran volunteer with african americanveteran" className="pull-left" src="../../www.research.va.gov/images/research-currents/feb16/Sharma-Blackman-sm.jpg" style={{ maxWidth: 175 }} /><Link to="http://www.research.va.gov/for_veterans/default.cfm" target="_blank">Clinical Trials &amp; Research</Link> - Today's VA
                                                      research is leading tomorrow's health care. Find out how VA research
                                                      serves those who have served our country, and how veterans nationwide
                                                      can partner with VA researchers. The National Institutes of Health also
                      offers listings of research activities that are <Link to="https://clinicaltrials.gov/ct2/results?term=veterans&recr=Open" target="_blank"> looking for Veteran participation </Link></p>
                                                    <p><img alt="million veteran program logo" className="pull-left" src="https://www.myhealth.va.gov/documents/25286/25834/mvp-map-update.jpg/c466218b-575f-4ee2-bde9-9091944f1db0?t=1465389968886" /><Link to="http://www.research.va.gov/MVP/default.cfm" target="_blank">Million Veterans Program</Link> - MVP has established
                                                      one of the world's largest research resources with genetic, military,
                                                      lifestyle, and health information. Researchers are getting closer to
                                                      answering important questions about how illnesses and injuries vary
                                                      among Veterans. These answers could lead to improved health care.
                                                      Consider joining the more than 500,000 Veterans who have already
                      volunteered.</p>
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
                                            <h4 className="usa-sidenav-header"> <Link to="mhv-community">MHV Community</Link> </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="va-benefits">VA Benefits</Link></li>
                                                <li><Link to="mobile-apps">VA Mobile Apps</Link></li>
                                                <li><Link to="in-the-spotlight">In the Spotlight</Link></li>
                                                <li><Link className="usa-current " to="get-involved">Get Involved</Link></li>
                                                <li><Link to="subscribe">Subscribe</Link></li>
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

export default GetInvolved;