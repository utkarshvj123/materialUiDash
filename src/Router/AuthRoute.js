import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
// import NavBar from "../components/NavBar";

import { useDispatch, useSelector } from "react-redux";
// import { authenticateUserAction } from "../modules/Login/actions";

export default function AuthRoute(props) {
  const { isValidUser = true } = props;
  const dispatch = useDispatch();
  return (
    <div>
      {isValidUser ? (
        <>
          {/* <NavBar
            logout={() => dispatch(authenticateUserAction(false))}
            heading={"Zolve"}
            buttonName={"Logout"}
            buttonClass="btn btn-primary"
          /> */}
          <Route exact path="/home" component={Home} />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
