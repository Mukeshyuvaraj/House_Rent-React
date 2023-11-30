import React from 'react';
import Header from '../Common/Header/Header.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Services from '../Services/Services.jsx';
import Blog from '../Blog/Blog.jsx';
import Pricing from '../Pricing/Pricing.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Common/Footer/Footer.jsx';


const Pages = () => {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  </>
  )
}

export default Pages;