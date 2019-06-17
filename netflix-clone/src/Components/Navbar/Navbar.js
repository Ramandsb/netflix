import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/images/logo.png'


const LogoImage = styled.img`
    width:130px;
    height:55px;
    margin-left:40px
`
const MenuUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display:flex
    justify-content:center
    align-items:center
    margin-left:28px
`
const MenuItem = styled.li`
    color:white
`
const MenuLink = styled(NavLink)`
    color:#e5e5e5;
    padding:10px;
    font-size:16px
    font-weight:500
    &:hover {
        text-decoration:none
        color:#b3b3b3
    }

   
`
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    /** changes the scrolling state depending on the Y-position */
    handleScroll = (event) => {
        if (window.scrollY === 0) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY > 50) {
            this.setState({ scrolling: true });
        }
    }


    render() {
        const NavbarContainer = styled(Grid)`
            width:100%;
            height:7.4rem
            background:${this.state.scrolling ? "#141414" : "transparent"}
            position:fixed
            transition-timing-function: ease-in;
            top:0
            z-index:1
            `
        return (
            <NavbarContainer container alignContent='center'>
                <Grid container direction='row' >
                    <NavLink exact to="/">
                        <LogoImage src={logo} />
                    </NavLink>
                    <MenuUl>
                        <MenuItem>
                            <MenuLink exact to="#">
                                Home
                            </MenuLink>
                        </MenuItem>
                        <li>
                            <MenuLink exact to="#">
                                TV Shows
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink exact to="#">
                                Movies
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink exact to="#">
                                Recently Added
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink exact to="#">
                                My List
                            </MenuLink>
                        </li>
                    </MenuUl>
                </Grid>
            </NavbarContainer>
        )
    }

}

export default Navbar;