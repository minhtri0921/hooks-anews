import { Link } from "react-router-dom";

function PostItem(props) {
    return (
        <li>
            <h2>
                <Link to={"/chitiet/" + props.id}>{props.content}</Link>
            </h2>
            <div className="item">
                <p>{props.detail}</p>
                <div className="clr"></div>
            </div>
        </li>
    )
}

export default PostItem;