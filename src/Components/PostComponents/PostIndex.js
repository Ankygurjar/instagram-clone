import React, { } from 'react'
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import Post from './Post'
import ShowUsers from './FollowComponents/ShowUsers'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'

function PostIndex() {
    const [user] = useAuthState(auth);
    const [posts] = useDocument( user &&
            db.collection("posts")
            .orderBy("timestamp", "desc")
        )

    const arrOfFollowing = []

    const [following] = useDocument( user &&
            db.collection("followers")
            .where("followerId", "==", user.uid)
        )
    
    following?.docs.forEach((doc)=>{
        arrOfFollowing.push(doc.data().following)
        arrOfFollowing.push(doc.data().followerId)
    })

    return (
        <PostIndexContainer>
            { user && (
            <InnerContainer>
                <Posts>
                    {posts && posts.docs.map((post)=>{
                        const { imageUrl, caption, by, userProfilePic, timestamp,userId} = post.data()
                        if(arrOfFollowing.includes(userId) || userId === user.uid){
                        return(
                            <Post
                            key={post.id}
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
                <ShowUsers userId={user.uid}/>
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
