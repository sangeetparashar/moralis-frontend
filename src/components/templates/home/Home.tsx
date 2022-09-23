import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        Decentralized Identity Inside Teams!
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="purple.500" />
          In-Teams wallet connection
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="purple.500" />
          Display Transactions
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="purple.500" />
          Display ERC20 transfers
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="purple.500" />
          Display ERC20 balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="purple.500" />
          Display NFT balances
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="purple.500" />
          Display NFT transfers
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="purple.500" />
          Link wallet with MSA
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="purple.500" />
          DAO management
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="purple.500" />
          Multichain support
        </ListItem>
        <ListItem>
          <ListIcon as={SettingsIcon} color="purple.500" />
          ... and more
        </ListItem>
      </List>
    </VStack>
  );
};

export default Home;
