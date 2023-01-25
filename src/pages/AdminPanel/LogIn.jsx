import { useState } from "react";

import {
  LoginWithEmailAndPassword,
  handleSignOut,
} from "../../utils/firebase.utils";

import FormHandler from "../../components/Form/LoginForm.jsx";
import { useDispatch } from "react-redux";

const initialState = { email: "", password: "" };
function LogIn() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const handleChanged = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await LoginWithEmailAndPassword(user.email, user.password);
  };

  return (
    <div className=" h-[100vh] flex justify-center items-center mx-auto">
      <FormHandler
        handleSubmit={handleSubmit}
        handleChanged={handleChanged}
        handleSignOut={handleSignOut}
        dispatch={dispatch}
      />
    </div>
  );
}

export default LogIn;
