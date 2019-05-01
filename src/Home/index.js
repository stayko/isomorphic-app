import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import withStyles from "isomorphic-style-loader/withStyles";
import { getUsers } from "./HomeActions";
import User from "./User";
import List from "./List";
import Header from "../Common/Header";
import s from "./HomeStyles.css";

export class Home extends React.Component {
  componentDidMount() {
    const {
      users: { data, requesting, successful }
    } = this.props;
    if ((data.length === 0) & !requesting & !successful) {
      this.props.fetchUsers("stackoverflow", "desc", "reputation", 1, 20);
    }
  }

  render() {
    const { data, requesting } = this.props.users;
    return (
      <>
        <Header>Top 20 Stack Overflow Users</Header>
        {requesting ? (
          <p>Loading...</p>
        ) : (
          <List>
            {data.map(user => (
              <User
                key={user.user_id}
                id={user.user_id}
                avatar={user.profile_image}
                name={user.display_name}
                reputation={user.reputation}
              />
            ))}
          </List>
        )}
      </>
    );
  }
}

Home.propTypes = {
  users: PropTypes.shape({
    requesting: PropTypes.boolean,
    successful: PropTypes.boolean,
    data: PropTypes.array,
    error: PropTypes.string
  }),
  fetchUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (site, order, sort, page, pageSize) =>
    dispatch(getUsers(site, order, sort, page, pageSize))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(s)(Home));
