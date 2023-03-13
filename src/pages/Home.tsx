import SearchBar from "../components/SearchBar";
import UserGuidelines from "../components/UserGuidelines";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="home">
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
