import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components'
import logo from '../../Assets/images/logo.png'
import backgroundImage from '../../Assets/images/background.jpg'
import no_commitment from '../../Assets/images/no_commitment.png'
import tv1 from '../../Assets/images/tv1.png'
import tv2 from '../../Assets/images/tv2.png'
import tv3 from '../../Assets/images/tv3.png'

import colors from '../../Assets/colors'
import sizes from '../../Assets/sizes'
import Media from 'react-media';
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'

// import Slider from "react-slick";

const Container = styled(Grid)`
background-color:#141414
`

const ImageContainer = styled(Grid)`
    background-size: cover; 
    background-image: url("https://occ-0-70-1001.1.nflxso.net/art/b05db/0d19e29c906227f9708817bdbb618d2058fb05db.webp"); 
    background-position: center center;
    width:100%;
    height:100vh
    box-shadow: 10px -50px 300px 100px #141414 inset
    @media(max-width:${sizes.laptop}){
        height:80vh
        box-shadow: 5px -25px 150px 50px #141414 inset

    }
    @media(max-width:${sizes.tab}){
        height:40vh
        box-shadow: 0 -15px 70px 25px #141414 inset
    }
`
const ImageOverlayContainer = styled(Grid)`
    margin-left:60px




`
const TitleImage = styled.img`
    width:35%;
    height:100%

`
const PlayButton = styled(Grid)`
    background-color: rgba(51,51,51,.4);
    border-radius: .2vw;
    font-size: 1.1vw;
    font-weight:600
    color:white
    padding:.75em 2.3em;
    margin:10px;
    border-radius:3px
    &:hover{
        background-color: #e6e6e6;
        color:black
    }
`
const Heading1Text = styled.p`
color: #fff;
margin-bottom: .8vw;
font-size: 1.6vw;
font-weight: 700;
`

const SubHeading1Text = styled.p`
color: #fff;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    font-size: 1.4vw;
    width:35%
`

const SliderContainers = styled(Grid)`
    width:100%;
    height:250px
    background-color:#141414
    overflow-x: scroll;
    
    
`
const MoviesTitle = styled.p`
    font-size:1.5em
    font-weight:bold
    color: white
    margin-left:13%
    margin-bottom:-15px
`


class MainPage extends Component {

    constructor(props) {
        super();
        this.state = {
            selectedTab: 0
        }
    }



    render() {
        const movies1 = require('./movies.json')
        const comedy = require('./comedy.json')

        return (
            <Container container xs={12}>
                <Navbar />
                <ImageContainer container alignContent='center'>
                    <ImageOverlayContainer container xs={12} justify='center' direction='column'>
                        <Grid container xs={11}>
                            <TitleImage src='https://occ-0-70-1001.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABeaeRYtHiOLmEbV_cJmHYXh5LtFhy7xFIgMmgVsSgfwXQM7hrWanUKSe5oRJEi6J9taYfCCfzkhOsLhE5TmA9Bnkv4hsxHJhqbidnCI1N7v-f5BW36Ji3UW02FR4roQh8RyEUe4cD0VwibVzVaMkMZjWyLbtUApZMnEsWloXNFKcT0FH49-lqomvMajrYM7WOXaFHo56lYHK_pNiF0Ns4Q4cts2UzkYM86iAs8L2wU1Tjd2MF9fPRz4EHZfOwJbcYdM.webp' />
                        </Grid>
                        <Grid container direction='center' style={{ marginTop: 20 }}>
                            <PlayButton>
                                <i class="fas fa-play" style={{ marginRight: 10 }}></i>
                                Play
                            </PlayButton>
                            <PlayButton>
                                <i class="fas fa-plus" style={{ marginRight: 10 }}></i>
                                My List
                            </PlayButton>
                            <PlayButton>
                                <i class="fas fa-clone" style={{ marginRight: 10 }}></i>
                                More Info
                            </PlayButton>
                        </Grid>
                        <Heading1Text>Watch Season 1 Now</Heading1Text>
                        <SubHeading1Text>Surveillance. Subjugation. Submission. In a future ruled by fear, one mother is on a quest for what’s left of her past.</SubHeading1Text>
                    </ImageOverlayContainer>
                    <Grid container alignContent='center'>

                    </Grid>
                </ImageContainer>
                <SliderContainers>
                    <div>
                        <MoviesTitle>Action Movies</MoviesTitle>
                        <Slider movies={movies1} />
                    </div>
                </SliderContainers>
                <SliderContainers style={{marginTop:50}}>
                    <div>
                        <MoviesTitle>Comedy Movies</MoviesTitle>
                        <Slider movies={comedy} />
                    </div>
                </SliderContainers>
                <Grid style={{width:'100%',height:300, backgroundColor:"#141414"}}>

                </Grid>
               
            </Container>
        );
    }

}

export default MainPage