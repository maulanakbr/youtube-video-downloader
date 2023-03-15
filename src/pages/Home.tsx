import SearchBar from "../components/SearchBar";
import UserGuidelines from "../components/UserGuidelines";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Logo from "../assets/logo.svg";

const Home = () => {
  return (
    <section className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href={Logo} />
        <title>Home | Simple Youtube Video Downloader</title>
      </Helmet>
      <div className="home-content">
        <h1>Simple Youtube Video Downloader</h1>
        <SearchBar />
        <UserGuidelines />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
