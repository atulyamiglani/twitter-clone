import { Formik } from "formik";
import { useState } from "react";

// user stuff for the auth form
let user = {
  email: "",
  username: "",
  pictureURL: "",
};

// user information comes through props
const AuthForm = (props) => {
  const [userInfo, setUserInfo] = useState(user);
  return (
    <>
      <div>
        <h1>this is not showing </h1>
        <form>
          <input
            type="text"
            name="email"
            value={userInfo}
            onChange={(e) => {
              console.log(userInfo);
              setUserInfo(e.target.value);
            }}
          />
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
