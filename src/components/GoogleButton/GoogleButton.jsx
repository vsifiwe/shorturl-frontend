import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  responseGoogleSuccess,
  responseGoogleError,
  handleLogout,
} from "../../redux/slice/authSlice";
const CLIENT_ID =
  "669396506576-uo15mmnd9n7hog8a06b1okovh7d4e02u.apps.googleusercontent.com";

export default function GoogleButton() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="row mt-5">
      <div className="col-md-12">
        {isLoggedIn ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText={"Logout"}
            onLogoutSuccess={() => dispatch(handleLogout())}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign In with Google"
            onSuccess={(res) => {
              axios
                .post("http://localhost:8000/social/google/", {
                  auth_token: res.tokenObj.id_token,
                })
                .then((res) => dispatch(responseGoogleSuccess(res.data)))
                .then(() => navigate("/dashboard"));
            }}
            onFailure={(res) => dispatch(responseGoogleError(res))}
            // isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    </div>
  );
}
