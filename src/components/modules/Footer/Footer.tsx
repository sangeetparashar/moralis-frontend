import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  hackbox: 'https://hackbox.microsoft.com/project/1285',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        👍️ Please like our{' '}
        <Link href={links.hackbox} isExternal alignItems={'center'}>
          hackathon project <ExternalLinkIcon />
        </Link>
        , every thumbs up makes us very happy!
      </Text>
    </Box>
  );
};

export default Footer;
