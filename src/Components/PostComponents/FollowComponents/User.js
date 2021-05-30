import React from 'react'
import styled from 'styled-components'
import { db } from '../../../firebase'
import { Link } from 'react-router-dom'

function User({ followingId, userImage, isFollowing, userName, curUserDocId}) {

    const handleUnFollow = (followingId) =>{
        db.collection("users")
        .doc(curUserDocId)
        .collection("following")
        .where("followingId", "==", followingId)
        .get()
        .then((docs)=>{
            docs.forEach((doc)=>{
                doc.ref.delete()
                .then(()=>{console.log("deleted")})
                .catch(err=> console.log(err.message))
            })
        })
        .catch((err)=>console.log(err.message))

    }

    const handleFollow = (followingId) =>{
        db.collection("users")
        .doc(curUserDocId)
        .collection("following")
        .where("followingId", "==", followingId)
        .get()
        .then((isPresent)=>{
            if(isPresent.empty){
                db.collection("users")
                .doc(curUserDocId)
                .collection("following")
                .add({
                    followingId: followingId
                })
                .then(()=>console.log(true))
                .catch((err)=> console.log(err.message))
            }
        })
    }

    return (
        <UserContainer>
            <img src={userImage} alt="Avatar"/>
            <Link><strong>{userName}</strong></Link>
            {
                isFollowing && (
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            handleUnFollow(followingId)
                        }}
                    >
                        UnFollow
                    </button>
                )
            }
            {
                !isFollowing && (
                    <button
                        onClick={(e)=>{
                            e.preventDefault();
                            handleFollow(followingId)
                        }}
                    >
                        Follow
                    </button>
                )
            }
        </UserContainer>
    )
}

export default User

const UserContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;

    > a{
        text-decoration: none;
        color: initial;
    }
    
    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: left;
    }

    > button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-weight: 800;
        color: #0095f6;
    }

`

