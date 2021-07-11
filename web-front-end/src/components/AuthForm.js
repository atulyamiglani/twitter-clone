import { Formik } from "formik";
import { useState } from "react";

// user stuff for the auth form
let user = {
  email: "",
  username: "",
  pictureURL: "",
};

// sign up or log in should come in through props

const AuthForm = (props) => {
  const [userInfo, setUserInfo] = useState(user);
  return (
    <>
      <div>
        <h1>Navbar comes over this, style it better </h1>
        <form>
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

          {/* <input
            type="text"
            name="username"
            value={userInfo}
            onChange={(e) => {
              console.log(userInfo.username);
              setUserInfo(e.target.value);
            }}
          /> */}
        </form>
      </div>
    </>
  );
};

// const handleSubmitUserInfo = (userInfo) => {
//   setUserInfo(userInfo);
//   console.log(userInfo);
// };

export default AuthForm;
