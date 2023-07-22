import Lottie from "lottie-react";
import loginanimation from "../../../assets/animations/loginanimation.json"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const destination = location.state?.from?.pathname || "/"
    const navigate = useNavigate();

    // Social Login
    const handelGoogleLogin = () => {
        googleLogin().then((loggedInUser) => {
            // Signed in 
            const user = loggedInUser.user;
            console.log(user);

            const saveUser = {
                name: user.displayName,
                email: user.email,
                profile_pic: user.photoURL,
            }
            fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            }).then(res => res.json()).then(data => {
                console.log(data);
                if (data.insertedId || data.message) {
                    navigate(destination, { replace: true })
                    console.log(destination);
                    Swal.fire({
                        icon: 'success',
                        title: 'Login successfully',
                        showConfirmButton: true,

                    })

                }
            })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Message: ", errorMessage, "Error Code: ", errorCode);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });
    }



    // Login with email and password
    const onSubmit = data => {
        console.log(data);

        loginUser(data.email, data.password).then((loggedInUser) => {
            // Signed in 
            const user = loggedInUser.user;
            console.log(user);
            navigate(destination, { replace: true })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                // title: `${destination}`,
                showConfirmButton: true,
            })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Message: ", errorMessage, "Error Code: ", errorCode);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl bg-base-100">
                <div className="text-center lg:text-left">
                    <h5 className="text-center">
                        Do not have an account yet?
                        <Link className="text-blue-500" to="/signup"> Create new for free!</Link>
                    </h5>
                    <Lottie animationData={loginanimation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md">
                    <div className="card-body">
                        <h1 className="text-3xl font-semibold">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-xl">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div>
                            <button onClick={handelGoogleLogin} className="btn w-full my-1 bg-transparent border-2 border-gray-300"><FcGoogle className="text-2xl" /> Google</button>
                            <button className="btn w-full my-1 bg-transparent border-2 border-gray-300"><FaFacebook className="text-xl text-blue-600" /> Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;