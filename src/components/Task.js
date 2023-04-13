import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

const Task = ({ task, handleCompleteTask }) => {
    const [hoveredTaskId, setHoveredTaskId] = useState(null);

    return (
        <Box
            key={task.id}
            p={6}
            borderRadius="md"
            border="0.1px solid lightGrey"
            height="100"
            bg={task.completed ? 'green.200' : (hoveredTaskId === task.id ? 'blue.100' : 'white')}
            cursor={!task.completed ? 'pointer' : 'default'}
            onMouseEnter={() => setHoveredTaskId(task.id)}
            onMouseLeave={() => setHoveredTaskId(null)}
            onClick={() => !task.completed && handleCompleteTask(task.id)}
        >
            <Text fontSize="sm" fontWeight="normal">
                {task.description}
            </Text>
        </Box>
    );
};

export default Task;
