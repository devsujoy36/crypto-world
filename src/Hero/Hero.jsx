import bgImg from '../assets/images/img1.jpg'
export default function Hero({ getStarted, setGetStarted }) {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bgImg})`
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Crypto World</h1>
                    <p className="mb-5">Hello! Wellcome To My Crypto World, You Can Rarn More Then 100$ By Work With Me.</p>
                    <h5>Lets Join All Crypto Project Of Telegram</h5>
                    {!getStarted ? 
                    
                        <div>
                            <button onClick={() => { setGetStarted(!getStarted) }} className="btn btn-primary mt-5">Get Started</button>
                        </div>
                        :
                        <div>
                            <h1 className="mt-5 text-5xl font-bold">Scroll down</h1>
    
                        </div>
                         }

                </div>
            </div>
        </div>
    )
}