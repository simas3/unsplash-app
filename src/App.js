import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';


import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList'
import Header from './components/Header'
import QueryList from './components/QueryList'

import 'normalize.css/normalize.css'
import './App.scss'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header subtitle="Explore the largest open collection of high-quality photos." />
          <SearchForm />
          <div className="flex-container">
            <ImageList />
            <QueryList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
