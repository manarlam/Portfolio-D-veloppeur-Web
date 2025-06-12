import React from 'react';
import Header from "../components/header/Header"
import Projects from "../components/projects/Projects"

function Home() {
  return (
  <main className="main">
    <div className="home">
      <Header />
      <Projects/>
    </div>
  </main>
  );
}

export default Home;