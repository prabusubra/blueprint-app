import React, { Component } from "react";
import AttrTempForm from "./AttrTempForm";
import AttrSubmit from "./AttrSubmit";
import FlatTable from "../FlatTable/FlatTable";

class createattr extends React.Component {
  state = {
    showComponent: false,
    data: []
  };
  doattronclick = () => {
    this.setState({
      showComponent: true
    });
  };

  handleOnSubmit = () => {
    console.log(" On Submit...");
    this.setState({
      showComponent: false
    });
  };
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ data: json });
      });
  }

  render() {
    let header = ["postId", "id", "name", "email", "body"];
    /*let data = [
      { name: "prabu", id: "001", city: "Blore", pin: "560028" },
      { name: "Ram", id: "002", city: "chennai", pin: "560028" },
      { name: "Bill", id: "003", city: "CA", pin: "7368" }
    ];*/

    return (
      <div>
        <button className="btn btn-primary m-4" onClick={this.doattronclick}>
          Create
        </button>
        {!this.state.showComponent ? (
          <FlatTable header={header} data={this.state.data} />
        ) : null}
        {this.state.showComponent ? <AttrTempForm /> : null}
        {this.state.showComponent ? (
          <AttrSubmit onSubmit={this.handleOnSubmit} />
        ) : null}
      </div>
    );
  }
}
export default createattr;
