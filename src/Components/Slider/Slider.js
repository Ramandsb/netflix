import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/images/logo.png'
import './styles.css'




class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

   


    render() {
        const {movies}  = this.props
        return (
            <div class="container">
            {movies.map((item)=>{
                    return <div class="item">
                            <img src={item.Images[0]} style={{width:'250px',height:'150px'}} />
                        </div>
                })}
                
            </div>
        )
    }

}

export default Slider;