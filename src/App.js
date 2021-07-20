import './App.scss';
import { Children, Fragment, useRef } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Studio from './components/Studio';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  // const scrollRef = useRef(null);


  return (
    <Fragment>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Studio></Studio>
        <Blog></Blog>
        <ContactUs></ContactUs>
        <Footer></Footer>
    </Fragment>
  );
}

export default App;
