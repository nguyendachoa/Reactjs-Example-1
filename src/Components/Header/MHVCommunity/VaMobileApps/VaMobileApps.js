import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VaMobileApps extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first breadcrumb-truncate"><Link to="/home">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="current-parent"><Link to="mhv-community">MHV Community</Link><span className="divider">/</span></li>
                            <li className="active last breadcrumb-truncate"><Link to="mobile-apps">VA Mobile Apps</Link><span className="divider">/</span></li>
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
                                                <li><Link className="usa-current " to="mobile-apps">VA Mobile Apps</Link></li>
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
                          temporary situation. You may wish to <Link to="../../www.va.gov/find-locations/index" target="_blank">telephone your VA Medical Center</Link> and
                          confirm any upcoming appointments.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="read-entries"> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_G6EFdsHDg5GW_"> <span id="p_56_INSTANCE_G6EFdsHDg5GW" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h2>VA Mobile Apps</h2>
                                                    <p>VA offers a variety of health-related mobile apps for Veterans. Many can
                                                      be downloaded, and others are mobile-friendly websites. Veterans who use
                                                      My HealtheVet will find some of the most popular ones listed below. A
                      full and detailed listing with details is available on the <Link to="../../mobile.va.gov/appstore/veterans">VA&nbsp;App
                        Store</Link><span style={{ textAlign: 'center', fontSize: '12pt' }}>.</span>
                                                    </p>
                                                    <p>&nbsp;</p>
                                                    <div className="row-fluid">
                                                        <div className="span8">
                                                            <div className="call-out-box">
                                                                <h3 style={{ textAlign: 'center' }}><span style={{ textAlign: 'center' }}>Featured Mobile App</span>
                                                                </h3>
                                                                <p><Link to="https://mobile.va.gov/app/ptsd-coach" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/PTSD-_1024x1024.png/PTSD-_1024x1024e8b2.png?t=1533760864444" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link>
                                                                </p>
                                                                <p><Link to="https://mobile.va.gov/app/ptsd-coach" target="_blank">PTSD Coach</Link> provides information
                                                                  about PTSD and a self-assessment. It has educational tools
                            that help manage PTSD.</p>
                                                                <p>&nbsp;</p>
                                                            </div>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/act-coach" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/ACT_Coach_1024x1024.png/ACT_Coach_1024x1024a1b3.png?t=1533760374941" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />ACT
                            Coach</Link><span style={{ fontSize: '1.7rem' }}> offers tools for
                                                                Veterans who are in Acceptance and Commitment Therapy
                            learning to deal with unpleasant experiences.&nbsp;</span>
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            <p><img alt src="documents/12612/987818518/Burn_Pit%2b1024x1024.png/Burn_Pit%201024x102493ca.png?t=1533831389013" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />
                                                            </p>
                                                            <p><Link to="https://mobile.va.gov/app/burn-pit-registry" target="_blank">Airborne Hazards and Open Burn Pit
                            Registry</Link>&nbsp;is an online database on airborne hazards
                                                              for Veterans exposed during conflicts in Iraq, Afghanistan as
                          well as during the Gulf War.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/anger-and-irritability-management-skills-aims" style={{ outline: 0, fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/AIMS-_1024x1024.png/AIMS-_1024x1024edf6.png?t=1533832291946" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link>
                                                            </p>
                                                            <p><Link to="https://mobile.va.gov/app/anger-and-irritability-management-skills-aims" style={{ backgroundColor: 'rgb(255, 255, 255)' }} target="_blank">AIMS</Link>&nbsp;offers education about anger
                                                              and&nbsp;opportunities for finding support. It creates an anger
                          management plan and has tools to manage reactions.&nbsp;</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/annie-app-veterans" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/0/Annie.png/Annie3d3d.png?t=1533744349808" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link>
                                                            </p>
                                                            <p><Link to="https://mobile.va.gov/app/annie-app-veterans" target="_blank">Annie</Link> provides automated text messages
                                                              to promote self-care for Veterans enrolled in VA health
                                                              care.&nbsp;It&nbsp;can also send Veterans messages from their
                          local VA medical facility.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/cbt-i-coach" target="_blank"><img alt src="documents/12612/987818518/CBTi_1024x1024.png/CBTi_1024x1024a25d.png?t=1533760529303" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />CBT-i
                            Coach</Link> is&nbsp;for people who are engaged in Cognitive
                                                              Behavioral Therapy for Insomnia. It helps Veterans develop
                          positive sleep routines&nbsp;and improve sleep environments.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/cpt-coach" target="_blank"><img alt src="documents/12612/0/VA-Mobile-Health-CPT-COACH-App-Icons-180.png/VA-Mobile-Health-CPT-COACH-App-Icons-180cbbc.png?t=1533744899388" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />CPT
                            Coach</Link> contains support materials for Cognitive
                                                              Processing Therapy to help Veterans manage post-traumatic stress
                          disorder.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/exposure-ed" target="_blank"><img alt="Exposure Ed App" src="documents/12612/0/Exposure-Ed-Logo-Border-PNG.png/Exposure-Ed-Logo-Border-PNGc4e2.png?t=1547132216161" style={{ width: 90, height: 90, marginRight: 10, marginLeft: 10, float: 'left' }} />Exposure
                            Ed</Link>&nbsp;is designed to answer questions about
                                                              military-related exposures and exposure-related benefits and
                          services.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/mindfulness-coach-2" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/Mindfulness-Coach-1024x1024.png/Mindfulness-Coach-1024x10247544.png?t=1533760616460" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link><Link to="https://mobile.va.gov/app/mindfulness-coach" target="_blank">Mindfulness Coach</Link> offers exercises,
                                                              information, and a tracking log to help practice mindfulness.
                        </p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/mindfulness-coach-2" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/Mindfulness-Coach-1024x1024.png/Mindfulness-Coach-1024x10247544.png?t=1533760616460" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />Mindfulness
                            Coach 2</Link><span style={{ fontSize: '1.7rem' }}> provides a
                                                                self-guided training program designed to help Veterans
                            understand and adopt a simple mindfulness practice.</span>
                                                            </p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/mood-coach" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/Mood_Coach-_1024x1024.png/Mood_Coach-_1024x10245271.png?t=1533760686817" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link>
                                                            </p>
                                                            <p><Link to="https://mobile.va.gov/app/mood-coach" target="_blank">Mood Coach</Link> helps Veterans learn and
                                                              practice Behavioral Activation through positive activities. It's
                          designed to boost the Veterans mood.&nbsp;</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/move-coach" target="_blank"><img alt src="documents/12612/987818518/Move_Coach-_1024x1024.png/Move_Coach-_1024x102455c8.png?t=1533760752653" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />MOVE!
                            Coach</Link> allows Veterans to monitor, track, and receive
                                                              feedback on progress with exercise, diet, and weight loss goals.
                        </p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/moving-forward" target="_blank"><img alt src="documents/12612/0/VA-Mobile-Health-MOVING-FORWARD-App-Icons-180.png/VA-Mobile-Health-MOVING-FORWARD-App-Icons-180e15e.png?t=1533744954569" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />Moving
                            Forward</Link> teaches problem-solving skills to overcome
                                                              obstacles and deal with stress. It's helpful for returning to
                          civilian life, balancing family, and coping.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/parenting2go" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/Parenting-_1024x1024.png/Parenting-_1024x1024baa2.png?t=1533760829458" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link>
                                                            </p>
                                                            <p><Link to="https://mobile.va.gov/app/parenting2go" target="_blank">Parenting2Go</Link> provides tools to
                                                              strengthen parenting skills. It addresses the challenges that
                                                              come with parenting and offers access to additional resources.
                        </p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/ptsd-coach" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/PTSD-_1024x1024.png/PTSD-_1024x1024e8b2.png?t=1533760864444" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link>
                                                            </p>
                                                            <p><Link to="https://mobile.va.gov/app/ptsd-coach" target="_blank">PTSD Coach</Link> provides information about
                                                              PTSD and a self-assessment. It has educational tools that help
                          manage PTSD.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/revamp-veterans" target="_blank"><img alt src="documents/12612/987818518/REVAMP_VET_CHICLET_png.png/REVAMP_VET_CHICLET_png4be6.png?t=1533831349939" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />REVAMP</Link>
                                                                pairs with your Continuous Positive Airway Pressure (CPAP)
                                                                machine and allows you&nbsp;to track your sleep data and send
                          Secure Messages.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="http://mobile.va.gov/app/stay-quit-coach" target="_blank"><img alt src="documents/12612/0/22.png/22d7d0.png?t=1541077343097" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} />Stay
                            Quit Coach</Link> creates a tailored quit plan to stop smoking.
                                                              It provides tools to help with urges to smoke, and messages to
                          help you stay smoke-free.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/va-online-scheduling" style={{ backgroundColor: 'rgb(225, 243, 248)' }} target="_blank"><img alt src="documents/12612/0/VA.png/VA92f7.png?t=1533743749471" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link><Link to="http://mobile.va.gov/app/va-online-scheduling" target="_blank">VA Online Scheduling</Link> allows Veterans to
                                                              schedule VA appointments online if they have a My HealtheVet
                          Premium Account or DS Logon Premium Account.</p>
                                                            <p>&nbsp;</p>
                                                            <p><img alt src="documents/12612/0/11.png/110826.png?t=1541076649057" style={{ borderWidth: 0, borderStyle: 'solid', width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /><Link to="http://mobile.va.gov/app/va-video-connect" target="_blank">VA Video Connect</Link> brings together
                                                              Veterans with their health care team from anywhere. It allows
                                                              quick and easy health care access from any mobile or web-based
                          device.</p>
                                                            <p>&nbsp;</p>
                                                            <p><Link to="https://mobile.va.gov/app/vetchange" style={{ fontSize: '1.7rem', backgroundColor: 'rgb(255, 255, 255)' }} target="_blank"><img alt src="documents/12612/987818518/VetChange-_1024x1024.png/VetChange-_1024x102495e1.png?t=1533760986195" style={{ width: 85, height: 85, marginRight: 10, marginLeft: 10, float: 'left' }} /></Link>
                                                            </p>
                                                            <p><Link to="https://mobile.va.gov/app/vetchange" target="_blank">Vet
                            Change</Link> provides tools for cutting down or quitting
                                                              drinking. It has tools for managing stress and guidance to find
                          professional treatment.</p>
                                                            <p>&nbsp;</p>
                                                            <div>
                                                                <p className="call-out-box"><Link to="https://www.blogs.va.gov/VAntage/50532/vetext-system-transforming-vas-medical-scheduling-process/" target="_blank">VEText</Link> is not an app but a service
                                                                  that sends alerts to Veterans about upcoming VA
                            appointments.</p>
                                                            </div>
                                                            <p><strong>Read More</strong></p>
                                                            <p><Link to="https://mobile.va.gov/saving-va-mobile-app-home-screen" target="_blank">Saving a VA Web App to Your Smartphone or
                            Tablet</Link></p>
                                                            <p><Link to="../../mobile.va.gov/appstore/veterans" target="_blank">VA App Store</Link></p>
                                                            <hr />Updated April 22, 2019
                      </div>
                                                    </div>
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
                                                <li><Link className="usa-current " to="mobile-apps">VA Mobile Apps</Link></li>
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

export default VaMobileApps;