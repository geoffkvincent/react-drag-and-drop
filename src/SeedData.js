const SeedData = {
  todos: {
    'todo-1': { id: 1, name: 'Learn Code'},
    'todo-2': { id: 2, name: 'Get a Job'},
    'todo-3': { id: 3, name: 'Make a MILLION BUCKS'},
    'todo-4': { id: 4, name: 'Get a Truck'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['todo-1', 'todo-2', 'todo-3', 'todo-4'],
    },
  },
  columnOrder: ['column-1'],
}

export default SeedData