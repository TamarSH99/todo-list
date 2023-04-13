import React from 'react';
import { Container, Stack, Grid, Text, Flex, Box } from '@chakra-ui/react';
import Task from './Task';

function TaskList(props) {
    const { tasks, handleCompleteTask, setHoveredTaskId } = props;

    return (
        <Box pr={60} pl={60} pt={10}>
            <Container maxW="container.xl">
                {tasks && tasks.length > 0 ? (
                    <Stack spacing={6}>
                        <Grid templateColumns="repeat(3, auto)" gap={8}>
                            {tasks.map((task) => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    handleCompleteTask={handleCompleteTask}
                                    setHoveredTaskId={setHoveredTaskId}
                                />
                            ))}
                        </Grid>
                    </Stack>
                ) : (
                    <Flex justify="center" align="center" h="100%">
                        <Text fontSize="lg">Il n'y a pas de tâches à faire ...</Text>
                    </Flex>
                )}
            </Container>
        </Box>

    );
}

export default TaskList;
