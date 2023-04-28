import React, { useState } from "react";
import axios from "axios";
import styles from "./styles/home.module.css";
import NavBar from "./Navbar";
import Slider from "./Slider";
import Overview from "./Overview";
import Gallery from "./Gallery";
// import Aminities from "./Aminities.js";
import Aminities from "./Aminities.js";
import LocationMap from "./LocationMap";
import About from "./About";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
// import Cat from "./sliding/Cat";
// import Data from "./sliding/Data";
import "./home.css";
axios.defaults.withCredentials = true;
function Home() {
  // const [state, setState] = useState({
  //   value: "Private Protected Route - Home",
  // });

  // const [state, setstate] = useState("Secondcard");

  const logout = () => {
    axios
      .get("http://Localhost:4000/logout")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    window.location.reload();
  };
  return (
    <div>
      <NavBar />
      <Slider />
      <Overview />
      <Gallery />
      <Aminities />
      <LocationMap />
      <About />
      <ContactForm />
      <Footer />

      <div style={{ border: "2px solid yellow" }}>
        <h2>Welcome </h2>
        <p>Thanku for signing in</p>
      </div>
      <div>
        <button onClick={logout} className={styles.logout}>
          Log out
        </button>

        <div />
        <div></div>
      </div>
    </div>
  );
}

export default Home;
