import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./action";

export class Data extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h1>List Data</h1>
        <ul>
          {this.props.valueData.map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state:" + state);
  return {
    valueData: state.data,
  };
}

export default connect(mapStateToProps, { getData })(Data);
