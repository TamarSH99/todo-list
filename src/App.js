import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, completeTask } from './redux/actions';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import store from './redux/store';
import TaskModal from './components/TaskModal';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [hoveredTaskId, setHoveredTaskId] = useState(null);

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleAddTask = () => {
    dispatch(addTask(taskDescription));
    setTaskDescription('');
    setIsModalOpen(false);
  };

  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };

  return (
    <Provider store={store}>
      <ChakraProvider>
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          handleAddTask={handleAddTask}
        />
        <TaskList
          tasks={tasks}
          handleCompleteTask={handleCompleteTask}
          setHoveredTaskId={setHoveredTaskId}
        />
        <AddTaskButton setIsModalOpen={setIsModalOpen} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
