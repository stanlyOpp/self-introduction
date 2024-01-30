import { Component } from "react";
class Course extends Component{
    render(){
        const {course} = this.props;
        return(
            <div className="Course-description">
                <h2>{course.title}</h2>
                <p><strong>Course Code : </strong>{course.code}</p>
                <p><strong>Description : </strong>{course.Description}</p>
                <p><strong>Year : </strong>{course.year}</p>
            </div>
        )
    }
}
export default Course;