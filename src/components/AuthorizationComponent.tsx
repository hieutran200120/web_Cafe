import { Navigate } from "react-router-dom";
import { RouterLinks } from "../const/RouterLinks";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthorizationComponent = (props: any) => {
    const navigate = useNavigate();
    const isLogin = useSelector((state: any) => state.state.loginState);
    const permission = localStorage.getItem("permission");
    useEffect(() => {
        if (permission === "User") {
            navigate(RouterLinks.DAT_BAN);
        }
    }, [navigate, permission]);
    if (isLogin) {
        return props.element;
    } else {
        return <Navigate to={RouterLinks.LOGIN} />;
    }
};