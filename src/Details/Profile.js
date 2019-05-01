import React from "react";

export default function Profile({ id, name, avatar, location, date }) {
  return (
    <div className="profile card">
      <h3 className="profile__name">{name}</h3>
      <div className="profile__avatar">
        <img className="profile__avatar-image" src={avatar} />
      </div>
      <div className="profile__description">
        <div>
          <strong>User ID:</strong> {id}
        </div>
        <div>
          <strong>Location:</strong> {location}
        </div>
        <div>
          <strong>Creation Date:</strong> {date}
        </div>
      </div>
    </div>
  );
}
