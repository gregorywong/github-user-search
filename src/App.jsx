import React from 'react';
import SearchResults from './SearchResults.jsx'
import Header from './Header.jsx'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <SearchResults searchTerm="greg wong"/>
      </div>
    )
  }
}