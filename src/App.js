import React, { Component } from 'react';
import SeedData from './SeedData'
import Column from './Column'

class App extends Component {
  state = SeedData

  render() {
    return this.state.columnOrder.map(columnId =>{
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />
    })
  }
}
export default App;
