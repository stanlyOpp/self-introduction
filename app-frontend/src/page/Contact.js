import axios from "axios";
import { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "064-760-1980",
      email: "nutthaphong_w@cmu.ac.th",
      social_medie: ["facebook : Oldboy nutthaphnog", "twitter : powerby", "git-hub : kington"],
      format_data :{
        Email:'',
        Message:'',
      }
    };
  }
  formchange = (e) =>{
    this.setState({
      format_data:{
        ...this.state.format_data,
        [e.target.name]: e.target.value
      }
    })
  }
  sentmessagetobackend = (e) =>{
    e.preventDefault()
    const formData = this.state.format_data
    axios.post('http://localhost:4459/submit-form',formData)
    .then(res =>{
      console.log(res)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  render() {
    return (
      <div className="Contact-card">
        <div className="Form-message">
            <form onSubmit={this.sentmessagetobackend}>
                <label htmlFor="Email">Email :</label>
                <input type="email" id="Email" name="Email"  placeholder=" Your Email" onChange={this.formchange}required></input>
                <label htmlFor="Message">Message :</label>
                <input id="Message" name="Message"  placeholder="Enter message" onChange={this.formchange} required></input>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="Contact-list">
          <h1>Contact</h1>
          <ul>
            <span>Direct contact</span>
            <li>* Phone {this.state.phone}</li>
            <li>* Email {this.state.email}</li>
            <span>My social-medie list</span>
            {this.state.social_medie.map((val) => {
              return <li>* {val}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Contact;
