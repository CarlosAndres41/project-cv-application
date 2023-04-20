import React, { Component } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import Summary from './components/Summary';
import Preview from './components/Preview';
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
                show: true,
            },
            work: {
                title: '',
                employer: '',
                city: '',
                country: '',
                start: '',
                end: '',
                desc: '',
                show: false,
            },
            education: {
                school: '',
                location: '',
                degree: '',
                field: '',
                start: '',
                end: '',
                show: false,
            },
            summary: {
                summary: '',
                show: false,
            },
            preview: {
                show: false,
            },
        };
    }

    structure = {
        personal: {
            back: null,
            next: 'work',
        },
        work: {
            back: 'personal',
            next: 'education',
        },
        education: {
            back: 'work',
            next: 'summary',
        },
        summary: {
            back: 'education',
            next: 'preview',
        },
    };

    handleChangePersonal = (e) => {
        let input = e.target.id;
        this.setState({
            personal: {
                ...this.state.personal,
                [input]: e.target.value,
            },
        });
    };

    handleChangeWork = (e) => {
        let input = e.target.id;
        this.setState({
            work: {
                ...this.state.work,
                [input]: e.target.value,
            },
        });
    };

    handleChangeEducation = (e) => {
        let input = e.target.id;
        this.setState({
            education: {
                ...this.state.education,
                [input]: e.target.value,
            },
        });
    };

    handleChangeSummary = (e) => {
        let input = e.target.id;
        this.setState({
            summary: {
                ...this.state.summary,
                [input]: e.target.value,
            },
        });
    };

    handleNext = (e) => {
        e.preventDefault();
        let current = e.target.dataset.current;
        let next = this.structure[current].next;
        this.setState({
            [current]: {
                ...this.state[current],
                show: false,
            },
            [next]: {
                ...this.state[next],
                show: true,
            },
        });
    };

    handleBack = (e) => {
        e.preventDefault();
        let current = e.target.dataset.current;
        let back = this.structure[current].back;
        this.setState({
            [current]: {
                ...this.state[current],
                show: false,
            },
            [back]: {
                ...this.state[back],
                show: true,
            },
        });
    };

    render() {
        return (
            <div className='main'>
                <Header />
                {this.state.personal.show && (
                    <PersonalInfo
                        handler={this.handleChangePersonal}
                        next={this.handleNext}
                    />
                )}
                {this.state.work.show && (
                    <WorkHistory
                        handler={this.handleChangeWork}
                        next={this.handleNext}
                    />
                )}
                {this.state.education.show && (
                    <Education
                        handler={this.handleChangeEducation}
                        next={this.handleNext}
                    />
                )}
                {this.state.summary.show && (
                    <Summary
                        handler={this.handleChangeSummary}
                        next={this.handleNext}
                    />
                )}
                {this.state.preview.show && (
                    <Preview data={this.state} next={this.handleNext} />
                )}
            </div>
        );
    }
}

export default App;
