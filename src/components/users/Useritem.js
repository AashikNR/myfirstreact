import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Useritem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      ></img>
      <h2>{login}</h2>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark my-1 btn-sm'>
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default Useritem;
