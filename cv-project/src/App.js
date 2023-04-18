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
                profession: '',
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
                desc: [],
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

    handleChangePersonal = (e) => {
        let input = e.target.id;
        this.setState({
            personal: {
                [input]: e.target.value,
            },
        });
    };

    handleChangeWork = (e) => {
        let input = e.target.id;
        this.setState({
            work: {
                [input]: this.state.work[input].concat(e.target.value),
            },
        });
    };

    handleChangeEducation = (e) => {
        let input = e.target.id;
        this.setState({
            education: {
                [input]: this.state.work[input].concat(e.target.value),
            },
        });
    };

    render() {
        return (
            <>
                <Header />
                <PersonalInfo handler={this.handleChangePersonal} />
                <WorkHistory handler={this.handleChangeWork} />
                <Education handler={this.handleChangeEducation} />
                <Summary />
            </>
        );
    }
}

export default App;
