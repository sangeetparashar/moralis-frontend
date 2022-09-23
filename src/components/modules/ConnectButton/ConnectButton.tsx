import { Text, HStack, Avatar } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getEllipsisTxt } from 'utils/format';

const ConnectButton = () => {
  const { query } = useRouter();

  return (
    <HStack cursor={'pointer'}>
      <Avatar size="xs" />
      <Text fontWeight="medium">{getEllipsisTxt(query.address as string)}</Text>
    </HStack>
  );
};

export default ConnectButton;
