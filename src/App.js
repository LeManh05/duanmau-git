import Header from './Header';
import Banner from './Banner';
import Content from './Content';
import Button from './Button';
import Menu from './Menu';
import FixedIcon from './FixedIcon';
import Footer from './Footer';
import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
function App(){
  return (
  <div className="App">
  <Header/>
  <Banner/>
  <Content/>
  <Button/>
  <Menu/>
  <FixedIcon/>
  <Footer/>
  </div>
  );
}

export default App ;