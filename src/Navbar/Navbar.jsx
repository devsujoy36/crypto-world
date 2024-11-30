

 
export default function Navbar({ count, setCount }) {
    return (
        <div className="navbar bg-gray-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a href="https://nestmartbd.netlify.app">Food</a></li>
                        <li><a href="https://devsujoy36.github.io/Influencer-Porfolio/?fbclid=IwY2xjawE_6L9leHRuA2FlbQIxMAABHYmzxrdM38RZLgC3Y_l5LCDiREZ706_w90Tu1QNn9qm6TrxzGTV_eNpn9g_aem_FJU95Yt-Yi6iiVANysdnDg">Influencer</a></li>
                        <li><a>Footer</a></li>
                    </ul>
                </div>
                <a href="#" className="btn btn-ghost text-xl">Crypto World</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    <li><a href="https://nestmartbd.netlify.app">Food</a></li>
                    <li><a href="https://devsujoy36.github.io/Influencer-Porfolio/?fbclid=IwY2xjawE_6L9leHRuA2FlbQIxMAABHYmzxrdM38RZLgC3Y_l5LCDiREZ706_w90Tu1QNn9qm6TrxzGTV_eNpn9g_aem_FJU95Yt-Yi6iiVANysdnDg">Influencer</a></li>
                    <li><a>Footer</a></li>
                </ul>
            </div>
            {!count ?
                <div className='navbar-end'>
                    <button onClick={() => { setCount(!count)}} className="btn"><a>Log In</a></button>
                </div>
                :
                <div className='navbar-end'>
                    <button onClick={() => { setCount(!count)}} className="btn btn-primary"><a>Back</a></button>
                </div>
            }
        </div>
    )
}