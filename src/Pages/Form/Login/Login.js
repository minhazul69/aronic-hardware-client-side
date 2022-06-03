import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Spinner from "../../Shared/Spinner/Spinner";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, signinLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [show, setShow] = useState(false);
  const passwordShowRef = useRef("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const [token] = useToken(user);
  const handleShow = () => {
    const passShow = passwordShowRef.current.checked;
    setShow(passShow);
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast.success("User Login SuccessFull");
    }
  }, [from, navigate, token]);

  useEffect(() => {
    if (signInError) {
      const error = signInError?.message.split(":")[1];
      toast.error(error);
    }
  }, [signInError]);
  if (signinLoading) {
    return <Spinner />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    if (user) {
      resetField("email");
      resetField("password");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen my-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-email">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@.[a-z]{3}/,
                    message: "Your Email Have Must Be A Special characters",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="relative form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-password">Password</span>
              </label>
              {/* PASSWORD SHOW HIDE */}
              <div
                onClick={handleShow}
                className="absolute inset-y-0 right-3 flex items-center px-2 top-6"
              >
                <label className="swap swap-rotate">
                  <input ref={passwordShowRef} type="checkbox" />
                  <i className="fa-solid fa-eye-low-vision swap-on fill-current"></i>
                  <i className="fa-solid fa-eye swap-off fill-current"></i>
                </label>
              </div>
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password Is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password Must Be 6 characters",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="text-left mb-3">
              <Link to="/resetPassword" className="font-bold text-yellow-400">
                Forgot Password ?
              </Link>
            </div>
            <input className="btn w-full" type="submit" value="Login" />
          </form>
          <p className="text-center my-2">
            New to Doctors | Portal ?{" "}
            <Link className="font-bold text-secondary" to="/signUp">
              Register
            </Link>
          </p>
          <div className="divider">OR</div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
