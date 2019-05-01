import React from "react";
import { connect } from "react-redux";
import Header from "../Common/Header";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import { getUser } from "./DetailsActions";
import s from "./DetailsStyles.css";

export class Details extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      users: { data }
    } = this.props;
    if (data.length === 0) {
      this.props.fetchUser(id, "stackoverflow");
    }
  }

  formatDate(date) {
    const d = new Date(date * 1000);
    return d.toDateString();
  }

  renderProfile(id, name, avatar, location, date) {
    return (
      <Profile
        id={id}
        name={name}
        avatar={avatar}
        location={location}
        date={this.formatDate(date)}
      />
    );
  }

  render() {
    return (
      <>
        <Header>User Details</Header>
        <Link to={`/`}>&lt; Go Back</Link>
        {this.props.userDetails !== null
          ? this.renderProfile(
              this.props.userDetails.user_id,
              this.props.userDetails.display_name,
              this.props.userDetails.profile_image,
              this.props.userDetails.location,
              this.props.userDetails.creation_date
            )
          : ""}
        {this.props.user.requesting === true &&
        this.props.user.successful === false ? (
          <p>Loading...</p>
        ) : (
          ""
        )}
        {this.props.user.data.length > 0 && this.props.userDetails === null
          ? this.renderProfile(
              this.props.user.data[0].user_id,
              this.props.user.data[0].display_name,
              this.props.user.data[0].profile_image,
              this.props.user.data[0].location,
              this.props.user.data[0].creation_date
            )
          : ""}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  users: state.users,
  userDetails:
    state.users.data.length > 0
      ? state.users.data.filter(
          user => user.user_id == ownProps.match.params.id
        )[0]
      : null
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id, site) => dispatch(getUser(id, site))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Details));
