import React, { Component } from 'react';

class Contact extends Component {

  displayConvo = () => {
    this.props.displayConvo(this.props.name)
  }

  render() {
    return (
      <div onClick = {this.displayConvo}>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Contact;
