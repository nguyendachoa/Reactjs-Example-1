import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VaBenefits extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="mhv-community">MHV Community</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="va-benefits">VA Benefits</Link><span className="divider">/</span></li>
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
                                                <li><Link className="usa-current " to="va-benefits">VA Benefits</Link>
                                                    <ul className="usa-sidenav-sub_list">
                                                        <li><Link to="va-health-benefits">VA Health Benefits</Link></li>
                                                        <li><Link to="other-va-benefits">Other VA Benefits</Link></li>
                                                        <li><Link to="va-forms">VA Forms</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="mobile-apps">VA Mobile Apps</Link></li>
                                                <li><Link to="in-the-spotlight">In the Spotlight</Link></li>
                                                <li><Link to="get-involved">Get Involved</Link></li>
                                                <li><Link to="subscribe">Subscribe</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_YHSe4cZjBNZ9_"> <span id="p_56_INSTANCE_YHSe4cZjBNZ9" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h2>VA Benefits</h2>
                                                    <p>The VA is committed to providing excellence in all the benefits and
                                                      services we offer to veterans. Partnering with veterans to help them
                                                      attain their optimum health, assuring that veterans receive benefits
                                                      they are entitled to, and honoring veterans with a final resting place
                                                      and lasting memorials that commemorate their service to this Nation -
                                                      this is the embodiment of the VA mission. Learn more about your VA
                                                      Health Benefits, and your Non-Health Benefits. You can also download
                      important Forms including your eligibility and DD-214.</p>
                                                    <p>If you have a question about your VA benefits, search the <Link to="https://iris.custhelp.com/app/answers/detail/a_id/1703" target="_blank">VA Frequently Asked Questions</Link>, or visit the <Link to="https://iris.custhelp.com/app/answers/detail/a_id/1703" target="_blank">Contact the VA</Link> page for a list of toll-free
                      numbers.</p>
                                                    <p><Link to="va-health-benefits">VA Health Benefits</Link>
                                                        - The Veterans Health Administration (VHA) provides a broad spectrum of
                                                        medical, surgical, and rehabilitative care to veterans. Our goal is to
                                                        share information about these benefits and services to make it as easy
                      as possible for you to receive the care you need.</p>
                                                    <ul>
                                                        <li><Link to="dependent-benefits">Dependent
                          Benefits</Link></li>
                                                        <li><Link to="rehabilitation">Rehabilitation</Link>
                                                        </li>
                                                    </ul>
                                                    <p><Link to="http://explore.va.gov/" target="_blank">Other VA Benefits
                        (Non-Health Benefits)</Link> - Access information on non-health related
                                                      benefits that include education, home loans, burial and memorial
                      benefits, life insurance and more.</p>
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
                                                <li><Link className="usa-current " to="va-benefits">VA Benefits</Link>
                                                    <ul className="usa-sidenav-sub_list">
                                                        <li><Link to="va-health-benefits">VA Health Benefits</Link></li>
                                                        <li><Link to="other-va-benefits">Other VA Benefits</Link></li>
                                                        <li><Link to="va-forms">VA Forms</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="mobile-apps">VA Mobile Apps</Link></li>
                                                <li><Link to="in-the-spotlight">In the Spotlight</Link></li>
                                                <li><Link to="get-involved">Get Involved</Link></li>
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

export default VaBenefits;