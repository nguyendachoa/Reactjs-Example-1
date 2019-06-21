import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pharmacy extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first"><Link to="/">My HealtheVet</Link><span className="divider">/</span></li>
                            <li className="active last"><Link to="pharmacy">Pharmacy</Link><span className="divider">/</span></li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-first usa-width-three-fourths usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-first" id="layout-column_column-1">
                                    <div className="portlet-boundary portlet-boundary_usersegmentcontentdisplay_WAR_contenttargetingweb_ portlet-static portlet-static-end portlet-borderless user-segment-content-display-portlet " id="p_p_id_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_PqtBeHnVRwwT_">
                                        <span id="p_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_PqtBeHnVRwwT" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="content-container ">
                                                    <div className="full-content" id="_usersegmentcontentdisplay_WAR_contenttargetingweb_INSTANCE_PqtBeHnVRwwT_FullContent0">
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
                            <aside className="portlet-column portlet-column-last usa-width-one-fourth usa-layout-docs-sidenav" id="column-2">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-last" id="layout-column_column-2">
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_iitYGWcUqEGc_"> <span id="p_56_INSTANCE_iitYGWcUqEGc" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article"> <Link className="btn btn-primary pull-right" to="web/myhealthevet/va-allergies-adverse-reactions">Add/Edit
                      Allergies and Adverse Reactions</Link> </div>
                                                <div className="entry-links"> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-boundary portlet-boundary_56_ portlet-static portlet-static-end portlet-borderless portlet-journal-content " id="p_p_id_56_INSTANCE_ck6bUBZZI7sB_"> <span id="p_56_INSTANCE_ck6bUBZZI7sB" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <div className="journal-content-article">
                                                    <h3>Pharmacy Highlights</h3>
                                                    <ul>
                                                        <li><Link to="/ss20170126-good-news-va-medication-copayments" target="_blank">Copayment Changes</Link></li>
                                                        <li><Link to="http://www.pbm.va.gov/apps/VANationalFormulary/" target="_blank">Medications Lookup</Link></li>
                                                        <li><Link to="http://www.pbm.va.gov/PBM/vacenterformedicationsafety/vacenterformedicationsafetyprescriptionsafety.asp" target="_blank">Old Rx Disposal</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="entry-links"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                    <section className="mhv-row-2 cardnavBottom usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout usa-grid">
                            <div className="portlet-boundary portlet-boundary_mhvcardnavigation_WAR_mhvnavigationportlet_ portlet-static portlet-static-end portlet-borderless mhv-card-navigation-portlet " id="p_p_id_mhvcardnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvCardnavBottom_"> <span id="p_mhvcardnavigation_WAR_mhvnavigationportlet_INSTANCE_mhvCardnavBottom" />
                                <div className="portlet-borderless-container">
                                    <div className="portlet-body">
                                        <div id="mhvCardNavigation">
                                            <div className="nav-menu nav-menu-style-none">
                                                <ul className="layouts level-1">
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="refill-prescriptions">
                                                        <h3 className="card-nav-title">Refill VA Prescriptions</h3><span className="card-nav-description">Most of your active prescriptions
                          filled by a VA Pharmacy are viewable in this section.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="prescriptions-history">
                                                        <h3 className="card-nav-title">VA Prescription History</h3><span className="card-nav-description">Your active and
                                                          expired/discontinued prescriptions filled by a VA Pharmacy are
                                                          shown in this section. Prescriptions that have been placed On
                                                          Hold by the pharmacy or your provider may also appear in this
                          list.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="prescription-tracking">
                                                        <h3 className="card-nav-title">VA Prescription Tracking</h3><span className="card-nav-description">View your VA prescription packages
                                                          the VA Mail Order Pharmacy filled and mailed in the last 30
                          days.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="my-complete-medications-list">
                                                        <h3 className="card-nav-title">My Medications List</h3><span className="card-nav-description">This list displays both VA-issued
                                                          prescriptions in your electronic health record at VA Medical
                                                          Centers; and medications, prescriptions and supplements YOU
                                                          entered in your My HealtheVet self-entered Medications
                          List.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="va-medications-list">
                                                        <h3 className="card-nav-title">VA Medications List</h3><span className="card-nav-description">This list displays VA-issued
                                                          prescriptions in your electronic health record at VA Medical
                          Centers.</span>
                                                    </Link></li>
                                                    <li className="card-nav-li"><Link className="card-nav-link" to="self-entered-medications-supplements">
                                                        <h3 className="card-nav-title">Self-Entered Medications + Supplements
                        </h3><span className="card-nav-description">Self-enter prescriptions,
                                                          over-the-counter products, and herbals/supplements YOU entered
                          in your My HealtheVet self-entered Medications List.</span>
                                                    </Link></li>
                                                </ul><br className="clearboth" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portlet-dropzone empty portlet-column-content portlet-column-content-only" id="layout-column_column-3" />
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

export default Pharmacy;