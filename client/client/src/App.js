import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TinTuc from "./pages/TinTuc";
import DanhMuc from "./pages/DanhMuc";
import ChiTiet from "./pages/ChiTiet";
import LienHe from './pages/LienHe';

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tintuc' element={<TinTuc />} />
                <Route path='/danhmuc/:cId' element={<DanhMuc />} />
                <Route path='/chitiet/:dId' element={<ChiTiet />} />
                <Route path='/lienhe' element={<LienHe />} />
            </Routes>
        </>
    )
}

export default App;