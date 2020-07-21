import React, { Component } from "react";

class Useritem extends Component {
  render() {
    const { avatar_url, url, name } = this.props.user;
    return (
      <div className='card text-center'>
        <h2>{name}</h2>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        ></img>
        <div>
          <a href={url} className='btn btn-dark my-1 btn-sm'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default Useritem;
