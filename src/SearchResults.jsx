import React from 'react';

const searchUrlPrefix = 'https://api.github.com/legacy/user/search/';
const imgUrlPrefix = 'https://avatars.githubusercontent.com/';
const imgUrlSuffix = '?s=150'; // size control to avoid fetching really large images
const profileUrlPrefix = 'https://github.com/';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      users: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      this.setState({
        message: 'Searching...',
        users: []
      });
      const searchUrl = searchUrlPrefix + nextProps.searchTerm;
      fetch(searchUrl)
        .then((response) => response.json())
        .then((json) => {
          let users = json.users.map((user) => {
            const {username, fullname} = user;
            return {username, fullname};
          });
          this.setState({
            message: users.length === 0 ? 'No users found!' : '',
            users
          })
        })
    }
  }

  render() {
    const { users, message } = this.state;
    return (
      <div className="row m-3">
        <h1 className='col-12 text-center p-3'>
          {message}
        </h1>
        {
          users.map((user, i) => {
            return (
              <div className='col-6 col-sm-4 col-md-3 col-lg-2 text-center p-3' key={i}>
                <a href={profileUrlPrefix + user.username}>
                  <img src={imgUrlPrefix + user.username + imgUrlSuffix} className='profile-image rounded mb-2' alt="" />
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