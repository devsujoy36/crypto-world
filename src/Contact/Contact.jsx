

const Contact = () => {

    return (
        <div className="lg:container mx-8 lg:mx-auto py-8 my-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold text-center mb-8"> Send A Message</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Your Name
                            </label>
                            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Email Address
                            </label>
                            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Phone Number
                            </label>
                            <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Phone"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Subject
                            </label>
                            <input type="text" id="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Subject"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Your Message
                            </label>
                            <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-gray-200 text-black rounded-lg shadow-lg">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Contact Info</h2>

                        <div className="mb-8 flex ">
                            <img className="w-10 h-10 mr-2" src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt="" />
                            <div className="mb-2">
                                <p> Location :</p>
                                <p>Jamalpur, Mymensingh Division</p>
                            </div>
                        </div>

                        <div className="mb-8 flex ">
                            <img className="w-10 h-10 mr-2" src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" alt="" />
                            <div>
                                <p>Email :</p>
                                <p className="text-gray-700">sdsujoy920243@gmail.com</p>
                            </div>
                        </div>

                        <div className="mb-8 flex">
                            <img className="w-10 h-10 mr-2" src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000" alt="" />
                            <div>
                                <p>Phone No :</p>
                                <p className="text-gray-700">+01303436299</p>

                            </div>
                        </div>


                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                            <div className="flex gap-4">
                                <a target='blank' href="https://www.facebook.com/sujoydas36/">
                                    <img className=" w-6" src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" />
                                </a>
                                <a target='blank' href="https://www.youtube.com/@xenonlivexone">
                                    <img className=" w-6" src="https://img.icons8.com/?size=100&id=9a46bTk3awwI&format=png&color=000000" />
                                </a>
                                <a target='blank' href="https://devsujoy36.github.io/Influencer-Porfolio/?fbclid=IwY2xjawE_6L9leHRuA2FlbQIxMAABHYmzxrdM38RZLgC3Y_l5LCDiREZ706_w90Tu1QNn9qm6TrxzGTV_eNpn9g_aem_FJU95Yt-Yi6iiVANysdnDg">
                                    <img className=" w-6" src="https://devsujoy36.github.io/Influencer-Porfolio/images/main-camera.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;