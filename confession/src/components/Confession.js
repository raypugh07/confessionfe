import React, { Component } from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from 'semantic-ui-react';
  import './Confession.css'
  import Confessional from './confessional.jpg'
  import axios from 'axios'


export default class Confession extends Component {
    constructor(props){
        super(props);
        this.state={
            task:{
                confession:""
            }
        }
    }

    inputHandler=e=>{
        this.setState({
            ...this.state,
            task:{
                ...this.state.task,
                [e.target.name]:e.target.value
            }
        })
    }

    addHandler=e=>{
        e.preventDefault();
        axios
        .post(`https://raypugh07-confessions.herokuapp.com/confessions/confessions`,this.state.task)
        .then(res=>{
            console.log(res);
            this.setState({
                ...this.state,
                task:{
                    confession:""
                  
                }
                
            })
        })
        
        
    }
    
    render() {
        return (
           <div><Header as="h2" textAlign="center">
               <img className='confessional' alt='confessional' src={Confessional}></img>
          </Header>
         
            <div className='form'> 
           <Form size="small">
               <Form.Input
               fluid
               icon="chess king"
               iconPosition="left"
               value={this.state.confession}
               onChange={this.inputHandler}
               placeholder='Confess your sins my child...'
               />
               <Button onClick={e=>this.addHandler(e)} color='blue' fluid size='medium'>You are forgiven.</Button>
           </Form>
           </div>
           </div>
        )
    }
}