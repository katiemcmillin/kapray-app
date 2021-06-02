import "./Home.css";
import { Layout } from "../../components";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home-sign-up">
        <Link to="/sign-up">
          <h1>SIGN - UP</h1>
        </Link>
      </div>
      <div className="home-apparel">
        <Link to="/products">
          <h1>APPAREL</h1>
        </Link>
      </div>
      <div className="home-add-apparel">
        <Link to="/add-product">
          <h1>ADD APPAREL</h1>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
