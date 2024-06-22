import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Activity = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Activity Feed</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>Runner 1 completed a 5 mile run</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>Runner 2 completed a 3 mile run</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Activity;