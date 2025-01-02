import react,{useContext, useEffect} from "react"
import {DataContext} from "./components/DataProvider/DataProvider.jsx"
import Routing from "./Router"
import './App.css'
import {Type} from "./Utility/action.type.js"
import { auth } from "./Utility/firebase.js";

function App() {
const [{user}, dispatch] = useContext(DataContext)

useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      //console.log(authUser);
      dispatch({ 
        type: Type.SET_USER,
        user: authUser
       });
    }else{
      dispatch({
        type: Type.SET_USER,
        user: null,
      });
    }
  });

}, []);

  return (
  <>
    <Routing />
  </>
)
  

}

export default App
