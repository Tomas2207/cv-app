import './App.css';

import React, { Component } from 'react';
import GeneralForm from './components/GeneralForm';
import EducationForm from './components/EducationForm';
import WorkForm from './components/WorkForm';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>CV</h1>
          <GeneralForm />
          <EducationForm />
          <WorkForm />
        </div>
      </div>
    );
  }
}

export default App;
