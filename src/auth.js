import firebase from "firebase"
let current_uid
const SocialAuth = (provider)=>{
    return firebase.auth().signInWithPopup(provider).then((res)=>{
        current_uid=firebase.auth().currentUser.uid
        console.log(current_uid)
        return res.user
    }).catch((er)=>{
        return er
    })
}
export default SocialAuth
