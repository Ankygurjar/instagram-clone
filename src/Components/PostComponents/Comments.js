import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'

function Comments({comment, currentUserId, by, commentUserId, commentId}) {

    console.log(commentUserId)
    return (
        <CommentsContainer>
            <b>
                {by}
            </b>
            <span>
                {comment}
            </span>
            {
                (currentUserId === commentUserId) && (
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
    margin: 5px;
    > span{
        margin-left: 5px;
    }
`

