import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senDisplayref: false,
    };
  }
  activeDisplayref = () => {
    if (this.state.senDisplayref === false) {
      this.setState({
        senDisplayref: true
      });
      document.getElementById("Displayref").style.display = "inline-block";
    } else {
      this.setState({
        senDisplayref: false
      });

      document.getElementById("Displayref").style.display = "none";
    }
  };
  render() {
    return (
      <div className="Home-card">
        <div>
          <ReactTypingEffect
            text="WELCOME TO MY PERSONAL PROFILE.."
            speed={80}
            eraseDelay={200}
          ></ReactTypingEffect>
        </div>
        <div>
          <p>about my personal profile click below</p>
        </div>
        <button onClick={this.activeDisplayref}>Thank for Attention</button>
        <p>{this.state.senDisplayref}</p>
        <div
          className="Displayref-content"
          id="Displayref"
          style={{display : "none"}}
        >
          <p>thank for interes in my profile and cv for internship</p>
          <p>
            this my fist font-end project to be considered
          </p>
          <p>Imprementation</p>
          <ul>
            <li>React</li>
            <li>Mui component</li>
            <li>Class component</li>
            <li>Rest Api in contact form</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
