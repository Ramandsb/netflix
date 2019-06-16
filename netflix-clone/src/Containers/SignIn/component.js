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
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import fontSize from '../../Assets/font'
import colors from '../../Assets/colors'
import sizes from '../../Assets/sizes'
import Media from 'react-media';



const Container = styled(Grid)`
          background-color:black;

`

const ImageWrapper = styled(Grid)`
        width:100%;
        height:150vh;
        background-image:url(${backgroundImage})
        
`
const Overlay = styled(Grid)`
        position:absolute
        z-index:1
        width:100%;
        height:150vh;
        background:rgba(0,0,0,0.6) 
`
const LogoImage = styled.img`
    width:230px;
    height:100px;
    position:absolute;
    left:0;
`
const FormWrapper = styled(Grid)`
    width:500px;
    height:600px;
    background-color:rgba(0,0,0,0.7);
    @media(max-width:${sizes.tab}){
        width:100%;
    }
    padding:50px 70px
    
`

const SigninText = styled.h1`
    color:white;
    font-size:3.5rem;
    font-weight:700
    line-height:1;
    @media(max-width:${sizes.laptop}){
        font-size:6.8rem;
    }
    @media(max-width:${sizes.tab}){
        font-size:4.8rem;
    }
    @media(max-width:${sizes.phone}){
        font-size:2.8rem;
    }
`
const TextFieldWrapper = styled(Grid)`
    background-color:#333
    height:55px;
    border-radius:3px
    margin-top:30px

`
const WatchFreeButtonSmall = styled.button`
    background-color:green;
    border-radius:3px
    color:white
    font-size:1.8rem
    font-weight:700
    background-color:${colors.primaryColor}
    border:none
    cursor:pointer
    box-shadow: 0 1px 0 rgba(0,0,0,0.45)
    display: block;
    transition: 0.5s all ease-out;
    padding:15px
    width:100%
    margin-top:15%
    &:hover {
        opacity:0.8
      }
`



class SignIn extends Component {

    constructor(props) {
        super();
        this.state = {
            selectedTab: 0,
            name: '',
            password: ''
        }
    }
    _handleTextFieldChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    _handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }


    render() {
        const { classes } = this.props;

        return (
            <Container container xs={12}>
                <ImageWrapper container xs={12}>
                    <Overlay xs={12}>
                        <Grid container xs={12} direction='coulmn'>
                            <Grid container xs={12}>
                                <LogoImage src={logo} />
                            </Grid>
                            <Grid container xs={12} justify='center' style={{ marginTop: 100 }}>
                                <FormWrapper>
                                    <SigninText>
                                        Sign In
                                    </SigninText>

                                    <TextFieldWrapper container xs={12}>
                                        <Input
                                            defaultValue=""
                                            placeholder='Email or phone number'
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            disableUnderline={true}
                                            onChange={this._handleTextFieldChange}
                                            required
                                            style={{ fontSize: '18px', color: 'white' }}
                                            value={this.state.name}
                                        />
                                    </TextFieldWrapper>
                                    <TextFieldWrapper container xs={12} style={{ marginTop: 20 }}>
                                        <Input
                                            defaultValue=""
                                            placeholder='Password'
                                            className={classes.input}
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            disableUnderline={true}
                                            onChange={this._handlePasswordChange}
                                            type="password"
                                            value={this.state.password}
                                            style={{ fontSize: '18px', color: 'white' }}
                                        />
                                    </TextFieldWrapper>




                                    <WatchFreeButtonSmall onClick={() => alert(this.state.name)}>
                                        Sign In
                                    </WatchFreeButtonSmall>
                                    <Grid container xs={12} style={{ marginTop: 10 }} justify='space-between'>
                                        <p style={{ color: '#b3b3b3', fontWeight: '500' }}>Remember me</p>
                                        <p style={{ color: '#b3b3b3', fontWeight: '500' }}>Need help?</p>
                                    </Grid>
                                </FormWrapper>
                            </Grid>
                        </Grid>
                    </Overlay>
                </ImageWrapper>
            </Container>
        );
    }

}
const styles = theme => ({

    input: {
        marginLeft: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(SignIn);





// style="background-size: cover; background-image: url("https://image.tmdb.org/t/p/original//iuiaAx5wNlbDCAO0wiQy0RIlUt.jpg"); background-position: center center;"