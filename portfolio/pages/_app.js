import "../styles/style.css";
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar/Navbar'
import Footer from "../components/footer/Footer"

function App({ Component, pageProps }) {
  return (
    <>
    <div className="app-container">
      <div className="app-content">
      <Navbar />
      <Component {...pageProps} />
      </div>
      <Footer />
      </div>
    </>
  );
}

export default App;