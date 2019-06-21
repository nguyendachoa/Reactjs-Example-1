import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <main id="main-content" className="usa-section usa-content usa-layout-docs mhv-padding-top-bottom">
                <div className="usa-grid">
                    <nav id="breadcrumbs">
                        <ul aria-label="Breadcrumb" className="breadcrumb breadcrumb-horizontal">
                            <li className="first"><a href="web/myhealthevet/home.html">My HealtheVet</a><span className="divider">/</span></li>
                            <li className="active last"><a href="user-login.html">User Login</a><span className="divider">/</span></li>
                        </ul>
                    </nav>
                </div>
                <div className="portlets-go-here usa-grid usa-section mhv-padding-top-bottom">
                    <section className="mhv-row-1 usa-grid-full usa-section mhv-padding-top-bottom">
                        <div className="portlet-layout">
                            <div className="portlet-column portlet-column-only usa-layout-docs-main_content" id="column-1">
                                <div className="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
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
                          temporary situation. You may wish to <a href="../../www.va.gov/find-locations/index.html" target="_blank">telephone your VA Medical Center</a> and
                          confirm any upcoming appointments.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="read-entries"> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portlet-boundary portlet-boundary_58_ portlet-static portlet-static-end portlet-borderless portlet-login " id="p_p_id_58_"> <span id="p_58" />
                                        <div className="portlet-borderless-container">
                                            <div className="portlet-body">
                                                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                                                <meta httpEquiv="Pragma" content="no-cache" />
                                                <meta httpEquiv="Expires" content={0} /> <a name="p_58" />
                                                {/* redirectQueryParams = ?redirect=/mhv-portal-web/user-login */}
                                                <div className="usa-grid-full">
                                                    <section id="mhv-login-forms" className="usa-width-one-half">
                                                        {/* <h2>Choose Your Login</h2> <h5>By selecting the checkbox, you are agreeing with the System Use Warning Notice.</h5> <h5>If you do not agree, then you will not be able to proceed with login as the login options will remain disabled.</h5> <div class="control-group"> <div class="controls"> <span class="warningAgreeSpan"> <input type="checkbox" name="warningAgreeCheckbox" id="warningAgreeCheckbox" /> <label for="warningAgreeCheckbox">I Agree</label> </span> <a href="/mhv-portal-web/home" class="btn btn-secondary btn-disagree">I Do Not Agree</a> </div> </div> */}
                                                        {/* @vhaisbcheruh - 479886 - Link to reset password on 5th attempt error message box is incorrect */}
                                                        {/* @vhaisbcheruh - 511724 - Revise the alert message to reflect that the Help Desk cannot reset the password of a frozen account */}
                                                        {/* @vhaisbcheruh - 590730 - Revise the alert message for a frozen account created for Jazz item 511724 */}
                                                        {/* @vhaisbcheruh - Jazz item #350199: Modify message that provides direction to user when temporary password has expired - Code for new approved message*/}
                                                        {/*@vhaisbcheruh - 478821 - user receives two error buttons on 5th attempt to login */}
                                                        {/* */}
                                                        {/* @vhaisbcheruh - Jazz item #350199: Modify message that provides direction to user when temporary password has expired- Comment existing code */}
                                                        {/* */}
                                                        <form action="https://www.myhealth.va.gov:443/mhv-portal-web/user-login?p_p_id=58&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_58_struts_action=%2Flogin%2Flogin" className="form usa-form " id="_58_fm" method="post" name="_58_fm" autoComplete="on"> <input name="_58_formDate" type="hidden" defaultValue={1560521042749} /> <input className="field" id="_58_saveLastPath" name="_58_saveLastPath" type="hidden" defaultValue="false" /> <input className="field" id="_58_redirect" name="_58_redirect" type="hidden" defaultValue="/mhv-portal-web/home" /> <input className="field" id="_58_doActionAfterLogin" name="_58_doActionAfterLogin" type="hidden" defaultValue="false" />
                                                            <div id="mhv-login-form" className="usa-section mhv-padding-top-bottom">
                                                                <fieldset className="fieldset ">
                                                                    <div className>
                                                                        <legend className="usa-drop_text"> Login to My HealtheVet
                              </legend> <span> or <a href="user-registration.html">create an
                                  account</a></span>
                                                                        {/* <label for="sign-in-username">My HealtheVet User ID</label> <input id="sign-in-username" name="login" type="text" autocapitalize="off" autocorrect="off" aria-required="true">

									<label for="sign-in-password">My HealtheVet Password</label>
									<input id="sign-in-password" name="password" type="password" aria-required="true">
									<p class="usa-form-note">
										<a title="Show password" href="javascript:void(0);"
											class="usa-show_password"
											aria-controls="sign-in-password">
											Show password</a>
									</p>
									*/}
                                                                        <div className="control-group input-text-wrapper">
                                                                            <label className="control-label" htmlFor="_58_loginField">
                                                                                My HealtheVet User ID
                                </label>
                                                                            <input className="field clearable" id="_58_loginField" name="_58_login" type="text" defaultValue="" /> </div>
                                                                        <div className="control-group input-text-wrapper"> <label className="control-label" htmlFor="_58_passwordField">
                                                                            My HealtheVet Password </label> <input className="field" id="_58_passwordField" name="_58_password" type="password" defaultValue="" autoComplete="off" /> </div> <a href="#" onclick="showPassword(); return false;" id="showCurrentPassword" className="show-password-toggle">Show</a> <span id="_58_passwordCapsLockSpan" style={{ display: 'none' }}>Caps Lock is on.</span>
                                                                        <h5>By clicking on the Login button below, you are
                                agreeing with the System Use Warning Notice.</h5>
                                                                        <input type="submit" defaultValue="Login" id="signInButton" className="btn btn-primary" />
                                                                        <p> <a href="forgot-user-id568b.html?action=new">Forgot
                                  User ID?</a> </p>
                                                                        <p> <a href="forgot-password568b.html?action=new">Forgot
                                  Password?</a> </p>
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                        </form>
                                                    </section>
                                                    <section id="sign-in-partner-forms" className="usa-width-one-half">
                                                        <div className="usa-section mhv-padding-top-bottom">
                                                            <fieldset className="fieldset ">
                                                                <div className>
                                                                    <legend className="usa-drop_text"> Or Use a Sign-in Partner
                            </legend>
                                                                    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: 400, borderTop: '1px solid #000000' }}>
                                                                        <iframe style={{ border: 'none' }} allowTransparency="false" width="100%" height="100%" align="left" title="Sign-in Partners" src="https://access.va.gov/accessva/widget?appId=mhv" scrolling="yes" frameBorder={0} marginWidth={0} marginHeight={0} /> </div>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                    </section>
                                                </div>
                                                <div className="usa-grid-full">
                                                    <section className="mhv-login-warning-banner">
                                                        <div className="system-use-notification-content">
                                                            <h2>System Use Warning Notice</h2>
                                                            <p>I understand that I am accessing a U.S. Government information
                                                              system (system) operated by the Department of Veterans Affairs
                          (VA).</p>
                                                            <p>I understand that as an authorized user I may only access
                                                              information to which I have the legal authority to view and use.
                                                              VA will monitor and record activity on this system to protect
                                                              the system and its information and may use that monitoring
                          information for official administrative or legal purposes.</p>
                                                            <p>I understand that unauthorized use of the system such as gaining
                                                              unauthorized access to data, changing data, causing harm to the
                                                              system or its data or misuse of My HealtheVet components is
                                                              prohibited and may result in criminal, civil, or administrative
                          penalties.</p>
                                                            <p>I also understand that VA can suspend or stop my use of this
                                                              system if VA suspects any unauthorized use of the system
                          attributable to my account has occurred.</p>
                                                            <p>By accessing this system, I hereby acknowledge the above and
                          consent to such monitoring.</p>
                                                            <p>Version 1.0: Updated May 2017</p>
                                                        </div>
                                                    </section>
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
                    <form action="#" id="hrefFm" method="post" name="hrefFm"> <span /> </form>
                </div>
            </main>

        );
    }
}

export default login;