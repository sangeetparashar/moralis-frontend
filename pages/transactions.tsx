import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { ITransactions, Transactions } from 'components/templates/transactions';
import Moralis from 'moralis';

const TransactionsPage: NextPage<ITransactions> = (props) => {
  return (
    <Default pageName="Transactions">
      <Transactions {...props} />
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

  const transactions = await Moralis.EvmApi.account.getTransactions({
    address: context.query.address as string,
    chain: context.query.chain as string
  });

  return {
    props: {
      transactions: JSON.parse(JSON.stringify(transactions.result)),
    },
  };
};

export default TransactionsPage;
