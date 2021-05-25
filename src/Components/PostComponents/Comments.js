import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'

function Comments({comment, curUserId, userId, commentId}) {


    return (
        <CommentsContainer>
            <b>
                {comment.by}
            </b>
            <span>
                {comment.comment}
            </span>
            {
                (curUserId === userId) && (
                    <button
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                curUserId && userId &&
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

