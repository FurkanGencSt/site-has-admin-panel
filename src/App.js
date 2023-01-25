import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import LogIn from "./pages/AdminPanel/LogIn";
import Makaleler from "./pages/Articles/Makaleler";
import Contact from "./pages/Contact/Contact";
import Deneme1 from "./pages/Deneme/Deneme1";
import Home from "./pages/Home/Home";
import Links from "./pages/SocialMedias/Links";
import { auth } from "./utils/firebase.utils";
import { login } from "./features/auth/loginSlice";
import { logout } from "./features/auth/loginSlice";
import Navbar from "./components/header/Navbar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login(JSON.stringify(authUser)));
        console.log("app js oturum açık");
      } else {
        dispatch(logout(null));
        console.log("app js oturum kapalı");
      }
    });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/makaleler" element={<Makaleler />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/baglantilar" element={<Links />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/deneme" element={<Deneme1 />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
