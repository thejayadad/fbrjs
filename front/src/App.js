import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import AddEditPost from "./pages/AddEditPost/AddEditPost";
import About from "./pages/About/About";
import NoteFound from "./pages/NoteFound/NoteFound";
import {ToastContainer} from "react-toastify";
import {useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {auth} from "./firebase.js";
import Auth from "./pages/Auth";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <Navbar setActive={setActive} active={active}/>
      <ToastContainer />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/create" element={<AddEditPost />} />
      <Route path="/update/:id" element={<AddEditPost />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoteFound />} />
      <Route path="/auth" element={<Auth setActive={setActive} />} />
     </Routes>
    </div>
  );
}

export default App;
