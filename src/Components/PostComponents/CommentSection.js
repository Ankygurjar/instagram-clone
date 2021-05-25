import React from 'react'
import styled from 'styled-components'
import Comments from './Comments'

function CommentSection() {
    return (
        <CommentSectionContainer>
            <Comments/>
            <CommentInput>
                <form>
                    <input placeholder="Add a comment"/>
                    <button type="submit">Post</button>
                </form>
            </CommentInput>
        </CommentSectionContainer>
    )
}

export default CommentSection

const CommentSectionContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-gap: 5px;
`

const CommentInput = styled.div`
    border-top: 1px solid lightgray;
    > form{
        margin: 5px;
        display: grid;
        grid-template-columns: 80% 10%;
        > input{
            border: none;
            margin-right: 5px;
            box-sizing: border-box;
            outline: none;
        }

        > button{
            border: none;
            background-color: transparent;
            color: #0095f6;
            font-weight: 800;
            font-size: 0.9em;
            grid-column: end;
        }
    }
`

