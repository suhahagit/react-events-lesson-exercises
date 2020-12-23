import React, { Component } from 'react';

class Conversation extends Component {
  back = () => {
    this.props.back()
  }

  render() {
    return (
      <div>
        <button className = 'back' onClick = {this.back}>Back</button>
        {this.props.convo.map((c, i) =>
          <div key={i}>
            <span className='sender'>{c.sender === 'self' ? 'Me' : this.props.sender}: </span>
            <span>{c.text}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Conversation;
