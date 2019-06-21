import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Loginbar extends Component {


    render() {
        return (
            <div className="portlet-boundary portlet-boundary_58_ portlet-static portlet-static-end portlet-borderless portlet-login " id="p_p_id_58_INSTANCE_123567_"> <span id="p_58_INSTANCE_123567" />
                <div className="portlet-borderless-container">
                    <div className="portlet-body">
                        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                        <meta httpEquiv="Pragma" content="no-cache" />
                        <meta httpEquiv="Expires" content={0} /> <a name="p_58" />
                        {/* redirectQueryParams = ?redirect=/mhv-portal-web/home */}
                        <section id="mhv-welcome-bar-guest" className="usa-section">
                            <div className="usa-grid"> <span id="mhv-welcome-message-span" className="usa-width-one-half"> Login to
            Manage Your Healthcare </span> <span id="mhv-login-button-span" className="usa-width-one-half mhv-login-register-buttons">
                                    <ul>
                                        <li><Link className="btn btn-success usa-button-big" id="mhv-header-login-button" to="user-login563c" >Login</Link></li>
                                        <li><Link className="btn btn-success usa-button-big" id="mhv-header-login-button" to="user-registration" >Register</Link></li>
                                    </ul>
                                </span> </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loginbar;