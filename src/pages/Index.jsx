import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Running Club</Text>
        <Text>Stake $100 to join and meet the club's running requirements to earn rewards!</Text>
      </VStack>
    </Container>
  );
};

export default Index;