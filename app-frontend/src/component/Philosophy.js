import { Component } from "react";
import Slide from './Slide';
import Philosophy1 from "../img/philosophy1.jpg"
import Philosophy2 from "../img/philosophy2.jpg"
import Philosophy3 from "../img/philosophy3.jpg"
import Philosophy4 from "../img/philosophy4.jpg"
import Philosophy5 from "../img/philosophy5.jpg"

class Philosophy extends Component{
    render(){
        const AllImagephilosophy = [
            Philosophy1,
            Philosophy2,
            Philosophy3,
            Philosophy4,
            Philosophy5,
        ]
        return(
            <div className="Philosophy-component">
                <Slide Image={AllImagephilosophy}></Slide>
            </div>
        )
    }
}

export default Philosophy;