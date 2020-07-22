import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

export class User extends Component {
  componentDidMount() {
    this.props.getuser(this.props.match.params.login);
    this.props.getuserrepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getuser: PropTypes.func.isRequired,
    getuserrepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      bio,
      location,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      hireable,
      company,
      public_gists,
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back
        </Link>
        Hireable : {""}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: "150px" }}
            ></img>
            <h1>{name}</h1>
            <p>Location : {location}</p>
          </div>
          <div className=' all-center'>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit guthub profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username : </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>company : </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>blog : </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers:{followers}</div>
          <div className='badge badge-success'>Following:{following}</div>
          <div className='badge badge-primary'>Public Repos:{public_repos}</div>
          <div className='badge badge-success'>Public gists:{public_gists}</div>
        </div>
        <Repos repos={this.props.repos} />
      </Fragment>
    );
  }
}

export default User;
