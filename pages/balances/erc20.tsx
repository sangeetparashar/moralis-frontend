import { Default } from 'components/layouts/Default';
import { EvmAddress } from '@moralisweb3/evm-utils';
import { GetServerSideProps, NextPage } from 'next';
import getErc20LogoAddress from 'utils/getErc20LogoAddress';
import Moralis from 'moralis';
import { ERC20Balances, IERC20Balances } from 'components/templates/balances/ERC20';

const ERC20: NextPage<IERC20Balances> = (props) => {
  return (
    <Default pageName="ERC20 Balances">
      <ERC20Balances {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.query.address || !context.query.chain) {
    return {
      notFound: true,
    }
  }

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });


  const balances = await Moralis.EvmApi.account.getTokenBalances({
    address: context.query.address as string,
    chain: context.query.chain as string
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tokensWithLogosAdded = balances.toJSON().map((balance: any) => ({
    ...balance,
    token: {
      ...balance.token,
      logo: getErc20LogoAddress({
        blockchain: 'ethereum',
        address: EvmAddress.create(balance.token?.contractAddress || '').checksum,
      }),
    },
  }));

  return {
    props: {
      balances: JSON.parse(JSON.stringify(tokensWithLogosAdded)),
    },
  };
};

export default ERC20;
  