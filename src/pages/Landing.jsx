import Banner from "../components/Banner";
import Featured from "../components/Featured";
import NavBar from "../components/NavBar";
import ShopByType from "../components/ShopByType";

function Landing() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Featured />
      <ShopByType/>
    </div>
  );
}

export default Landing;
