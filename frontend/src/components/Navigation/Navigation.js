import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "store/reducers/auth";
import { useMutateData } from "hooks/useDataOperations";
import { logout } from "util/auth";
import { Navbar } from "flowbite-react";

export default function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const requestConfig = {
    url: "/api/logout",
    method: "POST",
  };

  const { mutate: onLogout } = useMutateData(requestConfig, {
    onSuccess: () => {
      dispatch(authActions.deauthenticateUser());
      logout(dispatch);
    },
  });

  const loggedOutOptions = (
    <Navbar.Collapse className="ml-3 text-lg">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </Navbar.Collapse>
  );

  const loggedInOptions = (
    <Navbar.Collapse className="ml-3 text-lg">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/account">Account</NavLink>
      <button onClick={() => onLogout()}>Log Out</button>
    </Navbar.Collapse>
  );

  return (
    <Navbar
      fluid
      rounded
      className="fixed w-full z-30"
      style={{ backgroundColor: "rgb(226 232 240)" }}
    >
      <NavLink to={isAuthenticated ? "/dashboard" : "/"}>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3">
          JDTodo
        </span>
      </NavLink>
      <Navbar.Toggle />
      {!isLoading && (isAuthenticated ? loggedInOptions : loggedOutOptions)}
    </Navbar>
  );
}
