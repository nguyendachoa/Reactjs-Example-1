import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MedicalLibrary extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/home">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="research-health">Research Health</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="medical-library">Medical Library</Link><span className="divider">/</span></li>
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
                                            <h4 className="usa-sidenav-header"> <Link to="research-health">Research Health</Link>
                                            </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="healthy-living-centers">Healthy Living Centers</Link></li>
                                                <li><Link to="mental-health">Mental Health</Link></li>
                                                <li><Link className="usa-current " to="medical-library">Medical Library</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="portlet-dropzone empty portlet-column-content portlet-column-content-last" id="layout-column_column-2" />
                            </aside>
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_2F3DS0mQMPUI_"> <span id="p_56_INSTANCE_2F3DS0mQMPUI" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h2>Medical Library</h2>
                                                    <p>My HealtheVet provides two extensive, online medical libraries for you to
                      learn more about your health and stay healthy.</p>
                                                    <h2>Veterans Health Library</h2>
                                                    <p>The <Link to="../../www.veteranshealthlibrary.org/index" target="_blank">Veterans Health Library</Link> is designed for and
                                                      available to all Veterans, their family members and the public, no
                      matter where the Veteran receives care. It can:</p>
                                                    <ul>
                                                        <li>
                                                            <p>Help you learn about your health problems, medical tests and
                          treatments, and medications</p>
                                                        </li>
                                                        <li>
                                                            <p>Cover topics like wellness, heart and lung problems, diabetes,
                          mental health, senior health, and rehabilitation</p>
                                                        </li>
                                                        <li>
                                                            <p>Offer topics of special interest to Veterans, like Agent Orange,
                                                              posttraumatic stress disorder (PTSD), women Veterans health,
                                                              combat-related cold injury and traumatic brain injury (TBI), and
                          others</p>
                                                        </li>
                                                        <li>
                                                            <p>Provide a rich variety of trusted and consistent health
                                                              information for Veterans, including attractive and colorful
                                                              'Go-To Guides,' a library of more than 150 videos and more than
                                                              1,500 printable health and medication information sheets in both
                          English and Spanish.</p>
                                                        </li>
                                                    </ul>
                                                    <h3>MedlinePlus</h3>
                                                    <p><Link to="https://www.medlineplus.gov/" target="_blank">Medline Plus</Link>
                                                        is the online resource from the National Library of Medicine located at
                                                        the National Institutes of Health. It&nbsp;offers a wealth of
                                                        information on health promotion, conditions, and treatments to help you
                      take control of your own health.</p>
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
                                            <h4 className="usa-sidenav-header"> <Link to="research-health">Research Health</Link>
                                            </h4>
                                            <ul className="usa-sidenav-list">
                                                <li><Link to="healthy-living-centers">Healthy Living Centers</Link></li>
                                                <li><Link to="mental-health">Mental Health</Link></li>
                                                <li><Link className="usa-current " to="medical-library">Medical Library</Link></li>
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

export default MedicalLibrary;