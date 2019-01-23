import React, { Component } from "react";
import { connect } from "react-redux";

class LastSeenCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seenArray: [],
      idOne: null,
      idTwo: null,
      idThree: null
    };
  }

  componentWillMount() {
    this.setState({
      seenArray: this.props.seenPokemons,
      idOne: this.state.seenArray[0],
      idTwo: this.state.seenArray[1],
      idThree: this.state.seenArray[2]
    });
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>{this.props.seenPokemons}</h2>
        <p>1 : {this.state.idOne}</p>
        <p>2 : {this.state.idTwo}</p>
        <p>3 : {this.state.idThree}</p>
        <p>{this.state.seenArray[0]}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { seenPokemons: state.name.seenPokemons };
}

export default connect(mapStateToProps)(LastSeenCont);
