import React from 'react';

export default class Header extends React.Component {
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
            <div className="input-group px-4">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-warning" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}