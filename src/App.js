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
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Review from "./Pages/Dashboard/Review/Review";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import AllUser from "./Pages/Dashboard/AllUser/AllUser";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import AllProduct from "./Pages/AllProduct/AllProduct";
import AllOrders from "./Pages/Dashboard/AllOrders/AllOrders";
import EditProfile from "./Pages/Dashboard/MyProfile/EditProfile/EditProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route
          path="/editProfile"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder />} />
          <Route path="review" element={<Review />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="allUer" element={<AllUser />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
          <Route path="allOrders" element={<AllOrders />} />
        </Route>
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
