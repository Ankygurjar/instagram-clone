import { auth, googleProvider, facebookProvider, gitHubProvider, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'

const GoogleLogin = () => {
    auth.signInWithPopup(googleProvider)
    .then((res)=>{
        register(res.user);
    })
    .catch((err)=>{
        console.error(err)
    })
}

const FacebookLogin = () => {
    auth.signInWithPopup(facebookProvider)
    .then((res)=>{
        register(res.user);
    })
    .catch((err)=>{
        console.error(err)
    })
}

const GithubLogin = () => {
    auth.signInWithPopup(gitHubProvider)
    .then((res)=>{
        register(res.user);
    })
    .catch((err)=>{
        console.error(err)
    })
}

const register = async (user) =>{

    db.collection("users").where("userId", "==", user.uid).get()
        .then((doc)=>{
            if(doc.empty){
                db.collection("users").add({
                    userId: user.uid,
                    email: user.email,
                    profilePicture: user.photoURL,
                    userName: user.displayName
                })
            }

        })
        .catch(err=>console.log(err))
    
}


export { GoogleLogin, FacebookLogin, GithubLogin }