import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export const TimeNow = () => {
    //Cannot take hour as props from Schedule.js because Schedule.js contains
    //buttons that increase/decrease the hour stored in state. TimeNow should display
    //the current TimeNow.
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let minLog = (minute === 0 ? "00" : (minute >= 10 ? minute : `0${minute}`) )
    return (
        <div>
            Time Now:{" "}{hour === 0 ? `12:${minLog} AM` : 
                (hour <= 11 ? `${hour}:${minLog} AM` : 
                (hour === 12 ? `${hour}:${minLog} PM` :`${hour - 12}:${minLog} PM`) )}
        </div>
    )
} 

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date
        }
    }

    tick = () => {
        this.setState({
          date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const {date} = this.state;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return (
            <div>
                <p>Today's Date:{" "}{date.toLocaleDateString('en-US', options)}</p>
                <p>Time Now:{" "}{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export const DayWeek = () => {
    let dayOfWeek;
    switch (new Date().getDay()) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
    }
    return (
        <div id="today">
            {dayOfWeek}
        </div>
    )
}

export const Month = () => {
    let monthOfYear;
    switch (new Date().getMonth()) {
        case 0:
            monthOfYear = "January";
            break;
        case 1:
            monthOfYear = "February";
            break;
        case 2:
            monthOfYear = "March";
            break;
        case 3:
            monthOfYear = "April";
            break;
        case 4:
            monthOfYear = "May";
            break;
        case 5:
            monthOfYear = "June";
            break;
        case 6:
            monthOfYear = "July";
            break;
        case 7:
            monthOfYear = "August";
            break;
        case 8:
            monthOfYear = "September";
            break;
        case 9:
            monthOfYear = "October";
            break;
        case 10:
            monthOfYear = "November";
            break;
        case 11:
            monthOfYear = "December";
    }
    return (
        <div id="today">
            {monthOfYear}
        </div>
    )
}

export const DayMonth = () => {
    let dayofMonth = new Date().getDate();
    return (
        <div id="today">
            {dayofMonth}
        </div>
    )
}

export const Year = () => {
    let thisYear = new Date().getFullYear();
    return(
        <div id="today">{thisYear}</div>
    )
}

export const TvGuide = ({hour, arr, dateInput, moreTime, lessTime, handleDateInput, handleReset, handleUserInput, userInput}) => {
    let hourStr = hour < 10 ? hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) : hour.toString();
    
    // Re-write airtimes to reflect 12-hour clock.
    const schedHour1 = hour === 0 ? `12 AM` : 
        (hour <= 11 ? `${hour} AM` : 
        (hour === 12 ? `${hour} noon` : `${hour - 12} PM`) )
    const schedHour2 = hour + 1 === 24 ? `12 midnight` : 
        (hour + 1 <= 11 ? `${hour + 1} AM` : 
        (hour + 1 === 12 ? `${hour + 1} noon` :`${hour - 11} PM`) )

    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let year = new Date().getFullYear()
    let date = dateInput ? dateInput : `${year}-${(month < 10 ? `0` + month : month)}-${(day < 10 ? `0` + day : day)}`

    // Filters out Playboy TV network and any other show without a network name. 
    // Returns shows that match the specified hour range.
    // Sorts shows by airtime.
    let tv = arr.filter( (el, i, arr) => {
        if (el.show.network !== null
            && el.show.network.name !== "Playboy TV"
            && (el.airtime.match(hourStr + ":") 
            || el.airtime.match(hourStr + ":3")) ) {
            return el;
        }
    }).sort( (a, b) => {
        return a.airtime > b.airtime;
    })

    return (
        <div id="tvguide">
            <div id="tvcontrols">
                <input type="date" 
                    id="date" 
                    value={userInput} 
                    onChange={handleUserInput} 
                    placeholder="YYYY-MM-DD"/>
                <button onClick={handleDateInput} >Get Schedule</button>
                <button onClick={handleReset} id="reset">Reset</button>
                {" "}

                {/* Buttons are diabled when user reaches midnight. */}
                <button disabled={hour === 0} 
                    onClick={lessTime} >{"<"}</button>
                <button disabled={hour === 23} 
                    onClick={moreTime} >{">"}</button>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <td id="title" colSpan="4">Schedule for:{" "}{date} <br /> 
                        On Air:{" "}{schedHour1}{" - "}{schedHour2} <br />
                        </td>
                    </tr>
                    <tr>
                        <th>Network</th>
                        <th>Show</th>
                        <th>Airtime</th>
                        <th>Runtime (minutes)</th>
                    </tr>
                </thead>
                <tbody>
                    {tv.map(el => 
                    <tr key={el.id}>
                        <td>{el.show.network.name}</td>
                        <td><Link to={`/chat/${el.show.name}/${el.show.id}`}>{el.show.name}</Link></td>
                        <td>{el.airtime.match(hour + ":00") ? schedHour1 :
                            schedHour1.replace(" ", el.airtime.slice(2).concat(" ")) }</td>
                        <td>{el.runtime}</td>
                    </tr>)}
                
                    <tr>
                        <td colSpan="4" id="tablefoot"><p>{tv.length === 0 ? "No shows at this time" : ""}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export const Networks = ({arr}) => {
    let networks = arr.map( (el) => {
        if (el.show.network !== null) {
            return (el.show.network.name);
        } 
    }).filter((el, i, arr) => {
      if (arr.indexOf(el) === i)  {
        return el
      }
    }).sort();

    return (
        <div>
            <ul id="one">Networks on today's schedule
                {networks.map(el => 
                <li>{el}</li>)}
            </ul>
        </div>
    )
}

export const TvTable = ({hour, arr, networks}) => {
    // const schedHour1 = hour === 0 ? `12 AM` : 
    //     (hour <= 11 ? `${hour} AM` : 
    //     (hour === 12 ? `${hour} noon` : `${hour - 12} PM`) )
    // const schedHour2 = hour + 1 === 24 ? `12 midnight` : 
    //     (hour + 1 <= 11 ? `${hour + 1} AM` : 
    //     (hour + 1 === 12 ? `${hour + 1} noon` :`${hour - 11} PM`) )
    
    let i = 0
//     let list = (arr, networks) => {while (i < networks.length) {
//         if (arr[i].show.network.name === networks[i]) {
//             return <div>{arr[i].show.network.name}</div>
//         }
//         i++;
//     }
// }
    
    return (
        <div>
            {/* {networks.map(el => 
            <div id="tvTable">{el}</div>)} */}
            {/* {list()} */}
        </div>
    )
    
}