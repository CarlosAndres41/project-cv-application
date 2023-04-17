import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import './App.css';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Header />
                <PersonalInfo />
                <WorkHistory />
                <Education />
            </>
        );
    }
}

export default App;
