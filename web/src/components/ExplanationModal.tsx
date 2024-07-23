// src/components/ExplanationModal.tsx

import React from 'react';
import { Modal, Button, Text, Image, Stack, Group, Anchor } from '@mantine/core';
import pinkelephants from '../assets/pinkelephants.png';
import pinkelephants2 from '../assets/pinkelephants2.png';

interface ExplanationModalProps {
  opened: boolean;
  onClose: () => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({ opened, onClose }) => {
  return (
    <Modal 
      opened={opened} 
      onClose={onClose} 
      size="lg"
      title={<Text size="lg" fw={700}>About the Project</Text>}
    >
     <Text mt="md">
  Created in about 3 hours by the DevRel Model team. \o/
  <br></br>
  Based on Rob, Mark, Divija, Pranav and Sako's work during a hackathon.
  <br></br>
  This project demonstrates how advanced prompting techniques can be used in Developer Relations to manage sensitive information. We utilized a Violation and Principles refinement system to ensure consistency and confidentiality. Check out our GitHub for more details.
  <br></br>
  For more information, see our project on <a href="https://github.com/sakomws/aiproxy">GitHub</a>.
</Text>
<br></br>
<Button onClick={onClose} fullWidth mt="md">
  Close
</Button>
    </Modal>
  );
};

export default ExplanationModal;