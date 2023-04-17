import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkHistory from './components/WorkHistory';
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
            </>
        );
    }
}

export default App;
