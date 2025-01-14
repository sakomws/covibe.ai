import React from 'react';
import { Modal, Button, Text } from '@mantine/core';

interface IntroModalProps {
  opened: boolean;
  onClose: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ opened, onClose }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      title={
        <Text size="lg" fw={700}>Welcome to Agent DevRel</Text>
      }
    >
     <Text>
  Welcome to DevRel Hub, a comprehensive platform designed to enhance your developer relations initiatives by bridging the gap between community engagement and technical resources.
</Text>
<br></br>
<Text>
  The platform integrates various data sources, including community forums, social media, event attendance, and feedback forms, providing a unified view of your developer ecosystem.
</Text>
<br></br>
<Text>
  DevRel Hub helps you monitor community interactions, analyze feedback, and measure the impact of your developer programs in real-time, ensuring you can quickly identify opportunities and address issues.
</Text>
<br></br>
<Text>
  Use the platform to track and manage events, from hackathons to webinars, and engage with your developer community through targeted outreach and personalized communications.
</Text>
<br></br>
<Text>
  Click the Learn More button to understand how our advanced analytics and machine learning algorithms work behind the scenes to provide actionable insights and enhance your developer relations strategy.
</Text>
<br></br>
<Text>
  If accessing the platform on a small screen, use the top-left burger menu to navigate through different sections, including community insights, event management, and feedback analysis.
</Text>
<br></br>
<Text size="xs">
  For advanced users, DevRel Hub offers extensive configuration and customization options, allowing you to tailor the platform to meet your specific needs. Click Learn More for detailed documentation and best practices.
</Text>
<br></br>
      <Button onClick={onClose}>
        Close
      </Button>
    </Modal>
  );
};

export default IntroModal;