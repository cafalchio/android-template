import { Route, Routes } from "react-router-dom";
import Navbar2 from "@/components/ui/Navbar2";
import Home from "../home";
// import Database from '@tauri-apps/plugin-sql';


// const db = await Database.load('sqlite:mydatabase.db');


function App() {
  return (
    <>
    <Navbar2 />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App;