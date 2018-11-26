import React, { Component } from 'react';

import './Hello.css'

class Hello extends Component {


  render(){

    return(
      <div className="box">
        <h1 className="header2">{this.props.title}</h1>
        <p>
          {this.props.content}
        </p>
        <div className="commentbar">
          <p className="comments">
            {this.props.comments} {this.props.likes}
          </p>
        </div>
      </div>
    )
  }
}

export default Hello
