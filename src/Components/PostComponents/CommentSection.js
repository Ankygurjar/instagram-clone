import React, { useState } from 'react'
import styled from 'styled-components'
import Comments from './Comments'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/appSlice'
import { db, firebase } from '../../firebase'
import { useDocument } from 'react-firebase-hooks/firestore'

function CommentSection({ curUserId, postId }) {

    const [ comment, setComment ] = useState('')
    
    const user = useSelector(selectUser)
    const [ comments ] = useDocument(
        postId && 
        db.collection("comments")
        .where("postId", "==", postId)
        .limit(8)
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(postId !== null){
            db.collection("comments")
            .add({
                comment:comment,
                userId: curUserId,
                by: user.userName,
                postId: postId,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
                .then(()=>{setComment('')})
                .catch(err=>console.log(err.message))
                console.log(postId)
        }
    }

    return (
        <CommentSectionContainer>
            {comments?.docs.map((doc)=>{
                const {userId, by, comment} = doc.data()
                return(
                    <Comments
                        key={doc.id}
                        commentUserId={userId}
                        currentUserId={curUserId}
                        commentId={doc.id}
                        by={by}
                        comment={comment}
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

