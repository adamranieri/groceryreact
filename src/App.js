import { createContext, useState } from "react";
import EditForm from "./components/edit-form";
import {Provider} from 'react-redux'
import InfoBar from "./components/info-bar";
import { store } from "./store";
import GrorceryViewer from "./components/grocery-viewer";
import BudgetManager from "./components/budget-manager";
import ItemForm from "./components/item-form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";


export const userContext = createContext();


export default function App() {

  const [user,setUser] = useState({username:"adamGator", fname:'Adam'})

  return (<>
  {/* <userContext.Provider value={[user,setUser]}>
    <InfoBar/>
    <EditForm/>
  </userContext.Provider> */}


<BrowserRouter>
<Provider store={store}>

  <NavBar/>

  <Routes>
    <Route path="viewer" element={<GrorceryViewer/>}/>
    <Route path="form" element={<ItemForm/>}/>
    <Route path='budget' element={<BudgetManager/>}/>
    <Route path='' element={<BudgetManager/>}/>
  </Routes>
  

</Provider>
</BrowserRouter>
  </>);
}


