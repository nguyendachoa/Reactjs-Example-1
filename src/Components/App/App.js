import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loginbar from '../Loginbar/Loginbar';
import {BrowserRouter as Router} from 'react-router-dom';
import RoutePath from '../RoutePath/RoutePath';

function App() {

  return (
      <Router>
        <div>
        <Header />
        <Loginbar />
        <div className="usa-overlay" />
        <RoutePath></RoutePath>
        <Footer />
        </div>
      </Router>
  );
}

export default App;
