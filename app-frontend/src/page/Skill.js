import { Component } from "react";
import React from "react";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mylang: ["JS", "JAVA", "C++", "PYTHON", "RUBY","TS","C#","GOLANG","ASSEMBLY","POLOG"],
      mynolang: ["HTML", "CSS", "SQL", "NOSQL", "XML", "RDF", "OWL"],
      technology: ["NODE.JS", "REACT", "FIREBASE", "MYSQL", "MONGODB"],
      other: [
        "ONTOLOGY ENGINEER",
        "ER DIAGRAM DESING",
        "RAPIDMINER",
        "SIMMAN",
        "MICROCONTROLLER",
        "FUNDUMANTAL OF STATISTICS",
      ],
    };
  }
  render() {
    return (
      <div className="skill-card">
        <h1 className="Related-knowledge">Related knowledge</h1>
        <ul>
          <span>PRGRAMING LANG:=</span>
          {this.state.mylang.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
        <br></br>
        <ul>
          <span>NONPRGRAMING LANG:=</span>
          {this.state.mynolang.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
        <br></br>
        <ul>
        <span>TECHNOLOGY:=</span>
          {this.state.technology.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
        <br></br>
        <ul>
        <span>OTHER:=</span>
          {this.state.other.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Skill;
