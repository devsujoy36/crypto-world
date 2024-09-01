import Signup from "../SignUp/Signup";

export default function Login(props) {
    const { signup, setSignUp } = props;
    console.log(signup);


    return (
        <div>
            {!signup ?
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold py-6">Login now!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <div className="flex justify-between">
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot Password?</a>
                                        </label>
                                        <label className="label">
                                            <a onClick={() => { setSignUp(!signup) }} href="#" className="label-text-alt link link-hover">Don’t Have an Account? <span className="font-bold">Register</span></a>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                :
                <Signup props={props}></Signup>
            }
        </div>
    )
}