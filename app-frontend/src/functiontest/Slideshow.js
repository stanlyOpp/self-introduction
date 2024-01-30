import { Component } from "react";
import Backgorud from "../img/backgorud.jpg"
class SlideShow extends Component{
    slideIndex = 0
    constructor(props){
        super(props)
        this.state = {
            counter: 0
          };
    }
    test(){
        let slide = document.getElementsByClassName("Slideitem")
        let dots = document.getElementsByClassName("dot")
        console.log(dots)
    }
    showSlide(n){
        let slides = document.getElementsByClassName("Slideitem");
        let dots = document.getElementsByClassName("dot");
        if(n > slides.length){
            this.slideIndex = 1;
        }
        if(n < 1){
            this.slideIndex = slides.length
        }
        for(let i = 0; i < slides.length ; i++){
            slides[i].style.display = "none"
        }
    }
    pluseSlide = (index) =>{
        this.setState({
            counter: this.counter+=index
        })
    }


    render(){
      return(
        <>
        <div className="Slideshowcontainer">
            <div className="Slideitem">
                <img src={Backgorud}></img>
            </div>
            <p>{this.state.counter}</p>
            <a class="prev" >&#10094;</a>
            <a class="next" onClick={this.pluseSlide}>&#10095;</a>
        </div>
        <br></br>
        <div class="dots" style={{textAlign:"center"}}>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        </>
      )
    }
}
export default SlideShow