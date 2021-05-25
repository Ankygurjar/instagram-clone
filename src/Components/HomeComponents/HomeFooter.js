import React from 'react'
import styled from 'styled-components'

function HomeFooter() {
    return (
        <HomeFooterContainer>
            <button>About</button>
            <button>Blog</button>
            <button>Jobs</button>
            <button>Help</button>
            <button>API</button>
            <button>Privacy</button>
            <button>Terms</button>
            <button>Top Accounts</button>
            <button>HashTags</button>
            <button>Locations</button>
            <p>English    &nbsp; &nbsp; &copy; &nbsp; 2021 Instagram By AnkyGurjar</p>
        </HomeFooterContainer>
    )
}

const HomeFooterContainer = styled.div`
    text-align: center;
    > button{
        border: none;
        padding: 5px;
        margin: 5px;
    }

    > button, > p{
        background-color: transparent;
        color: gray;
        font-size: 0.7em;
    }
`

export default HomeFooter
