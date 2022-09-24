import { Default } from 'components/layouts/Default';
import { Transactions } from 'components/templates/transactions';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Transactions />
    </Default>
  );
};

export default HomePage;
