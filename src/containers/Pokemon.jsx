import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Col,
  Container,
  Row
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Pokemon = ({ pokemon }) => (
  <div>
    <NavLink to={`/pokemon/${pokemon.id}`}>
      <Card>
        <CardBody>
          <CardSubtitle>{pokemon.name}</CardSubtitle>
          <img src={pokemon.imageUrl} alt="Carte Pokemon" />
        </CardBody>
      </Card>
    </NavLink>
  </div>
);

export default Pokemon;
