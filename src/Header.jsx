import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {input} = this.state;
    if (input !== '') {
      this.props.handleSearch(input);
    }
  }

  render() {
    return (
      <header className="text-center">
        <div className="row pb-3 pb-md-0">
          <div className="col-12 col-md-6 col-xl-4">
            <h1 className="py-4">GitHub User Lookup</h1>
            <div className="mx-2">
              <p>Search GitHub users by username or full name.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-8 my-auto">
            <form onSubmit={this.onSubmit}>
              <div className="form-group input-group px-4">
                <input type="text" className="form-control" placeholder="Search for..." onChange={this.handleChange} />
                <span className="input-group-btn">
                  <button type='submit' className="btn btn-warning" type="button">Go!</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </header>
    )
  }
}