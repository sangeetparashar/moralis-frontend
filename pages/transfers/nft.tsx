import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { INFTTransfers, NFTTransfers } from 'components/templates/transfers/NFT';
import Moralis from 'moralis';

const NFTTransfersPage: NextPage<INFTTransfers> = (props) => {
  return (
    <Default pageName="NFT Transfers">
      <NFTTransfers {...props} />
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

  const transfers = await Moralis.EvmApi.account.getNFTTransfers({
    address: context.query.address as string,
    chain: context.query.chain as string
  });

  return {
    props: {
      transfers: JSON.parse(JSON.stringify(transfers.result)),
    },
  };
};

export default NFTTransfersPage;
