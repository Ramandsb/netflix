import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components'
import logo from '../../Assets/images/logo.png'
import backgroundImage from '../../Assets/images/background.jpg'
import colors from '../../Assets/colors'
const Container = styled(Grid)`
   background-color:black;
`
const ImageBackground = styled(Grid)`
background-color:black;
height:93vh;
background-image: url(${backgroundImage});

`
const Topbar = styled(Grid)`
    width:100%; 
    
`
const LogoImage = styled.img`
    width:230px;
    height:100px
    position:absolute
    left:50%
    transform:translate(-50%)
    
`
const BackgroundImage = styled.img`
    width:100%;
    height:93vh;
`
const SigninButton = styled.button`
    width:100px 
    height:35px;
    background-color:green;
    border-radius:3px
    color:white
    font-size:1.8rem
    background-color:${colors.primaryColor}
    border:none
    position:absolute
    right:40px
    top:20px;
    cursor:pointer
    box-shadow: 0 1px 0 rgba(0,0,0,0.45)
    display: block;
    transition: 0.5s all ease-out;
    &:hover {
        opacity:0.8
      }
`
const WatchFreeButton = styled.button`
    width:40% 
    height:100px
    background-color:green;
    border-radius:3px
    color:white
    font-size:2.3rem
    background-color:${colors.primaryColor}
    border:none
    cursor:pointer
    box-shadow: 0 1px 0 rgba(0,0,0,0.45)
    display: block;
    transition: 0.5s all ease-out;
    text-transform:uppercase
    margin-top:5%
    &:hover {
        opacity:0.8
      }
`
const ContentContainer = styled(Grid)`
    width:100%; 
    margin-top:10%;
    flex-direction:column
`
const SeeWhatText = styled.h1`
    color:white;
    font-size:8.8rem;
    font-weight:700
    line-height:1;
    text-align:center
`
const SubHeading = styled.h3`
    color:white;
    font-size:3rem;
    font-weight:500
    line-height:1;
    text-align:center
   
`
const Overlay = styled(Grid)`
      position:absolute;
      z-index:1;
      width:100%
      height:93vh;
      background:rgba(0,0,0,0.7)
      
      
`
const TabsItemContainer = styled(Grid)`
      height:140px
      padding:10px;
      border-bottom:${colors.primaryColor} 4px solid
      &:hover {
          color:white;
          cursor:pointer
      }
`
const IconsText = styled.p`
    font-size:2rem;
    font-weight:700
    line-height:1;
    text-align:center
    margin-top:20px
`


class LandingPage extends Component {
    render() {
        return (
            <Container container xs={12}>
                <ImageBackground container xs={12}>
                    <Overlay>
                        <Topbar container xs={12}>
                            <LogoImage src={logo} />
                            <SigninButton>
                                Sign In
                        </SigninButton>
                        </Topbar>
                        <ContentContainer container xs={12} justify='center' alignContent='center'>
                            <SeeWhatText>
                                See what’s next.
                        </SeeWhatText>
                            <SubHeading>
                                WATCH ANYWHERE. CANCEL ANYTIME.
                        </SubHeading>
                            <Grid container xs={12} justify='center' alignContent='center'>
                                <WatchFreeButton>
                                    Watch Free for 30 days >
                        </WatchFreeButton>
                            </Grid>
                        </ContentContainer>
                    </Overlay>
                </ImageBackground>
                <Grid container xs={12} style={{ backgroundColor: '#141414', paddingTop: '2%', paddingBottom: '2%' }}
                    justify="center"
                    alignItems="center">
                    <Grid container xs={12} style={{ backgroundColor: '#141414' }}
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <TabsItemContainer container xs={3} justify='center' alignItems='center' direction='column'>
                            <i class="fas fa-door-open fa-3x"></i>
                            <IconsText>
                            No commitments
                            Cancel online at anytime
                            </IconsText>
                        </TabsItemContainer>
                        <TabsItemContainer container xs={3} justify='center' alignItems='center' direction='column'>
                            <i class="fas fa-tablet-alt fa-3x"></i>
                            <IconsText>Watch anywhere</IconsText>
                        </TabsItemContainer>
                        <TabsItemContainer container xs={3} justify='center' alignItems='center' direction='column'>
                            <i class="fas fa-tags fa-3x"></i>
                            <IconsText>Pick your price</IconsText>
                        </TabsItemContainer>
                    </Grid>
                </Grid>
            </Container>
        );
    }

}

export default LandingPage