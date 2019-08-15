import React, { Component } from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,Divider
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

   /* inputHandler=e=>{
        this.setState({
            ...this.state,
            task:{
                ...this.state.task,
                [e.target.name]:e.target.value
            }
        })
    }*/

   /* addHandler=e=>{
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
        
        
    }*/

    //refactored handlers trying to find error preventing form from refreshing...problem is a combination
    //of Form component from React UI and prevent default on add handler

    inputHandler=event=>{
        this.setState({[event.target.name]:event.target.value})
       
    }

    addHandler(event){
       // event.preventDefault();
        axios
        .post(`https://raypugh07-confessions.herokuapp.com/confessions/confessions`,{
            confession:this.state.confession
        })
        .then(res=>{console.log(res)
        })
        .catch(err=>console.log(err))
    }

    

    
    render() {
        return (
           <div><Header as="h2" textAlign="center">
               <img className='confessional' alt='confessional' src={Confessional}></img>
          </Header>
          <Divider hidden />
            <div className='form'> 
           <form  onSubmit={e=>this.addHandler(e)}  size="small">
               <Form.Input
               fluid
               icon="chess king"
               iconPosition="left"
               value={this.state.confession}
               onChange={this.inputHandler}
             
               placeholder='Confess your sins my child...'
               />
                <Divider hidden />
               <Button color='blue' fluid size='medium'>You are forgiven.</Button>
           </form>
           </div>
           </div>
          /* <form onSubmit={e=>this.addHandler(e)} > 
               <input
               value={this.state.confession}
               onChange={this.inputHandler}
               
               
               />
           </form>*/
        )
    }
}