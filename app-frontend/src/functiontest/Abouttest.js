import { Component } from "react";
import React from "react";
import ReactTypingEffact from "react-typing-effect"
import Myimage from "../img/Tyler-durden-1.jpg"
import Introduction from "../component/Introduction.js"
class About extends Component{
    constructor(props){
        super(props)
        this.state = {
            senIntoduction:false,
            senMyinteres:false,
            senBackground:false,
            senPhilosophy:false,
            senAccomplishments:false,
            counter:0,
        }
    }
    setIntroduction = () =>{
        if(this.state.senIntoduction == false){
            this.setState({
                senIntoduction : true
                });
            document.getElementById('Introduction').style.display = "inline-block"
        }
        else{
            this.setState({
                senIntoduction : false
                });
            document.getElementById("Introduction").style.display = "none"
        }
    }
    render(){
       return(
        <div className="About-card">
            <div className="displayprofile">
            <img src={Myimage} width={500} height={250}></img>
            <div className="button-colums">
                <button onClick={this.setIntroduction}>Introduction</button>
                <button>Myinteres</button>
                <button>Background</button>
                <button>Philosophy</button>
                <button>Accomplishments</button>
            </div>
            </div>
            <div className="Contents-display">
                <div className="Introduction_element" id="Introduction" style={{display:"none"}}>
                    <Introduction></Introduction>
                </div>
                <div id="Background"></div>
                <div id="philosophy"></div>
                <div id="Accomplishments"></div>
            </div>
        </div>
       )
    }
}

export default About