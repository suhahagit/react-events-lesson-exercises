import React, { Component } from 'react';
import Task from './Task';

class SpotCheck5 extends Component {

  constructor() {
    super()
    this.state = {
      tasks: [
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: true },
        { text: "Carry boxes upstairs", complete: false }
      ]
    }
  }

  markComplete = text => {
    const updatedTasks = [...this.state.tasks]
    updatedTasks.find(t => t.text === text).complete = true
    this.setState({
      tasks: updatedTasks
    })

  }

  render() {
    return (
      <div>
        {this.state.tasks.filter(t => !t.complete)
                        .map(t => <Task key = {t.text} text = {t.text} markComplete = {this.markComplete}/>)}
      </div>
    )
  }
}

export default SpotCheck5;
