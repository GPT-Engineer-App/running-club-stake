import { Box, Heading, Text, VStack, HStack, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, useBreakpointValue } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <StatGroup flexDirection={{ base: "column", md: "row" }} spacing={{ base: 4, md: 8 }}>
          <Stat>
            <StatLabel>Amount Staked</StatLabel>
            <StatNumber>$100</StatNumber>
            <StatHelpText>Initial Stake</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Interest Rate</StatLabel>
            <StatNumber>7%</StatNumber>
            <StatHelpText>Annual</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Interest Earned</StatLabel>
            <StatNumber>$7</StatNumber>
            <StatHelpText>Yearly</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Reward from Others</StatLabel>
            <StatNumber>$0</StatNumber>
            <StatHelpText>Pending</StatHelpText>
          </Stat>
        </StatGroup>
        <Box>
          <Heading size="md">Top Level Metrics</Heading>
          <HStack spacing={{ base: 4, md: 8 }} mt={2} flexDirection={{ base: "column", md: "row" }}>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text>Distance</Text>
              <Text fontSize="2xl">0 miles</Text>
            </Box>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text>Time</Text>
              <Text fontSize="2xl">0 hrs</Text>
            </Box>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text>Average Pace</Text>
              <Text fontSize="2xl">0 min/mile</Text>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;