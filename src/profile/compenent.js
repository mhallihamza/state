import React from "react";
class Pro extends React.Component {
   render(){
    return (
        <div className="card" style={{width: "50rem",marginLeft:"20%"}}>
        <img src={this.props.imgSrc} className="card-img-top" alt="bro"></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.fullName}</h5>
          <p className="card-text">{this.props.bio}</p>
          <p className="card-text">{this.props.profession}</p>
        </div>
      </div>
    );
   }
}
export default Pro