"use client";
import { type FC } from "react";

import { Box } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Box as="footer" p={"1rem"} position="sticky" bottom={0} zIndex={10} textAlign={"center"}></Box>
  );
};

export default Footer;
