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

    render() {
        return (
            <div className='main'>
                <Header />
                {this.state.personal.show && (
                    <PersonalInfo handler={this.handleChangePersonal} />
                )}
                {this.state.work.show && (
                    <WorkHistory handler={this.handleChangeWork} />
                )}
                {this.state.education.show && (
                    <Education handler={this.handleChangeEducation} />
                )}
                {this.state.summary.show && (
                    <Summary handler={this.handleChangeSummary} />
                )}
                {this.state.preview.show && <Preview data={this.state} />}
            </div>
        );
    }
}

export default App;
