import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none", color: "gray.200" }}>
          Home
        </Link>
        <Link as={NavLink} to="/dashboard" color="white" _hover={{ textDecoration: "none", color: "gray.200" }}>
          Dashboard
        </Link>
        <Link as={NavLink} to="/activity" color="white" _hover={{ textDecoration: "none", color: "gray.200" }}>
          Activity
        </Link>
        <Link as={NavLink} to="/member" color="white" _hover={{ textDecoration: "none", color: "gray.200" }}>
          Member
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;