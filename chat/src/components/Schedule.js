import React, {Component} from 'react';
import axios from 'axios';
import './Sched.css';
import {Clock, DayWeek, Month, DayMonth, Year, TvGuide, Networks} from "./SchedComp";
import tvSchedule from './API';

class Schedule extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            dateInput: "",
            hour: new Date().getHours(), 
            arr: [], 
            userInput: ""
        }
    }

    // Handles date input by user. Gets US TV schedule for day specified.
    handleDateInput = () => {
        const {userInput} = this.state;
        axios.get(`http://api.tvmaze.com/schedule?date=${this.state.userInput}`)
        .then( res => {
            console.log("res:", res);
            this.setState({
                arr: res.data,
                dateInput: userInput
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount = () => {
        this.handleDateInput();
    }

    // Increase schedule time by 1 hour. Stops at midnight.
    handleMoreTime = () => {
        const {hour} = this.state;
        if (hour === 23) {
            this.setState({
                hour: hour
            })
        } else {
            this.setState({
                hour: hour + 1
            })
        }
        
    }

    // Decreases schedule time by 1 hour. Stops at mignight.
    handleLessTime = () => {
        const {hour} = this.state;
        if (hour === 0) {
            this.setState({
                hour: hour
            })
        } else {
            this.setState({
                hour: hour - 1
            });
        }
    }

    // Handles date input by user.
    handleUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    // Resets the schedule to the current day.
    handleReset = (e) => {
        axios.get(`http://api.tvmaze.com/schedule`)
        .then( res => {
            console.log("res:", res);
            this.setState({
                arr: res.data,
                hour: new Date().getHours(),
                dateInput: "",
                userInput: ""
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        const {date, arr, hour, dateInput, userInput} = this.state;
        return (
            <div id="home">
                <h1>TV Schedule</h1>
                {/* Today's date and time. */}
                <div id="clock">
                    {/* Today is
                    <DayWeek />{","}
                    <Month />
                    <DayMonth />{","}
                    <Year /> */}
                    <Clock date={date}/>
                </div>

                {/* <table>
                    <tbody>
                    <tr>
                        <td>Network</td>
                        <td>Current Hour</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{hour}</td>
                    </tr>
                    </tbody>
                </table> */}
                
                {/* <Networks arr={arr} />
                <ul id="two">Shows for today
                    {arr.map(el => 
                    <li key={el.id}>{el.show.name},{" "}
                        {el.show.network ? el.show.network.name : "n/a"},{" "}
                        {el.airtime}</li>)}
                </ul>  */}

                <p></p>

                {/* TV schedule for the US. Displays new episodes only (no reruns). 
                Displays shows in one hour blocks of time. */}
                <TvGuide 
                    hour={hour} 
                    arr={arr} 
                    dateInput={dateInput}
                    moreTime={this.handleMoreTime}
                    lessTime={this.handleLessTime} 
                    handleDateInput={this.handleDateInput} 
                    handleReset={this.handleReset} 
                    handleUserInput={this.handleUserInput}
                    userInput={userInput} />

            </div>
        )
    }
}

export default Schedule;