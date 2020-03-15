/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import api from '../../services/pokeapi'
import './styles.css'
import { Link, withRouter } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';

export default class Main extends Component {
  state = {
    captures: [], 
    captureInfo: {},
    page: 1,
    img:[]
  }
  
  componentDidMount(){
    this.loadCaptures();
  }

  loadCaptures = async(page = 1) => {
    const response = await api.get(`/captures?page=${page}`);
    
    const { docs, ...captureInfo } = response.data;

    this.setState({captures: docs, captureInfo, page });
    console.log(this.state.docs)
  };

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
/*
  loadImage = async() => {
    console.log(this.state.captures.map(capture=>
      capture.pokemon));
    const responseInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.captures.map(capture=>
    capture.pokemon)}`);
    console.log(responseInfo)
  }
*/

  prevPage = () => {
    const { page, captureInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadCaptures(pageNumber)
  }



  nextPage = () => {
    const { page, captureInfo } = this.state;

    if( page === captureInfo.pages) return;

    const pageNumber = page + 1;

    this.loadCaptures(pageNumber);
  };

  render(){
    const { captures, page, captureInfo } = this.state

  return (
      <div className="capture-list">
        <h1 align="center">Captured Pokemons</h1>
        <Row>
        {captures.map(capture =>
          <article key={capture._id}>
            <Col>Image</Col>
            <Col><strong>{this.Capitalize(capture.pokemon)}</strong>
            <p>{capture.moveList.map((move, id) => 
              <li key={id}>{this.Capitalize(move)}</li>)}
            </p></Col>
          </article>         
          )}
        </Row>
          <div className="actions">
            <button disabled={page === 1} onClick={this.prevPage}>
              Previous
            </button>
              <Link to="/captures" style={{
                padding:"10px",
                borderRadius:"5px",
                border:"0",
                background: "#da552f",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer"
              }}>New Captures</Link>
            <button disabled={page === captureInfo.pages}onClick={this.nextPage}>
              Next
            </button>
          </div>
      </div>
    )
  }
}