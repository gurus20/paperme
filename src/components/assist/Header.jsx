import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/css/main.css'

function Header() {
    return (
        <div style={{background: "#eee"}} className='shadow-sm'>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <p className='fw-bold mb-0'>PaperMe</p>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="/" className="nav-link px-2 link-dark">Templates</a></li>
                        <li><a href="/" className="nav-link px-2 link-dark">FAQs</a></li>
                        <li><a href="/" className="nav-link px-2 link-dark">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-success btn-sm me-2">Login</button>
                        <button type="button" className="btn btn-success btn-sm">Sign-up</button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header