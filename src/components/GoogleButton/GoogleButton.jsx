import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
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

  return (
    <div className="row mt-5">
      <div className="col-md-12">
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {userInfo.name}</h1>

            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText={"Logout"}
              onLogoutSuccess={() => dispatch(handleLogout())}
            ></GoogleLogout>
          </div>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign In with Google"
            onSuccess={(res) => dispatch(responseGoogleSuccess(res))}
            onFailure={(res) => dispatch(responseGoogleError(res))}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    </div>
  );
}
