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
import NotFound from "./Pages/NotFound/NotFound";
import Payment from "./Pages/Dashboard/Payment/Payment";
import RequireAdmin from "./Pages/RequireAdmin/RequireAdmin";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myPortfolio" element={<MyPortfolio />} />
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
          <Route
            index
            element={
              <RequireAuth>
                <MyOrder />
              </RequireAuth>
            }
          />
          <Route
            path="review"
            element={
              <RequireAuth>
                <Review />
              </RequireAuth>
            }
          />
          <Route
            path="myProfile"
            element={
              <RequireAuth>
                <MyProfile />
              </RequireAuth>
            }
          />
          <Route
            path="allUer"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          />
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="allOrders"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="payment/:id"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
