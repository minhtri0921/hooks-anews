import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import PostItem from '../components/PostItem'

function DanhMuc() {
    const { cId } = useParams()
    const [listNewsByCat, setListNewsByCat] = useState([])
    const [catById, setCatById] = useState({});

    useEffect(() => {
        async function fetchData() {
            var news = await axios(`http://localhost:3001/news/newsbycat?cid=${cId}`);
            setListNewsByCat(news.data);
            let cat = await axios(`http://localhost:3001/categories/catbyid?id=${cId}`);
            setCatById(cat.data);
        }
        fetchData();
    }, [cId]);
    return (
        <div className="wrapper">
            <Header />

            <Menu />
            <div id="content">
                <div className="content-left fl">
                    <Categories />
                </div>
                <div className="content-right fr">
                    <h3>Tin tức : {catById.name}</h3>
                    <div className="main-content items-new">
                        <ul>
                            {listNewsByCat.map(news =>
                                <PostItem
                                    key={news.id}
                                    id={news.id}
                                    content={news.content}
                                    detail={news.detail}
                                />
                            )}
                        </ul>
                    </div>
                </div>
                <div className="clr"></div>
            </div>

            <Footer />
        </div>
    )
}
export default DanhMuc;