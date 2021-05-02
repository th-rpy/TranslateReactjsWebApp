import React from "react";
import { Box, Icon, Text, Stack, Link, chakra } from "@chakra-ui/react";

import links from "./Link";

const FooterLink = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
);

export const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Text fontSize="md" px="1rem" className="i" color="gray.600">
      <span>
        Made with Love 💜 using{" "}
        <a href="https://reactjs.org/" rel="noreferrer" target="_blank">
          ReactJs.
        </a>
      </span>
    </Text>
    <Text px="1rem" className="i" color="gray.500" fontSize="md" isTruncated>
      Thank you for supporting me!
    </Text>
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
);

export default Footer;
