import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import AddEditPost from "./pages/AddEditPost/AddEditPost";
import About from "./pages/About/About";
import NoteFound from "./pages/NoteFound/NoteFound";
import {ToastContainer} from "react-toastify";
import {useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {auth} from "./firebase.js";
import Auth from "./pages/Auth";
import { signOut } from "firebase/auth";


function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    });
  };


  return (
    <div>
      <Navbar

        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
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
