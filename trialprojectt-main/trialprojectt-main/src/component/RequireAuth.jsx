import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
console.log(window.location.pathname)
console.log(` da array${ allowedRoles }`)
console.log(` da role${ auth.roles }`)
const userType = localStorage.getItem('roleUser') ;
const userName= localStorage.getItem('NameUser') ;
console.log(` da role bata3 el local storage${ userType }`)

    return (
      allowedRoles?.some(role => userType?.includes(role))
            ? <Outlet />
            : userName
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;