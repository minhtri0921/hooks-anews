import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import '../css/style.css'

const Home = () => {

    return (
        <div class="wrapper">
		<Header/>
        <Menu/>
		<div id="content">
			<div class="content-left fl">
				<Categories/>
			</div>
			<div class="content-right fr">
				<h3>Giới thiệu</h3>
				<div class="main-content">
					<p>
						<strong>VinaTAB</strong> thiết kế website theo chuẩn W3C, thông minh và tối ưu hóa google:
						Giúp cho Google tìm thấy những nội dung trang web của bạn dễ hơn,
						nhanh hơn với thứ hạng cao. Website tải NHANH, giao diện ĐẸP,
						quản trị DỄ DÀNG, THÂN THIỆN với người dùng. Tích hợp cung cụ thông minh,
						nhận biết khách hàng đang muốn gì, để đưa ra chiến lược bán hàng phù hợp.<br /><br />
					</p>
					<p>
						Giải pháp quảng bá thương hiệu, marketing online tăng lượng truy cập,
						đưa khách hàng tiềm năng tới website. Khám bệnh website, đẩy hàng loạt từ khóa
						tiềm năng lên TOP GOOGLE, tăng nhanh doanh số bán hàng!
					</p>
					<p>
						Giải pháp quảng bá thương hiệu, marketing online tăng lượng truy cập,
						đưa khách hàng tiềm năng tới website. Khám bệnh website, đẩy hàng loạt từ khóa
						tiềm năng lên TOP GOOGLE, tăng nhanh doanh số bán hàng!
					</p>
					<p>
						Giải pháp quảng bá thương hiệu, marketing online tăng lượng truy cập,
						đưa khách hàng tiềm năng tới website. Khám bệnh website, đẩy hàng loạt từ khóa
						tiềm năng lên TOP GOOGLE, tăng nhanh doanh số bán hàng!
					</p>
					<p>
						Giải pháp quảng bá thương hiệu, marketing online tăng lượng truy cập,
						đưa khách hàng tiềm năng tới website. Khám bệnh website, đẩy hàng loạt từ khóa
						tiềm năng lên TOP GOOGLE, tăng nhanh doanh số bán hàng!
					</p>
					<p>
						Giải pháp quảng bá thương hiệu, marketing online tăng lượng truy cập,
						đưa khách hàng tiềm năng tới website. Khám bệnh website, đẩy hàng loạt từ khóa
						tiềm năng lên TOP GOOGLE, tăng nhanh doanh số bán hàng!
					</p>
				</div>
			</div>
			<div class="clr"></div>
		</div>


		<Footer/>
	</div>
    )
}

export default Home;