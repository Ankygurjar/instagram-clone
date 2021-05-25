import React, { useState, useEffect} from 'react'
import UserInfo from './UserInfo'
import styled from 'styled-components'
import AddPost from './AddPost'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/appSlice'

function UserIndex() {

    const user = useSelector(selectUser)

    const [posts, setPosts] = useState(new Array());

    useEffect(async ()=>{
        await db.collection("posts")
        .where("userId", "==", user.userId)
        .get()
        .then((docs)=>{
            let arrPosts = new Array()
            docs.forEach((doc)=>{
                arrPosts.push([doc.id, doc.data()])
            })
            setPosts(arrPosts)
        })
        
        //console.log(posts)
    }, [  ])
//console.log(posts)
    return (
        <UserIndexContainer>
            <InnerContainer>
                <UserInfo 
                userProfilePic={user.userProfilePic}
                userName={user.userName} 
                userEmail={user.userEmail}
                count={posts.length}/>
                <AddPost
                userId = {user.userId}
                />
                <PostContainer>
                    {
                        posts.map((post)=>{
                            //const imageUrl = post[1];
                            const {imageUrl} = post[1];
                            const {id} = post[0]
                            console.log(imageUrl)
                            return(
                                <img src={imageUrl}/>
                            )
                        })
                    }
                </PostContainer>
            </InnerContainer>
        </UserIndexContainer>
    )
}

export default UserIndex

const UserIndexContainer = styled.div`
    display: grid;
    grid-template-columns: 70%;
    justify-content: center;
    background-color: #fafafa;
    min-height: 100vh;
    padding-top: 20px;
`

const InnerContainer = styled.div`
    width: 100%;

`
const PostContainer = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 10px;

    > img {
        width: 100%;
        height: 300px;
    }
`