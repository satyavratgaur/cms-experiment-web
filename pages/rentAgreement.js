import { render } from 'react-dom';

export const rentAgreement = () => {
  let val = getval;
  render();
  {
    return <h1>Vals</h1>;
  }
};

const getStaticProps = async (props) => {
  const getval = await 'http://localhost:1337/RentAgreements';
  console.log(getval);
  return {
    props: {
      val: null,
    },
  };
};
