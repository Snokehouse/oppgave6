import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainLayout from '../Struktur/Layout/MainLayout';
import RegistrereBruker from '../Struktur/RegistrereBruker/index';
import OpprettePoll from '../Struktur/OpprettePoll/index';
import TaPoll from '../Struktur/TaPoll/index';
import NoMatch from '../Struktur/NoMatch/index';

const Routes = () => {
  const [inlogget, setInnlogget] = useState(false);
  const [inloggetData, setInnloggetData] = useState([]);

  return (
    <Router>
      {/* må sjekke og fikse denne så vi kan bruke component styling */}
      <MainLayout>
        <Switch>
          <Route path="/home">
            <TaPoll inlogget={inlogget} inloggetData={inloggetData} />
          </Route>
          <Route exact path="/create">
            <OpprettePoll inlogget={inlogget} inloggetData={inloggetData} />
          </Route>
          <Route exact path="/signup">
            <RegistrereBruker
              inlogget={inlogget}
              setInnlogget={setInnlogget}
              setInnloggetData={setInnloggetData}
            />
          </Route>
          <Redirect exact from="/" to="/home" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
};
export default Routes;
