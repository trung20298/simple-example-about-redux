import React, { Component } from "react";
import { connect } from "react-redux";

const ADD_TEXT = "ADD_TEXT";

const add_text = (newText) => {
  return {
    type: ADD_TEXT,
    value: newText,
  };
};

const mapStateToProps = (state) => {
  return {
    newTexts: state,
    newTexts2: state[0],
  };
};

class addNewText extends Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    // this.setState({
    //   input: e.target.value,
    // });
    this.text = e.target.value;
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>{this.state.input}</h1>
        <input
          type="text"
          name="todo"
          onChange={(e) => {
            return this.handleChange(e);
          }}
        />
        <button
          onClick={() => {
            return this.props.dispatch(add_text(this.text));
          }}
        >
          Add
        </button>
        <ul>
          {this.props.newTexts &&
            this.props.newTexts.map((newText) => {
              return (
                <li>
                  {newText},{this.props.newTexts2}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(addNewText);
