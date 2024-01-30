import { Component } from "react";
import Course from "../component/Course";
import Allcourse from "../data/course";
class Education extends Component{
    render(){
        return(
            <div className="Education-card">
                {Allcourse.map(item =>(
                    <Course course={item}></Course>
                ))}
            </div>
        )
    }
}

export default Education;