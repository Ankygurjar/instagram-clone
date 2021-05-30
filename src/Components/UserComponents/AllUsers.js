import React from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { selectUser } from '../../features/appSlice'
import styled from 'styled-components'
import User from '../PostComponents/FollowComponents/User'

function AllUsers() {

    const user = useSelector(selectUser)

    const [users] = useCollection(
        user.userId && 
        db.collection("users")
        .where("userId", "!=", user.userId)
    )

    const [following] = useCollection( user && user.docId &&
        db.collection("users")
        .doc(user.docId)
        .collection("following")
    )

    let arrOfFollowing = []

    following?.docs.forEach((doc)=>{
        const { followingId } = doc.data()
        arrOfFollowing.push(followingId)
    })

    return (
        <AllUsersContainer>
            { users && (
                    users.docs.map((doc)=>{
                        const { userName, profilePicture, userId } = doc.data()
                        const isFollowing = (arrOfFollowing?.includes(userId))
                        
                        return(
                            <DummyStyling>
                                <User 
                                    key={doc.id}
                                    userImage={profilePicture}
                                    userName={userName}
                                    followingId={userId}
                                    isFollowing = {isFollowing}
                                    curUserDocId= {user.docId }
                                />
                            </DummyStyling>
                        )
                    })
                )}
        </AllUsersContainer>
    )
}

export default AllUsers

const AllUsersContainer = styled.div`
    background-color: #F0F0F0;
`

const DummyStyling = styled.div`
    display: flex;
    margin: 20px;
    justify-content: center;
    align-items: flex-start;

`

