import { FC, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} | ETH Boilerplate`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxW="container.lg" p={3} marginTop={50} as="main">
      {children}
    </Container>
  </>
);

export default Default;
