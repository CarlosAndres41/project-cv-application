import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Summary from './components/Summary';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            personal: {
                fName: '',
                lName: '',
                city: '',
                post: '',
                country: '',
                phone: '',
                email: '',
            },
            work: {
                title: [],
                employer: [],
                city: [],
                country: [],
                start: [],
                end: [],
            },
            education: {
                school: [],
                location: [],
                degree: [],
                field: [],
                start: [],
                end: [],
            },
            summary: {
                desc: '',
            },
        };
    }

    render() {
        return (
            <>
                <Header />
                <PersonalInfo />
                <WorkHistory />
                <Education />
                <Summary />
            </>
        );
    }
}

export default App;
