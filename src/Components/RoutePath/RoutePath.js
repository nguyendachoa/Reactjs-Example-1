import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Body from '../Body/Body';
import About from '../Header/About/About';
import Contact from '../Header/Contact/Contact';
import GetCare from '../Header/GetCare/GetCare';
import CareGivers from '../Header/GetCare/CareGivers/CareGivers';
import TreamentFacilities from '../Header/GetCare/TreamentFacilities/TreamentFacilities';
import MyCoverage from '../Header/GetCare/MyCoverage/MyCoverage';
import HealthCalendar from '../Header/GetCare/HealthCalendar/HealthCalendar';
import PersonalInformation from '../Header/PersonalInformation/PersonalInformation';
import MyProfile from '../Header/PersonalInformation/MyProfile/MyProfile';
import DownloadMyData from '../Header/PersonalInformation/DownloadMyData/DownloadMyData';
import ChangePassword from '../Header/PersonalInformation/ChangePassword/ChangePassword';
import InCaseOfEmergency from '../Header/PersonalInformation/InCaseOfEmergency/InCaseOfEmergency';
import MyAccount from '../Header/PersonalInformation/MyAccount/MyAccount';
import Pharmacy from '../Header/Pharmacy/Pharmacy';
import RefillVaPrescriptions from '../Header/Pharmacy/RefillVaPrescriptions/RefillVaPrescriptions';
import VaPreHis from '../Header/Pharmacy/VaPreHis/VaPreHis';
import VaPreTra from '../Header/Pharmacy/VaPreTra/VaPreTra';
import MyMedList from '../Header/Pharmacy/MyMedList/MyMedList';
import VaMedList from '../Header/Pharmacy/VaMedList/VaMedList';
import SeftEntered from '../Header/Pharmacy/SeftEntered/SeftEntered';
import TrackHealth from '../Header/TrackHealth/TrackHealth';
import Vitals from '../Header/TrackHealth/Vitals/Vitals';
import LabsTest from '../Header/TrackHealth/LabsTest/LabsTest';
import HealthHis from '../Header/TrackHealth/HealthHis/HealthHis';
import Journals from '../Header/TrackHealth/Journals/Journals';
import HealtheLiving from '../Header/TrackHealth/HealtheLiving/HealtheLiving';
import ReseachHealth from '../Header/ResearchHealth/ReseachHealth';
import HealthyLivingCenter from '../Header/ResearchHealth/HealthyLivingCenters/HealthyLivingCenter';
import MentalHeath from '../Header/ResearchHealth/MentalHeath/MentalHeath';
import MedicalLibrary from '../Header/ResearchHealth/MedicalLibrary/MedicalLibrary';
import MHVCommynity from '../Header/MHVCommunity/MHVCommynity';
import VaBenefits from '../Header/MHVCommunity/VaBenefits/VaBenefits';
import VaMobileApps from '../Header/MHVCommunity/VaMobileApps/VaMobileApps';
import InTheSpotlight from '../Header/MHVCommunity/InTheSpotlight/InTheSpotlight';
import GetInvolved from '../Header/MHVCommunity/GetInvolved/GetInvolved';
import Subscribe from '../Header/MHVCommunity/Subscribe/Subscribe';
import login from '../Loginbar/login';
import register from '../Loginbar/register';
import MyLinks from '../Header/PersonalInformation/MyLinks/MyLinks';
import accountactivityhistory from '../Header/PersonalInformation/accountactivityhistory/accountactivityhistory';
import myaccounttype from '../Header/PersonalInformation/myaccounttype/myaccounttype';
import manageaccountaccess from '../Header/PersonalInformation/manageaccountaccess/manageaccountaccess';


class RoutePath extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Body} />
                <Route path="/about-mhv" component={About} />
                <Route path="/contact-mhv" component={Contact} />
                <Route path="/get-care" component={GetCare} />
                <Route path="/care-givers" component={CareGivers} />
                <Route path="/treatment-facilities" component={TreamentFacilities} />
                <Route path="/my-coverage" component={MyCoverage} />
                <Route path="/health-calendar" component={HealthCalendar} />
                <Route path="/personal-information" component={PersonalInformation} />
                <Route path="/profiles" component={MyProfile} />
                <Route path="/download-my-data" component={DownloadMyData} />
                <Route path="/change-password" component={ChangePassword} />
                <Route path="/in-case-of-emergency" component={InCaseOfEmergency} />
                <Route path="/account" component={MyAccount} />
                <Route path="/my-links" component={MyLinks} />
                <Route path="/pharmacy" component={Pharmacy} />
                <Route path="/refill-prescriptions" component={RefillVaPrescriptions} />
                <Route path="/prescriptions-history" component={VaPreHis} />
                <Route path="/prescription-tracking" component={VaPreTra} />
                <Route path="/my-complete-medications-list" component={MyMedList} />
                <Route path="/va-medications-list" component={VaMedList} />
                <Route path="/self-entered-medications-supplements" component={SeftEntered} />
                <Route path="/track-health" component={TrackHealth} />
                <Route path="/vitals" component={Vitals} />
                <Route path="/labs-tests" component={LabsTest} />
                <Route path="/health-history" component={HealthHis} />
                <Route path="/journals" component={Journals} />
                <Route path="/healtheliving-assessment" component={HealtheLiving} />
                <Route path="/research-health" component={ReseachHealth} />
                <Route path="/healthy-living-centers" component={HealthyLivingCenter} />
                <Route path="/mental-health" component={MentalHeath} />
                <Route path="/medical-library" component={MedicalLibrary} />
                <Route path="/mhv-community" component={MHVCommynity} />
                <Route path="/va-benefits" component={VaBenefits} />
                <Route path="/mobile-apps" component={VaMobileApps} />
                <Route path="/in-the-spotlight" component={InTheSpotlight} />
                <Route path="/get-involved" component={GetInvolved} />
                <Route path="/subscribe" component={Subscribe} />
                <Route path="/user-login563c" component={login} />
                <Route path="/user-registration" component={register} />
                <Route path="/account-activity-history" component={accountactivityhistory} />
                <Route path="/my-account-type" component={myaccounttype} />
                <Route path="/manage-account-access" component={manageaccountaccess} />
            </div>
        );
    }
}

export default RoutePath;
