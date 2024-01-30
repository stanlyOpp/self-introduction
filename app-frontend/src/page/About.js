import { Component } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Myimage from "../img/Tyler-durden-1.jpg";
import BookIcon from '@mui/icons-material/Book'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Introduction from "../component/Introduction";
import Background from "../component/Background";
import Myinteres from "../component/Myinteres";
import Philosophy from "../component/Philosophy";
class Educationtest extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className="About-card">
        <div className="BottomNavigation">
          <img src={Myimage} width={500} height={250}></img>
          <BottomNavigation
            showLabels
            value={this.state.value}
            onChange={(event, newValue) => {
              this.setState({
                value: newValue,
              });
            }}
          >
            <BottomNavigationAction label="Introduction" icon={<ArrowForwardIcon></ArrowForwardIcon>} />
            <BottomNavigationAction label="Background" icon={<LocationOnIcon />}></BottomNavigationAction>
            <BottomNavigationAction label="Myinteres" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Philosophy" icon={<BookIcon></BookIcon>} />
          </BottomNavigation>
        </div>
        <div className="Display-navigation">
          {this.state.value === 0 && <Introduction></Introduction>}
          {this.state.value === 1 && <Background></Background>}
          {this.state.value === 2 && <Myinteres></Myinteres>}
          {this.state.value === 3 && <Philosophy></Philosophy>}
          {this.state.value === null && <h1>Click to display on the left</h1>}
        </div>
      </div>
    );
  }
}

export default Educationtest;
