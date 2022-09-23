import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      // src={colorMode === 'dark' ? '/Moralis-DarkBG.svg' : '/Moralis-LightBG.svg'}
      // TODO: Add dark mode logo 
      src={colorMode === 'dark' ? '/TeamsDIDLogo.svg' : '/TeamsDIDLogo.svg' }
      height={45}
      width={45}
      alt="Moralis"
    />
  );
};

export default MoralisLogo;
