import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "./context";

class Users extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { users } = value;
          return (
            <React.Fragment>
              {users.map((user) => (
                <Contact key={user.id} user={user} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Users;
