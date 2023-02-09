import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../content/styles/Base.scss";

const Layout = ({ selectedCar, setSelectedCar }) => {
    const [isUserLogin, setIsUserLogin] = useState(false);

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            {/* <a href="/contact">Contact</a> */}
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/personListCrud">personListCrud</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="c-wrapper">
                    <Outlet />
                </div>
            </main>

            <footer>
                Footer
            </footer>
            </div>
    )
};

export default Layout;