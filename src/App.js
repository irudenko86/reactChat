import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/Firebase.State';
import { SliderPage } from './pages/SliderPage';
import styled from 'styled-components';
import { ReduxPage } from './pages/ReduxPage';
import { ReduxPractice } from './pages/ReduxPractice';

const Styles = styled.div `
    a, .navbar-nav, .nav-link {
        color: #fff;
        font-weight: 700;
        &:hover {
            color: #F0EAD6;
            transition: all 2s ease-out;
        }
    }

    .navbar-brand {
      color: #F0EAD6;
    }

    .bg-primary {
      background-color: #212121 !important;
    }

    .active {
      font-weight: bold;
      color: #F0EAD6;
    }
`



function App() {
  return (
    <Styles>
      <FirebaseState>
        <AlertState>
          <BrowserRouter>
          <Navbar />
            <div className="container pt-4">
              <Alert />
              <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/about'}  component={About} />
                <Route path={'/slider-page'}  component={SliderPage} />
                <Route path={'/redux-page'}  component={ReduxPage} />
                <Route path={'/redux-practice'}  component={ReduxPractice} />
              </Switch>
            </div>
          </BrowserRouter>
        </AlertState>
      </FirebaseState>
    </Styles>
  );
}

export default App;
