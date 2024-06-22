import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";

const Member = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Member Stats</Heading>
      <VStack spacing={4} align="stretch">
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>Runner 1</Text>
          <Text>Distance: 10 miles</Text>
          <Text>Time: 2 hrs</Text>
          <Text>Average Pace: 12 min/mile</Text>
          <Button colorScheme="red" mt={2}>Slash Stake</Button>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Text>Runner 2</Text>
          <Text>Distance: 8 miles</Text>
          <Text>Time: 1.5 hrs</Text>
          <Text>Average Pace: 11 min/mile</Text>
          <Button colorScheme="red" mt={2}>Slash Stake</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Member;