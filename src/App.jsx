import React,{useState} from "react"
import Form from "./text"
import Map from "./map"
import "./App.css"

export default function App(){
    const [ip,setIp] = useState("")
    const [state,setState] = useState( JSON.parse(localStorage.getItem("state")) || {"ip":"","location":{"country":"US","region":"","city":"","lat":37.38605,"lng":-122.08385,"postalCode":"","timezone":"","geonameId":5375480},"domains":["bitc.blog","serveur-sg.fr","www.bitc.blog","www.drysaunabenefits.com","www.oursaunas.com"],"as":{"asn":15169,"name":"GOOGLE","route":"8.8.8.0/24","domain":"","type":"Content"},"isp":""})
    const [input,setInput] = useState("")

    console.log(JSON.parse(localStorage.getItem("state")))

    React.useEffect(() =>{
        let apiKey = 'at_t8rOM8KG9VLZKlGH73qnXzEITTQme';
        if (ip) {
            fetch('https://geo.ipify.org/api/v2/country,city?apiKey=' + apiKey + '&ipAddress=' + ip)
            .then(response => response.json())
            .then(data => setState(data))
        }
        else if (ip == "" && state.ip==""){
            fetch('https://geo.ipify.org/api/v2/country,city?apiKey=' + apiKey)
            .then(response => response.json())
            .then(data => setState(data))
        }
    },[ip])


    React.useEffect(function(){
        localStorage.setItem("state",JSON.stringify(state))
    },[state])

    function handleChange(event){
        const {value} = event.target
        setInput(prev => value)
    }

    function handleSubmit(event){
        event.preventDefault()
        setIp(input)
    }

    return(
        <div>
            <div className="top-info">
                <h1>Ip Address Tracker</h1>
                <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
            <div className="board">
                <div className="lilboard">
                    <h1>Ip Address</h1>
                    <h2>{state.ip}</h2>
                </div>
                <div className="lilboard">
                    <h1>location</h1>
                    <h2>{state.location.region}</h2>
                </div>
                <div className="lilboard">
                    <h1>TimeZone</h1>
                    <h2>{state.location.timezone}</h2>
                </div>
                <div className="lilboard alone">
                    <h1>ISP</h1>
                    <h2>{state.isp}</h2>
                </div>
            </div>
            <div className="map">
                <Map lat={state.location.lat} lng={state.location.lng} />
            </div>
    </div>
    );
}