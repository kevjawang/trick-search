import React from "react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import { FaHome, FaPlus } from "react-icons/fa";

export const Header: React.FC = ({}) => {
  return (
    <Box>
      <Box>
        <NextLink href="/" as="/">
          <Link>
            <FaHome />
          </Link>
        </NextLink>
      </Box>
      <Box>
        <NextLink href="/create-trick" as="/create-trick">
          <Link>
            <FaPlus />
          </Link>
        </NextLink>
      </Box>
      <Box>
      </Box>
    </Box>
  );
};
