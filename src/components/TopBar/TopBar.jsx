import "./TopBar.css";

function TopBar() {
    return (
        <div className="top-bar">

            <div className="left">
                <p>Government of India</p>

                <span className="login-highlight">
                    Login
                </span>
            </div>

            <div className="right">
                <p>English</p>
            </div>

        </div>
    );
}

export default TopBar;