import {StyledLogin} from "./login.styled";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <StyledLogin>
            <Link to='/signin'>
                <button type='button' className="loginBlock" >Connect Wallet</button>
            </Link>
        </StyledLogin>
    )
}

export default Login;