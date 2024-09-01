export default function Footer() {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="footer p-10 pb-0">
                <nav>
                    <h6 className="footer-title">Crypto Mining Projects</h6>
                    <a className="link link-hover">Hamster kombat</a>
                    <a className="link link-hover">blum</a>
                    <a className="link link-hover">Tomarket</a>
                    <a className="link link-hover">Cats</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Games</h6>
                    <a className="link link-hover">Free Fire</a>
                    <a className="link link-hover">Call Of Duty</a>
                    <a className="link link-hover">Hamster</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="footer-center p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Sujoy Das</p>
                </aside>
            </div>
        </footer>
    )
}