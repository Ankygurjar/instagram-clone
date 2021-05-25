import React, { useState } from 'react'
import styled from 'styled-components'
import Comments from './Comments'
import { db } from '../../firebase'
import { useDocument } from 'react-firebase-hooks/firestore'

function CommentSection({ curUserId, postId, userId, userName }) {

    const [ comment, setComment ] = useState('')

    const [ comments ] = useDocument(
        postId && 
        db.collection("comments")
        .where("postId", "==", postId)
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        postId && db.collection("comments")
        .add({
            comment:comment,
            postId: postId,
            by: userName,
            userId: userId
        })
            .then(()=>{setComment('')})
            .catch(err=>console.log(err.message))
    }

    return (
        <CommentSectionContainer>
            {comments?.docs.map((doc)=>{
                return(
                    <Comments
                        curUserId={curUserId}
                        key={doc.id}
                        commentId={doc.id}
                        userId={userId}
                        comment={doc.data()}
                    />
                )
            })}
            <CommentInput>
                <form>
                    <input value={comment} placeholder="Add a comment" onChange={
                        (e) => {
                            e.preventDefault();
                            setComment(e.target.value)
                        }
                    }/>
                    <button disabled={!comment} type="submit" onClick={handleSubmit}>Post</button>
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

