import { Link } from "react-router-dom";

function Menu() {
    return (
        <div id="menu">
            <ul>
                <li><Link to="/">Trang chủ</Link></li>
                <li className="active"><Link to="/tintuc">Tin tức</Link></li>
                <li><Link to="/lienhe">Liên hệ</Link></li>
            </ul>
            <div className="clr"></div>
        </div>
    )
}

export default Menu;