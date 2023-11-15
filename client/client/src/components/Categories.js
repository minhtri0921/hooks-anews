import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Categories() {

    const [listCats, setListCats] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let result = await axios('http://localhost:3001/categories');
            setListCats(result.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <h3>Danh mục tin</h3>
            <ul>
                {listCats.map(cat =>
                    <li key={cat.id}><Link to={'/danhmuc/' + cat.id}>{cat.name}</Link></li>
                )}
            </ul>
        </>
    )
}

export default Categories;