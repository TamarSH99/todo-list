const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'COMPLETE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id === action.payload.id) {
              return {
                ...task,
                completed: true,
              };
            }
            return task;
          }),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  