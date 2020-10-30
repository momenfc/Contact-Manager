import Axios from "axios";
import React, { Component } from "react";
import { Consumer } from "../components/context";
import InputGroup from "./InputGroup";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    // chack fields
    if (name === "") {
      this.setState({ errors: { name: "Name Is Required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email Is Required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone Is Required" } });
      return;
    }
    const newUsers = {
      name,
      email,
      phone,
    };
    const res = await Axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUsers
    );

    dispatch({ type: "ADD_USER", payload: res.data });
    // clear fields
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <h2 className="card-header text-center">
                Add <span className="text-danger">User</span>
              </h2>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <InputGroup
                    label="Name"
                    name="name"
                    id="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <InputGroup
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <InputGroup
                    label="Phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
