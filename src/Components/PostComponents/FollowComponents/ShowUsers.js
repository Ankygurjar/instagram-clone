import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../../../firebase'

function ShowUsers({ userId}) {

    const [isFollowing, setIsFollowing] = useState(false);

    const [users] = useDocument(
        userId && 
        db.collection("users")
        .where("userId", "!=", userId)
        .limit(5)
    )

    const handleUnFollow = async (id) =>{
        await db.collection("followers")
            .doc(id)
            .delete()
                .then(()=>{
                    alert("User has been deleted from your following list")
                })
                .catch(err=>{console.log(err)})
    }

    const handleFollow =  async (following) =>{
        await db.collection("followers")
        .where("following", "==", following)
        .get()
            .then(async (res)=>{
                if(res && res.empty){
                    await db.collection("followers")
                            .add({
                                followerId: userId,
                                following: following
                            })
                }else{
                    if(window.confirm("You already follow this user. Do You want to unfollow?")){
                        db.collection("followers")
                            .where("following", "==", following)
                            .where("followerId", "==", userId)
                            .get()
                            .then(async(res)=>{
                                console.log(res)
                                const id = res.docs[0].id
                                handleUnFollow(id)
                            })
                    }
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }

    return (
        <ShowUsersContainer>
            <InnerContainer>
                <Header>
                    <b>Suggestions For You</b>
                    <Link>See Al l</Link>
                </Header>
                { users && (
                    users.docs.map((doc)=>{
                        const { userName, profilePicture, userId } = doc.data()
                        return(
                            <User key={doc.id}>
                                <img alt="Profile" src={profilePicture}/>
                                <b>{userName}</b>
                                {
                                    isFollowing && (
                                        <button onClick={handleUnFollow}>
                                            Unfollow
                                        </button>
                                    )
                                }
                                { !isFollowing && (
                                    <button onClick={(e)=>{
                                        e.preventDefault();
                                        handleFollow(userId)
                                    }}>Follow</button>
                                )}
                            </User>
                        )
                    })
                )}
            </InnerContainer>
        </ShowUsersContainer>
    )
}

export default ShowUsers

const User = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    margin: 10px;
    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }


    > button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        color: #0095f6;
        font-weight: 900;
    }
`

const ShowUsersContainer = styled.div`
    
`

const InnerContainer = styled.div`
`

const Header = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    > b{
        color: gray;
    }

    > a{
        text-decoration: none;
        color: black;
    }

`
