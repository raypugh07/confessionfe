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


export default class Confession extends Component {
    render() {
        return (
           <div><Header as="h2" textAlign="center">
               <img className='confessional' alt='confessional' src={Confessional}></img>
          </Header>
         
            <div className='form'> 
           <Form size="medium">
               <Form.Input
               fluid
               icon="chess king"
               iconPosition="left"
               placeholder='Confess your sins my child...'
               />
               <Button color='blue' fluid size='medium'>You are forgiven.</Button>
           </Form>
           </div>
           </div>
        )
    }
}
