//import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from './firebase';

export default class Storage {

    listContents(onContentUpdate) {
         firebase.firestore().collection('users').onSnapshot((querySnapshot)=>{
            let contents = [];
            querySnapshot.forEach((doc)=>{
              const { name, userId } = doc.data();
              
              contents.push(doc.data());
              
            });
            onContentUpdate(contents);
         });
    } 

    edit(index, content, userId) {
         firebase.firestore().collection(userId).doc(index).set(content);  
         alert('Atualizado com sucesso');         
    }

     add(content, userId) {
         firebase.firestore().collection(userId).add(content)
         alert('Senha salva');        
    }

     deleteContent(index, userId) {
         firebase.firestore().collection(userId).doc(index).delete().then(() => {
            console.log('Apagado com sucesso');
            alert('Apagado com sucesso');   
        })
        .catch((error) => {
            console.log(error);
        });
    }

    registerUsername(data){
      firebase.firestore().collection('users').doc('userInfo').set({
        data
      })
    }

}