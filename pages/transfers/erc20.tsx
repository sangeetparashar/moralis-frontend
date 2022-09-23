import { Default } from 'components/layouts/Default';
import { ERC20Transfers } from 'components/templates/transfers/ERC20';
import { GetServerSideProps, NextPage } from 'next';
import { IERC20Transfers } from 'components/templates/transfers/ERC20/types';
import Moralis from 'moralis';

const ERC20: NextPage<IERC20Transfers> = (props) => {
  return (
    <Default pageName="ERC20 Transfers">
      <ERC20Transfers {...props} />
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

  const transfers = await Moralis.EvmApi.account.getTokenTransfers({
    address: context.query.address as string,
    chain: context.query.chain as string
  });

  return {
    props: {
      transfers: JSON.parse(JSON.stringify(transfers.result)),
    },
  };
};

export default ERC20;
