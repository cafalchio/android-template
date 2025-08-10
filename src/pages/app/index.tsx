import { Route, Routes } from "react-router-dom";
import Navbar2 from "@/components/Navbar2";
import Home from "../home";
// import Database from '@tauri-apps/plugin-sql';


// const db = await Database.load('sqlite:mydatabase.db');


function App() {
  return (
    <>
    <div className="overflow-hidden box-border absolute h-screen w-screen">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </>

  )
}

export default App;