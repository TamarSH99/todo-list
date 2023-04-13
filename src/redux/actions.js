export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: {
      id: Date.now(),
      description,
      completed: false,
    },
  });
  
  export const completeTask = (id) => ({
    type: 'COMPLETE_TASK',
    payload: {
      id,
    },
  });
  