import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
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
            </>
        );
    }
}

export default App;
