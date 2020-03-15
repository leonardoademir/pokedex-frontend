import React, { Component } from 'react';
import api from '../../services/pokeapi'
import Select from 'react-select';
import axios from 'axios'
import shuffle from 'shuffle-array'
import { Form, Button, Image, ListGroup, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const con = axios.create();

export default class Capture extends Component {
  
  state={
    pokemons:[],
    selected_value: "",
    options: [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
  ],
    img:"",
    moves:[],
    capturedAt:""
  }


  componentDidMount(){
    this.loadPokemons();
  }

  loadPokemons = async() => {
    const response = await api.get(`/pokemons`);
    
    const pokemons = response.data;
    let options = pokemons.map( poke => ({ value: poke, label: poke }));

    console.log(pokemons);
    this.setState({pokemons, options});
    
  };

  handleChange = (selected_value) => {
    this.handleImageMoves(selected_value);
    console.log(selected_value.value)
    this.setState({selected_value})
    
  }

  handleSubmit = async() => {
    await api.post('/captures',{
      pokemon: this.state.selected_value.value,
      capturedAt: this.state.capturedAt,
      moveList: this.state.moves
    }).then(res=>{
      console.log(res.json)
    })
    alert('Salvou')

  }

  handleCaptureDate = (capturedAt) => {
    this.setState({capturedAt});
    console.log(this.state.capturedAt);
  }

  handleImageMoves = async(selected_value) => {
    const responseInfo = await con.get(`https://pokeapi.co/api/v2/pokemon/${selected_value.value}`);
    const img = responseInfo.data.sprites.front_default;
    shuffle(responseInfo.data.moves);
    const moves = responseInfo.data.moves.map((moves) => moves.move.name).slice(0, 4);
    console.log({name: moves.map(move => move)})
    this.setState({ img, moves });
  }

  sayHello = () => {
    alert('Lek')
  }


  render(){

    return (   
      <div className="container">
        
        <Container style={{padding:"10px", width:"240px"}} align="center">
        
          <Select
            key={this.state.pokemons._id}
            onChange={this.handleChange}
            options={this.state.options}
            autoFocus={true}
          />
        </Container>
        <Container>
          <Row>
            <Col align="center">
              <h2 align="center">Pokemon</h2>
              <Image src={this.state.img} height="240px" width="240px"></Image>
            </Col>
            <Col>
              <ListGroup>
                <h2 align="center">Moves</h2>
                {this.state.moves.map((move, id) => <ListGroup.Item key={id} align="center">{move}</ListGroup.Item>)}
              </ListGroup>
            </Col>
          </Row>
          
        
        <Form align="center">
            <Form.Group align="center">
              <Form.Label>Capture Date and time:</Form.Label>
              <Form.Control size="lg" style={{width:"300px", justifyContent:"center"}}type="datetime-local" placeholder="01/01/2020" 
              defaultValue={this.state.capturedAt} onChange={e => this.handleCaptureDate(e.target.value)}/>
            </Form.Group>
            <>
            <Button  onClick={this.handleSubmit} style={{fontSize:"20px", width:"140px"}}type="button" variant="warning">Capture</Button>
            <Link to="/" style={{
                marginLeft:"5px",
                padding:"10px",
                width:"140px",
                borderRadius:"5px",
                border:"0",
                background: "#da552f",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer"
              }}>Listar Capturas</Link>
          </>
          </Form>
          </Container>
      </div>
      
    ) 
  }
}

