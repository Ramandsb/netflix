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
const WatchFreeButtonSmall = styled.button`
    background-color:green;
    border-radius:3px
    color:white
    font-size:1.8rem
    background-color:${colors.primaryColor}
    border:none
    cursor:pointer
    box-shadow: 0 1px 0 rgba(0,0,0,0.45)
    display: block;
    transition: 0.5s all ease-out;
    text-transform:uppercase
    margin-top:3%
    padding:15px
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

const NoCommitText = styled.h4`
    color:white;
    font-size:2.4rem;
    font-weight:500
    line-height:1;
    text-align:${props => props.center ? "center" : "flex-start"}
    
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
      border-bottom:${props => props.selected ? `${colors.primaryColor} 4px solid` : ''}
      color:${props => props.selected ? "white" : "dark-gray"}
      &:hover {
          color:white;
          cursor:pointer
      }
`
const IconsText = styled.p`
    font-size:1.8rem;
    font-weight:700
    line-height:1;
    text-align:center
    margin-top:20px
`
const NoCommitImage = styled.img`
      width:65%;
      height:100%
   
`
const WatchAnywhereImage = styled.img`
      width:50%%;
      height:50%
`
const Td = styled.td`
color:${colors.textGray}
padding:0.8rem 1.2rem
text-align:${props => props.notcenter ? "" : "center"};
`
const Thead = styled.thead`
color:white
text-transform:uppercase
padding:0.8rem
text-align:center
`
const Th = styled.th`
color:white
padding:0.8rem 1.2rem
text-align:center
`
const Tr = styled.tr`
background-color:${props=> props.even ? "#222" : ""}
`




class LandingPage extends Component {

    constructor(props) {
        super();
        this.state = {
            selectedTab: 0
        }
    }
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
                <Grid container xs={12} style={{ backgroundColor: '#141414', paddingTop: '2%' }}
                    justify="center"
                    alignItems="center">
                    <Grid container xs={12} style={{ backgroundColor: '#141414' }}
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <TabsItemContainer
                            container
                            xs={3}
                            justify='center'
                            alignItems='center'
                            direction='column'
                            selected={this.state.selectedTab === 0}
                            onClick={() => this.setState({ selectedTab: 0 })}>
                            <i class="fas fa-door-open fa-3x"></i>
                            <IconsText>
                                No commitments
                                Cancel online at anytime
                            </IconsText>
                        </TabsItemContainer>
                        <TabsItemContainer
                            selected={this.state.selectedTab === 1}
                            container xs={3} justify='center' alignItems='center' direction='column' onClick={() => this.setState({ selectedTab: 1 })}>
                            <i class="fas fa-tablet-alt fa-3x"></i>
                            <IconsText>Watch anywhere</IconsText>
                        </TabsItemContainer>
                        <TabsItemContainer
                            selected={this.state.selectedTab === 2}
                            container xs={3} justify='center' alignItems='center' direction='column' onClick={() => this.setState({ selectedTab: 2 })}>
                            <i class="fas fa-tags fa-3x"></i>
                            <IconsText>Pick your price</IconsText>
                        </TabsItemContainer>
                    </Grid>
                </Grid>
                {this.state.selectedTab === 0 ? <Grid container xs={12} direction='row' alignContent='center' justify='center' style={{ marginTop: 50 }}>
                    <Grid container xs={6} direction='column' justify='center' alignItems='center' style={{}}>
                        <Grid xs={12} lg={6} direction='column' justify='center' alignItems='center' style={{}}>
                            <NoCommitText>
                                If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.
                            </NoCommitText>
                            <WatchFreeButtonSmall>
                                Watch Free for 30 days
                            </WatchFreeButtonSmall>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} lg={6} justify='center' alignContent='center'>
                        <NoCommitImage src={no_commitment} />
                    </Grid>
                </Grid> : null}
                {this.state.selectedTab === 1 ? <Grid container xs={12} style={{}} justify='center' alignContent='center' >
                    <Grid container xs={9} style={{ height: 200 }} justify='center' alignContent='center' direction='column'>
                        <Grid container direction='row' lg={12}>
                            <Grid container lg={6} justify='center' alignItems='center' style={{}}>
                                <NoCommitText>
                                    If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.
                                </NoCommitText>
                            </Grid>
                            <Grid container lg={6} justify='center' alignItems='center' style={{}}>
                                <WatchFreeButtonSmall>
                                    Watch Free for 30 days
                                </WatchFreeButtonSmall>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} justify='center' alignContent='center' style={{}}>
                        <Grid container xs={9} style={{}}>
                            <Grid container xs={12} lg={4} style={{}} justify='center' alignContent='center'>
                                <WatchAnywhereImage src={tv1} />
                                <NoCommitText center>
                                    Watch on your TV
                                </NoCommitText>
                            </Grid>
                            <Grid container xs={12} lg={4} style={{}} justify='center' alignContent='center'>
                                <WatchAnywhereImage src={tv2} />
                                <NoCommitText center>
                                    Watch instantly or download for later
                                </NoCommitText>
                            </Grid>
                            <Grid container xs={12} lg={4} style={{}} justify='center' alignContent='center'>
                                <WatchAnywhereImage src={tv3} />
                                <NoCommitText center>
                                    Use any computer
                            </NoCommitText>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> : null}
                {this.state.selectedTab === 2 ?
                    <Grid container xs={12} lg={12} justify='center' alignContent='center'>
                        <Grid container xs={9} style={{ marginTop: 100 }} justify='center' alignContent='center' direction='column' >
                            <Grid container direction='column' lg={12} justify='center' alignContent='center' >
                                <Grid container lg={6} justify='center' alignItems='center' style={{}}>
                                    <NoCommitText>
                                        Choose one plan and watch everything on Netflix.
                                    </NoCommitText>
                                </Grid>
                                <Grid container lg={6} justify='center' alignItems='center' style={{}}>
                                    <WatchFreeButtonSmall>
                                        Watch Free for 30 days
                                    </WatchFreeButtonSmall>
                                </Grid>
                            </Grid>
                            <Grid container direction='column' lg={12} style={{ marginTop: 50 }}>
                                <table>
                                    <Thead>
                                        <tr>
                                            <Th></Th>
                                            <Th>BASIC</Th>
                                            <Th>STANDARD</Th>
                                            <Th>PREMIUM</Th>
                                        </tr>
                                    </Thead>
                                    <tbody>
                                        <Tr>
                                            <Td notcenter>Monthly price after free 30 days end on 13/07/19</Td>
                                            <Td>$9.99</Td>
                                            <Td>$13.99</Td>
                                            <Td>$16.99</Td>
                                        </Tr>
                                        <Tr even>
                                            <Td notcenter>HD available</Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-check'></i></Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                        </Tr>
                                        <Tr>
                                            <Td notcenter>Ultra HD available</Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-check'></i></Td>
                                        </Tr>
                                        <Tr even>
                                            <Td notcenter>Screens you can watch on at the same time</Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-check'></i></Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                        </Tr>
                                        <Tr>
                                            <Td notcenter>Unlimited movies and TV shows</Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-check'></i></Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                        </Tr>
                                        <Tr even>
                                            <Td notcenter>Cancel anytime</Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-check'></i></Td>
                                        </Tr>
                                        <Tr>
                                            <Td notcenter>First 30 days free</Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-times'></i></Td>
                                            <Td><i class='fas fa-check'></i></Td>
                                        </Tr>
                                    </tbody>
                                </table>
                            </Grid>
                        </Grid>
                    </Grid> : null}

            </Container>
        );
    }

}

export default LandingPage