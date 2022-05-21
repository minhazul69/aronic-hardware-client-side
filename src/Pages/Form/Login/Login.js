import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import Spinner from "../../Home/Shared/Spinner/Spinner";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, signinLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("User Login SuccessFull");
    }
  }, [from, navigate, user]);

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
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-password">Password</span>
              </label>
              <input
                type="password"
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
            <Link
              to="/resetPassword"
              className="btn btn-active btn-link btn-sm"
            >
              Forgot Password ?
            </Link>
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
