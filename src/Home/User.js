import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function User({ id, avatar, name, reputation }) {
  return (
    <li>
      <Link to={`/user/${id}`} className="user card">
        <div className="user__avatar">
          <img className="user__avatar-image" src={avatar} />
        </div>
        <div className="user__details">
          <div>
            <strong>Name: </strong>
            <span className="user__name">{name}</span>
          </div>
          <div>
            <strong>Reputation: </strong>
            <span className="user__reputation">{reputation}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reputation: PropTypes.number.isRequired
};
