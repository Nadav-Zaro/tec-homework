import { Component } from "react";
import axios from "axios";
import './OpenWeather.css'

class OpenWeather extends Component{
    state={city:"",temp:"",temp_max:"",temp_min:"",error:""}
    chooseCity = e => this.setState({city:e.target.value})
    sendWeather = ()=>{
        const userCity = this.state.city
        const API_KEY = "dc1abf176fd8058aa58cdada08cc371d"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}`
        axios.get(URL).then((res)=>{
            const weather= res.data.main
            this.setState({temp:weather.temp-273.15})
            this.setState({temp_max:weather.temp_max-273.15})
            this.setState({temp_min:weather.temp_min-273.15})
            this.setState({error:""})
        })
        .catch((err)=>{
            console.error(err)
            this.setState({error:"That city could not be found"})
            this.setState({temp:""})
        })
}
    render(){
        const {error,temp,temp_max,temp_min} = this.state;
        console.log(temp);
        const goodCityP = {display:Number(temp) ? "inline":"none"}
        const wrongCityP = {display:error.length > 0 ? "inline":"none"}
        return <div className="OpenWeather">
            <div className="weather">
            <h1 className="header">What's The Weather?</h1>
            <p className="text">Enter the name of a city.</p>
            <input className="input" type="text" onChange={this.chooseCity} placeholder="Enter city name"></input>
            <button className="btn" type="submit" onClick={this.sendWeather}>Submit</button>
            <div className="goodCity" style={goodCityP}>
            <p>The weather right now is {parseInt(temp)}&#8451;. The max temp for today may be<br></br>
            {parseInt(temp_max)}&#8451;, the min temp might be {parseInt(temp_min)}&#8451;</p>
            </div>
            <div className="badCity" style={wrongCityP}>
            <p>{error}</p>
            </div>
            </div>
        </div>
    }
}

export default OpenWeather