import React, { useState } from 'react'
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import Post from './Post'
import ShowUsers from './FollowComponents/ShowUsers'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/appSlice'

function PostIndex() {

    const curUser = useSelector(selectUser)

    const [user] = useAuthState(auth);
    const [posts, loading] = useCollection( user &&
            db.collection("posts")
            .orderBy("timestamp", "desc")
        )
    
    const [following] = useCollection( user && curUser.docId &&
            db.collection("users")
            .doc(curUser.docId)
            .collection("following")
        )
    
    let arrOfFollowing = []

    following?.docs.forEach((doc)=>{
        const { followingId } = doc.data()
        arrOfFollowing.push(followingId)
    })

    return (
        <PostIndexContainer>

            {
                loading && (
                    <center>
                        <h2>Your Posts Are Loading....</h2>
                    </center>
                )
            }

            { user && (
            <InnerContainer>
                <Posts>

                    {
                        posts && 
                        console.log(posts.docs)
                    }
                    {posts && posts.docs.map((post)=>{
                        const { imageUrl, caption, by, userProfilePic, timestamp, userId} = post.data()
                        if(arrOfFollowing.includes(userId) || userId === curUser.userId){
                            return(
                                <Post
                                key={post.id}
                                docId={post.id}
                                curUserId={user.uid}
                                curUserName={user?.displayName}
                                postId={post.id}
                                timestamp={timestamp}
                                by={by && by}
                                userProfilePic={userProfilePic && userProfilePic}
                                userId={userId}
                                imageURL={imageUrl}
                                caption={caption}
                                />
                            )
                        }
                    })}
                </Posts>

                <ShowUsers 
                userId={user.uid} 
                curUserDocId={curUser.docId} 
                following={arrOfFollowing}/>

            </InnerContainer>
            )}
        </PostIndexContainer>
    )
}

export default PostIndex

const InnerContainer = styled.div`
    padding-top: 50px;
    width: 60%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
`

const Posts = styled.div`

`

const PostIndexContainer = styled.div`
    background-color: #F0F0F0;
    
`
