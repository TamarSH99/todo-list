import React, { useState } from 'react';
import { Box, Button, CloseButton, Flex, Text, Textarea } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskModal = ({ isOpen, onClose }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
      onClose();
    }
  };


  return (
    <>
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          bottom="0"
          right="0"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            backgroundColor="white"
            borderRadius="md"
            p={3}
            width="30%"
          >
            <Flex justify="space-between" alignItems="center" mb={3}>
              <Text fontSize="lg" fontWeight="bold">Ajouter une tâche</Text>
              <CloseButton onClick={onClose} />
            </Flex>

            <Text mb={3} fontSize="md" fontWeight="bold">Description</Text>
            <Textarea
              mb={5}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Entrez la description de la tâche..."
              size="sm"
              w="100%"
            />
            <Flex justify="flex-end">
              <Button mr={3} colorScheme="blue" onClick={handleAddTask}>Ajouter</Button>
              <Button onClick={onClose}>Annuler</Button>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TaskModal;
