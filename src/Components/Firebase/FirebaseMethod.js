import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import app from "../Firebase/FirebaseConfig";
  import { getDatabase, ref, set, onValue, update, push, remove } from "firebase/database";
  
  const database = getDatabase(app);
  const auth = getAuth(app);
  const signUpUser = (obj, nodeName, setLoding) => {
    const {email, password} = obj
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((success) => {
          const user = success.user;
            const reference = ref(database, `${nodeName}/${user.uid}`);
            delete obj.password;
            set(reference, obj)
              .then(() => {
                resolve("data is successfully submitted");
              })
              .catch((reject) => {
                console.log("data nahi gia database ma");
              });
          
        })
        .catch((error) => {
          setLoding(false)
          console.log("error", error);
        });
    });
  };
  
  const loginWithUser = (loginData, nodeName) => {
    let { email, password } = loginData;
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((success) => {
          const { user } = success;
          const reference = ref(database, `${nodeName}/${user.uid}`);
          onValue(reference, (e) => {
            let status = e.exists();
            if (status) {
              resolve({ ...e.val(), user: user.uid });
            } else {
              reject("login rejected");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  
  const signOutuser = ()=>{
    return new Promise ((resolve, reject)=>{
      signOut(auth).then((success)=>{
        resolve(success)
      })
      .catch((error)=>{
        reject(error)
      })
    })
  }

const verifyUser =() =>{
  return new Promise ((resolve, reject)=>{
      onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user)
        const uid = user.uid;
      } else {
        reject('error')
      }
    })
  });
}

const getData = (nodeName, uid) => {
  return new Promise ((resolve, reject)=>{
    if(uid){
      const reference = ref(database,  `${nodeName}/${uid}`)
      onValue(reference, (e)=>{
        if(e.exists()){
          resolve({...e.val(), uid:uid})
        }
        else{
          reject('data not Found')
        }
      })
    }
    else{
      const reference = ref(database,  `${nodeName}`)
      onValue(reference, (e)=>{
        if(e.exists()){
          resolve(e.val())
        }
        else{
          reject('data not Found')
        }
      })
    }
  })
}

const sendData = (obj, nodeName, uid) =>{
  if(uid){
    const refrence = ref(database, `${nodeName}/${uid}`)
    update(refrence, obj)
  }
  else{
    const reference = ref(database, `${nodeName}`)
    push(reference, obj)
  }
}

// const removeData = (nodeName, uid)=>{
//   const reference = ref(database, `${nodeName}`)
//     remove(reference)
// }

const removeData = (nodeName, uid) => {
  console.log(uid, "uuuuiiiid");
  return new Promise((resolve, reject) => {
    if (uid) {
      const reference = ref(database, `${nodeName}/${uid}`);
      remove(reference)
        .then((succ) => {
          resolve(succ);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      const reference = ref(database, `${nodeName}`);
      remove(reference)
        .then((succ) => {
          resolve(succ);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

const resetPassword = () =>{
  
}
export { signUpUser, loginWithUser,  signOutuser, verifyUser, getData, sendData, removeData };