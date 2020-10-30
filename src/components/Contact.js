import React, { Component } from "react";
import { Consumer } from "./context";
import Axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showUserInfo: false,
  };
  deleteUser = async (id, dispatch) => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.user;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body bg-light mb-3">
              <h4 className="card-title">
                {name}{" "}
                <i
                  className="fas fa-sort-down text-info"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.setState({ showUserInfo: !this.state.showUserInfo })
                  }
                />
                <i
                  className="fas fa-user-times float-right text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={this.deleteUser.bind(this, id, dispatch)}
                />
                <Link to={`/user/edit/${id}`}>
                  <i
                    className="fas fa-user-edit float-right text-warning mr-3"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </h4>
              {this.state.showUserInfo ? (
                <ul className="list-group mb-3">
                  <li className="list-group-item py-2 my-2 lead">
                    Email: {email}
                  </li>
                  <li className="list-group-item py-2 my-2 lead">
                    Phone: {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
