import Login from "../Login/Login";

export default function Signup({ signup, setSignUp }) {
    console.log(signup);

    return (
        <div>
            {
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up!</h1>
                            <p className="py-6">

                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body ">

                                <div className="gird grid-cols-2">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="First Name" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="Last Name" className="input input-bordered" required />
                                    </div>

                                    <label className="label">
                                        <span className="label-text">Gmail</span>
                                    </label>
                                    <div className="flex justify-between">
                                        <div>
                                            <label>
                                                <input type="radio" name="gender" value="male" className="mr-2" />
                                                Male
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="gender" value="female" className="mr-2" />
                                                Female
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="gender" value="othera" className="mr-2" />
                                                Others
                                            </label>
                                        </div>

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Number</span>
                                        </label>
                                        <input type="number" placeholder="Number" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Set Password</span>
                                        </label>
                                        <input type="password" placeholder="set password" className="input input-bordered" required />
                                    </div>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">If you already have an account then click here for <span className="font-bold text-blue-500">Log In</span></a>
                                </label>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary"><a href="#">Sign Up</a></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}