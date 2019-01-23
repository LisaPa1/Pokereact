import React, { Component } from "react";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { select } from "../actions/index";
import LastSeen from "../components/LastSeenComp";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      image: null,
      rarity: null
    };
    this.id = this.props.match.params.id;
  }

  componentWillMount() {
    axios.get(`https://api.pokemontcg.io/v1/cards/${this.id}/`).then(result => {
      this.setState({
        id: result.data.card.id,
        name: result.data.card.name,
        image: result.data.card.imageUrl,
        rarity: result.data.card.rarity
      });
    });
  }

  buttonBack = () => {
    this.props.history.goBack();
    this.props.select(this.state.id);
    console.log(this.state.id);
  };

  /*   goBack = () => {
    this.props.history.goBack();
  }; */

  render() {
    console.log(this.state.name);

    return (
      <div>
        <h1>C'esl le Pokemon {this.state.name}</h1>
        <h2>Rareté : {this.state.rarity}</h2>
        <img src={this.state.image} alt="/" />
        <button onClick={this.buttonBack}>
          {/* () => this.props.select(this.state.name)} */}
          Bouton retour
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => ({
  select: id => {
    dispatch(select(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
