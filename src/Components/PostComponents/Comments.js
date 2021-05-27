import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'

function Comments({comment, currentUserId, by, commentUserId, commentId}) {
    
    let deleteComment = (currentUserId === commentUserId)

    return (
        <CommentsContainer>
            <b>
                {by}
            </b>
            <span>
                {comment}
            </span>
            {   
                deleteComment &&  (
                    <button
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                currentUserId && commentUserId &&
                                db.collection("comments")
                                .doc(commentId)
                                .delete()
                            }

                        }
                    >
                        Delete 
                    </button>
                )
            }
        </CommentsContainer>
    )
}

export default Comments

const CommentsContainer = styled.div`
    text-transform: lowercase;
    border-bottom: 1px solid lightgray;
    margin: 5px;
    > span{
        margin-left: 5px;
    }

    > button{
        background-color: transparent;
        border: none;
        color: #0095f6;
        font-weight: 700;
        cursor: pointer;
    }
`

