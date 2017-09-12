import React from 'react';

const imgUrlPrefix = 'https://avatars.githubusercontent.com/';

const profileUrlPrefix = 'https://github.com/';

const TESTDATA = {
  "users": [
    {
      "id": "user-1437804",
      "gravatar_id": "",
      "username": "gregorywong",
      "login": "gregorywong",
      "name": "Greg Wong",
      "fullname": "Greg Wong",
      "location": "",
      "language": "Ruby",
      "type": "user",
      "public_repo_count": 16,
      "repos": 16,
      "followers": 6,
      "followers_count": 6,
      "score": 15.260887,
      "created_at": "2012-02-14T20:12:17Z",
      "created": "2012-02-14T20:12:17Z"
    },
    {
      "id": "user-3951771",
      "gravatar_id": "",
      "username": "gregwong",
      "login": "gregwong",
      "name": "Greg Wong",
      "fullname": "Greg Wong",
      "location": "",
      "language": "JavaScript",
      "type": "user",
      "public_repo_count": 4,
      "repos": 4,
      "followers": 0,
      "followers_count": 0,
      "score": 6.438832,
      "created_at": "2013-03-23T20:13:25Z",
      "created": "2013-03-23T20:13:25Z"
    },
    {
      "id": "user-11674328",
      "gravatar_id": "",
      "username": "gwongfraedom",
      "login": "gwongfraedom",
      "name": "Greg Wong",
      "fullname": "Greg Wong",
      "location": "",
      "language": null,
      "type": "user",
      "public_repo_count": 1,
      "repos": 1,
      "followers": 0,
      "followers_count": 0,
      "score": 3.958991,
      "created_at": "2015-03-27T03:08:58Z",
      "created": "2015-03-27T03:08:58Z"
    },
    {
      "id": "user-19279639",
      "gravatar_id": "",
      "username": "Gregory8912",
      "login": "Gregory8912",
      "name": "GregoryWong",
      "fullname": "GregoryWong",
      "location": "",
      "language": null,
      "type": "user",
      "public_repo_count": 0,
      "repos": 0,
      "followers": 0,
      "followers_count": 0,
      "score": 3.7945833,
      "created_at": "2016-05-10T05:52:58Z",
      "created": "2016-05-10T05:52:58Z"
    }
  ]
};

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: []
      users: TESTDATA.users
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {

      // const searchURL = `https://api.github.com/legacy/user/search/${nextProps.searchTerm}`;
      // fetch(myURL)
      //   .then((response) => response.json())
      //   .then((json) => {
      //     this.setState({
      //       users: json.users
      //     })
      //   })

      // testing only
      this.setState({
        users: TESTDATA.users
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
                <a href={`${profileUrlPrefix}${user.username}`}>
                  <img src={`${imgUrlPrefix}${user.username}`} className='profile-image rounded mb-2' alt="" />
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