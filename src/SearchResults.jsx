import React from 'react';

const searchUrlPrefix = 'https://api.github.com/legacy/user/search/';
const imgUrlPrefix = 'https://avatars.githubusercontent.com/';
const profileUrlPrefix = 'https://github.com/';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      const searchUrl = searchUrlPrefix + nextProps.searchTerm;
      fetch(searchUrl)
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            users: json.users
          })
        })
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div className="row m-3">
        {
          users.map((user, i) => {
            return (
              <div className='col-6 col-sm-4 col-md-3 col-lg-2 text-center p-3' key={i}>
                <a href={profileUrlPrefix + user.username}>
                  <img src={imgUrlPrefix + user.username} className='profile-image rounded mb-2' alt="" />
                  <br />
                  <span>{user.username}</span>
                </a>
                <br />
                <span>{user.fullname}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}