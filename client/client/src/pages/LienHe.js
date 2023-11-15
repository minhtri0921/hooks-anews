import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import Contact from '../components/LienHe'

function LienHe() {

    return (
        <div className="wrapper">
            <Header />

            <Menu />
            <div id="content">
                <div className="content-left fl">
                    <Categories />
                </div>
                <div className="content-right fr">
                    <Contact />
                </div>
                <div className="clr"></div>
            </div>

            <Footer />
        </div>
    )
}
export default LienHe;