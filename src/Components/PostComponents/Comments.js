import React from 'react'
import styled from 'styled-components'

function Comments() {
    return (
        <CommentsContainer>
            <b>
                Commentor
            </b>
            <span>
                This is amazing guys!!!!!
            </span>
        </CommentsContainer>
    )
}

export default Comments

const CommentsContainer = styled.div`
    text-transform: lowercase;
    margin: 5px;
    > span{
        margin-left: 5px;
    }
`

