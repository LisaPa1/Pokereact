import React, { Component } from "react";
import Pokemon from "../containers/Pokemon";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "reactstrap";
import LastSeen from "./LastSeenComp";

const styles = {
  pageNumContainer: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemons: [],
      pageNb: 0,
      pageSize: 10,
      totalPages: 1
    };
  }

  componentWillMount() {
    axios.get("https://api.pokemontcg.io/v1/cards").then(result => {
      console.log(result.data.cards[0]);

      this.setState({
        allPokemons: result.data.cards,
        totalPages: Math.floor(result.data.cards.length / this.state.pageSize)
      });
    });
  }

  render() {
    const { allPokemons, pageNb, pageSize, totalPages } = this.state;
    const first = pageNb * pageSize;
    const last = first + pageSize;
    const dummyArray = new Array(totalPages).fill(0);
    console.log(this.props.seenPokemons, "Liste redux");
    return (
      <div>
        <Container>
          <Row>
            <h1>Ca sera la liste des pokemons</h1>
          </Row>
          <Row>
            {allPokemons.slice(first, last).map((pokemon, id) => (
              <Col xs="4" sm="4" md="4">
                <Pokemon key={id} pokemon={pokemon} />
              </Col>
            ))}
            <Col xs="4" sm="4" md="4">
              <div style={styles.pageNumContainer}>
                {dummyArray.map((page, i) => (
                  <a
                    href="#"
                    onClick={() => this.setState({ pageNb: i + 1 })}
                    style={
                      i + 1 === pageNb ? styles.pageNb : styles.pageNumActive
                    }
                  >
                    {i}
                  </a>
                ))}
              </div>
            </Col>
            <Row>
              <LastSeen />
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PokemonList;
