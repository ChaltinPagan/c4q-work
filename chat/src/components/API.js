import axios from 'axios';

const tvSchedule = () => {
    axios.get(`http://api.tvmaze.com/schedule?date=${this.state.userInput}`)
    .then( res => {
        return res.data;
    })
    .catch(error => console.log(error))
}

export default tvSchedule;