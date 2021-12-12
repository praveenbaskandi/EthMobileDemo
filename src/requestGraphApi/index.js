import {createClient} from 'urql';

const APIURL =
  'https://api.studio.thegraph.com/query/16446/ethereumpundixdemo/0.7';

const tokensQuery = `
  query {
    transactions (first: 20) {
        id
        from
        to
        blockNumber
        blockTimestamp
        gasUsed
        gasPrice
      }
  }
`;

const client = createClient({
  url: APIURL,
});

export const getServerSideData = async () => {
  try {
    const data = await client.query(tokensQuery).toPromise();
    return data.data.transactions;
  } catch (error) {
    return [];
  }
};
