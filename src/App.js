import React, {Component} from 'react';
import './App.css';
import Pro from './profile/compenent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "PETER DINKLAGE",
        bio: "Game Of Throne",
        imgSrc: "/images/1.jpg",
        profession: "Tyrion Lannister"
      },
      Boole: true,
      count: 0,
    };
  }
  componentDidMount() {
    this.myInterval =  setInterval(() => {
      this.setState(prevState => ({
       count: prevState.count + 1
      }))
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval(this.myInterval)
  }
  handleClick=()=>{this.setState(prevState => ({Boole:!prevState.Boole}))}
  render() {
    const {count}=this.state
    return (
       <div>
        <button className='btn btn-primary my-2' style={{marginLeft:'47%'}} onClick={this.handleClick}>{this.state.Boole ? 'Hide' : "Show"}</button>
        <div>{this.state.Boole ? <Pro 
        fullName= {this.state.Person.fullName} 
        bio= {this.state.Person.bio} 
        imgSrc={this.state.Person.imgSrc}
        profession={this.state.Person.profession}/> : "" }</div>
        <div className='bg-danger rounded-circle text-center fs-1' style={{width:"5%", height:"5rem", paddingTop:"0.5rem",position:"absolute",top:"45%",left:"7.5%"}}>{count}</div>
       </div>
    );
  }
}
export default App;
