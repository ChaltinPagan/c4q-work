import React, {Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import All from './All';
import Schools from './Schools';
import Subjects from './Subjects';
import Search from './Search';

class Teachers extends Component {
    constructor() {
        super();
        this.state = {
            teachers: [],
            selectSubject: "",
            search: "",
            submitSearch: ""
        }
    }

    componentDidMount() {
        fetch('/teachers/all')
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            this.setState({ teachers: data })}
          );
      }

    renderAll = () => {
        const {teachers} = this.state;
        return (
            <All teachers={teachers} />
        )
    }

    renderSchools = () => {
        const {teachers} = this.state;
        return (
            <Schools teachers={teachers}/>
        )
    }

    handleSubjects = (e) => {
        this.setState({
            selectSubject: e.target.value
        })
    }
    renderSubjects = () => {
        const {teachers, selectSubject} = this.state;
        //let subjects = [""].concat.teachers.slice(0);
        
        return (
            <Subjects list={teachers} 
            onChange={this.handleSubjects}
            subj={selectSubject}/>
        )
    }

    handleSearch = (e) => {
        // console.log("search:", this.state.search)
        this.setState({
            search: e.target.value
        })
    }

    handleSearchSubmit = () => {
        const { search } = this.state;
        console.log("search:", search)
        this.setState({
            submitSearch: search
        })
    }
        
    renderSearch = () => {
        const {teachers, search, submitSearch} = this.state;
        return (
            <Search teachers={teachers}
            onChange={this.handleSearch} 
            onClick={this.handleSearchSubmit}
            search={search}
            submitSearch={submitSearch} />
        )
    }

    render() {
        return (
            <div>
                <Route exact path="/teachers" render={this.renderAll} />
                <Route path="/teachers/schools" render={this.renderSchools} />
                <Route path="/teachers/subjects" render={this.renderSubjects} />
                <Route path="/teachers/search" render={this.renderSearch} />
            </div>
        )
    }
}

export default Teachers;