import firebase from "firebase"
const SocialAuth = (provider)=>{
    return firebase.auth().signInWithPopup(provider).then((res)=>{
        return res.user
    }).catch((er)=>{
        return er
    })
}
export default SocialAuth