import React, { useState } from 'react'
import styled from 'styled-components'
import Comments from './Comments'
import { db } from '../../firebase'
import { useDocument } from 'react-firebase-hooks/firestore'

function CommentSection({ postId, userId, userName }) {

    const [ comment, setComment ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection("comments")
        .add({
            comment:comment,
            postId: postId,
            by: userName,
            userId: userId
        })
    }

    const [ comments ] = useDocument(
        postId && 
        db.collection("comments")
        .where("postId", "==", postId)
    )


    return (
        <CommentSectionContainer>
            {comments?.docs.map((doc)=>{
                return(
                    <Comments 
                        key={doc.id}
                        comment={doc.data()}
                    />
                )
            })}
            <CommentInput>
                <form>
                    <input placeholder="Add a comment" onChange={
                        (e) => {
                            e.preventDefault();
                            setComment(e.target.value)
                        }
                    }/>
                    <button type="submit" onClick={handleSubmit}>Post</button>
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
            cursor: pointer;
        }
    }
`

