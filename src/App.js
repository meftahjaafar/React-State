import React   from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import img from "./assets/img.png"

function Person(props) {
    if (!props.warn.showPerson) {
      return <p className="Initial Date">
      <h2> Initial Date :</h2> <span>{props.warn.initDate}</span>
      </p>;
    }
  
    return (
    <div class="container">
      <div class="row">
      <div class="col">
      <p className="myImage">
        <h2> Profile Photo :</h2>
        <img className="img" src={props.warn.src} alt={"Profile Photo"} style={{width: "150px"}} />
      </p>
      </div>
      <div class="col">
      <p className="Name">
        <h2> Name :</h2>
        <span> {props.warn.fullName}</span>
      </p>
        </div>
        <div class="col">
      <p className="bio">
        <h2> Bio :</h2> <span>{props.warn.bio}</span>
      </p>
      </div>
      <div class="col">
      <p className="Profession">
        <h2> Profession :</h2> <span>{props.warn.profession}</span>
      </p>
      </div>
      <div class="col">
      <p className="Initial Date">
        <h2> Initial Date :</h2> <span>{props.warn.initDate}</span>
      </p>
      </div>
      </div>
      </div>
      
    );
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: "Meftah Jaâfer",
        bio: "After discovering my passion for web development, I couldn’t get enough. I made websites for friends and family, interned with a local business, and hired myself out as a freelancer. I’m looking forward to bringing that passion to a full-time role.",
        profession: "Web Developer",
        src: img,
        showPerson: true,
        initDate: new Date().toLocaleTimeString()
      };
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  

handleToggleClick(){
  setInterval(() => {
    console.log('Our data is fetched');
    this.setState(state =>({
      showPerson: !state.showPerson
    }))
  }, 10000)
}

componentDidMount(){
  this.handleToggleClick();
}
  
    render() {
      return (
        <div>
          <Person warn={this.state} />
          <Button onClick={this.handleToggleClick}>
            {this.state.showPerson ? 'Show' : 'Hide'}
          </Button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
export default App;
    