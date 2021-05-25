import React, {  } from 'react'
import styled from 'styled-components'
import appStore from '../../images/appStore.png'
import playStore from '../../images/playStore.png'
import {FacebookLogin, GoogleLogin, GithubLogin} from '../UserFunctions/Login'

import instaLogo from '../../images/instagramLogo.jpeg'

function LoginRegister() {

    return (

        <LoginRegisterContainer>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
            </style>    

            <LoginContainer>
                <h1>Instagram</h1>
                <img src={instaLogo} alt="Avatar"/>
                <button onClick={GoogleLogin}>
                    Login With Google
                </button>
                <button onClick={GithubLogin}>
                    Login With Github 
                </button>
                <button onClick={FacebookLogin}>
                    Login With Facebook 
                </button>
            </LoginContainer>

            <AppContainer>
                <p>Get the App.</p>
                <img src={appStore} alt="App Store App"/>
                <img src={playStore} alt="Play Store App"/>
            </AppContainer>

        </LoginRegisterContainer>
    )
}


const LoginRegisterContainer = styled.div`
    
`

const LoginContainer = styled.div`
    border: 1px solid lightgray;
    padding:20px;
    margin: 20px;
    width: 100%;
    background-color: white;
    display: grid;
    justify-content: center;
    align-items: center;

    @media(max-width: 600px){
        padding: 0px;
        margin: 0px
    }

    > h1 {
        font-family: 'Pattaya', sans-serif;
        align-items: center;
        margin-left: 15%;
    }
    > img {
        display: flex;
        border-radius: 50%;
        height: 84px;
        width: 84px;
        align-items: center;
        margin-bottom: 16px;
        margin-left: 28%;
    }

    >h3{
        text-align: center;
    }

    > button{
        margin:5px;
        color: white;
        font-weight: bold;
        border: none;
        padding: 8px;
        border-radius: 100px;
        cursor:pointer;
        text-transform: capitalize;
        background-color: #0095f6;
        background-color: rgba(var(--d69,0,149,246),1);
    }

`

const AppContainer = styled.div`
    width: 80%;
    margin-left: 80px;
    text-align:center;

    @media(min-width: 375px){
        margin-left: 40px;
    }

    > p {
        padding: 0px;
        margin: 2px;
    }

    > img {
        height: 40px;
        width: 100px;
        object-fit: contain;
        margin:5px;
    }

`


export default LoginRegister
