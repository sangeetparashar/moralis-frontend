import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { INFTBalances } from 'components/templates/balances/NFT/types';
import { NFTBalances } from 'components/templates/balances/NFT';
import Moralis from 'moralis';

const ERC20: NextPage<INFTBalances> = (props) => {
  return (
    <Default pageName="NFT Balances">
      <NFTBalances {...props} />
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
  
  const balances = await Moralis.EvmApi.account.getNFTs({
    address: context.query.address as string,
    chain: context.query.chain as string
  });

  
  return {
    props: {
      balances: JSON.parse(JSON.stringify(balances.result))
    },
  };
};

export default ERC20;