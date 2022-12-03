import {createContext, useState, useEffect} from "react"
import Storage from '../database/storage';

export const AuthContext = createContext({})

const storage = new Storage();

const ContextProvider = ({children}) => {
  const [ contents, setContents ] = useState([]); 

  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleName = (value) => {
    setName(value);
  }

  const handleId = (value) => {
    setId(value);
  }

  console.log(contents);
  
  useEffect(()=>{
    
    storage.listContents(setContents);
    
  },[]);

  // useEffect(() => {
  //   const handleData = async () => {
  //     await Storage.listContents()
  //   }
  //   handleData();
  // },[id])

  return(
    <AuthContext.Provider
    value = {{name:name, handleName, handleId}}
    >{children}</AuthContext.Provider>
  )
}

export default ContextProvider