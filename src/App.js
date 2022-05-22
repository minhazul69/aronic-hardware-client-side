import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Form/Login/Login";
import SignUp from "./Pages/Form/SignUp/SignUp";
import ResetPassword from "./Pages/Form/ResetPassword/ResetPassword";
import { Toaster } from "react-hot-toast";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
