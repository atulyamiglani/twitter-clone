import { Button } from "@material-ui/core";
import { useState } from "react";
import authUser from "../store/actions/authUser";

// user stuff for the auth form
let user = {
  email: "",
  username: "",
  password: "",
  pictureURL: "",
};

// sign up or log in should come in through props

const AuthForm = (props) => {
  const [userInfo, setUserInfo] = useState(user);
  const { signUp } = props;
  const { submitButtonText } = props;
  const signUpFields = (
    <>
      <div>
        <h1>this is bullshit</h1>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo((prevValues) => ({
              ...prevValues,
              [e.target.name]: e.target.value,
            }));
            console.log(userInfo);
          }}
        />
        <label>Profile picture URL</label>
        <input
          type="text"
          name="pictureURL"
          value={userInfo.pictureURL}
          onChange={(e) => {
            setUserInfo((prevValues) => ({
              ...prevValues,
              [e.target.name]: e.target.value,
            }));
            console.log(userInfo);
          }}
        />
      </div>
    </>
  );

  const handleAuthUser = (e) => {
    e.preventDefault();
    console.log("doing something");
    const authType = signUp ? "signup" : "signin";
    authUser(userInfo, authType);
    //.then((res) => {
    //console.log("yoo" + res);
    //});
  };

  const signInFeilds = (
    <>
      <div>
        <h1>Navbar comes over this, style it better </h1>
        <form>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userInfo.username}
            label="username"
            onChange={(e) => {
              setUserInfo((prevValues) => ({
                ...prevValues,
                [e.target.name]: e.target.value,
              }));
              console.log(userInfo);
            }}
          />

          <label>New password</label>
          <input
            type="text"
            name="password"
            value={userInfo.password}
            onChange={(e) => {
              setUserInfo((prevValues) => ({
                ...prevValues,
                [e.target.name]: e.target.value,
              }));
              console.log(userInfo);
            }}
          />
        </form>
        <Button onClick={handleAuthUser}>{submitButtonText}</Button>
      </div>
    </>
  );

  if (signUp) {
    return [signUpFields, signInFeilds];
  } else {
    return signInFeilds;
  }
};

// const handleSubmitUserInfo = (userInfo) => {
//   setUserInfo(userInfo);
//   console.log(userInfo);
// };

export default AuthForm;
