import React from 'react';
import Header from './header/header'
import './App.css';
import Second from './second/second';
import Projects from './featuredProjects/Projects';
import Process from './process/process';
import Team from './team/team';
import Contact from './contact/contact';





function App() {
  return (
    <div className="App">
      <Header></Header>
      <Second></Second>
      <Projects></Projects>
      <Process></Process>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
}

export default App;
