import React from 'react';
import SearchResults from './SearchResults.jsx'
import Header from './Header.jsx'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch}/>
        <SearchResults searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}