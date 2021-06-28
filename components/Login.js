import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/client";
function Login() {
  return (
    <div className="grid place-items-center">
      <FontAwesomeIcon
        className="text-blue-500 m-20"
        icon={faFacebook}
        size="10x"
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full
      text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
