import React, { useState } from 'react'
import styled from 'styled-components'
import image from './../../images/Instagram.jpg'
import LoginRegister from './LoginRegister'
import HomeFooter from './HomeFooter'

function Home() {

    return (
        <HomeContainer>
            <ContentContainer>
                <img src={image} alt="Instagram"/>
                <LoginRegisterContaier>
                    <LoginRegister/>
                </LoginRegisterContaier>
            </ContentContainer>
            <HomeFooter/>
        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    background-color: #fafafa;
    background-color: rgba(var(--b3f,250,250,250),1);
    width: 100%;
    height: 98vh;
`

const LoginRegisterContaier = styled.div`

`
const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    margin-top: 20px;
    padding: 20px;
    align-items: center;

    @media(max-width: 600px){
        grid-template-columns: auto;
        
        > img {
            display: none;
        }
    }

    > img{
        width: 450px;
        height: 600px;
        object-fit:cover;
        border-radius: 40px;
    }
`
