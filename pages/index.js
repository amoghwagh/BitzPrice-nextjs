import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const Index = props => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        {props.bpi.time.updated}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data 
  };
};
export default Index;
