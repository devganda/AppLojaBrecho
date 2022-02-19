import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Route from './Route';
import { Template } from './components/Maincomponents';
import Header from './components/partials/header';
import Footer from './components/partials/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Template>
        <Header/>
          <Route/>
        <Footer/>
      </Template>
    </BrowserRouter>
  );
}

const mapStateProps = (state) =>{
 return{
    user: state.user
  }; 
}

const mapDispatchToProps = ()=>{
  return{

  }
}

export default connect(mapStateProps, mapDispatchToProps)(App);
