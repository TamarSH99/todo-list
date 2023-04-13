import React from 'react';
import { Button } from '@chakra-ui/react';

const AddTaskButton = ({ setIsModalOpen }) => {
    return (
        <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
            <Button colorScheme="blue" onClick={() => setIsModalOpen(true)}>+</Button>
        </div>
    );
};

export default AddTaskButton;
