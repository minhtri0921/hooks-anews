import axios from "axios";
import { useState } from "react";

function LienHe() {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [web, setWeb] = useState('')
    const [gender, setGender] = useState('')
    const [avatar, setAvatar] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData();

        // Lấy thông tin từ đối tượng tập tin
        const selectedFile = e.target.picture.files[0];

        // Kiểm tra xem có tập tin đã chọn hay không
        if (selectedFile) {
            formData.append('files', selectedFile);
        }

        // Thêm các trường khác vào formData
        formData.append('name', name);
        formData.append('phoneNumber', phoneNumber);
        formData.append('web', web);
        formData.append('gender', gender);
        formData.append('content', content);

        // Gửi formData lên server hoặc xử lý theo ý bạn
        try {
            await axios({
                method: "POST",
                url: "http://localhost:3001/contact",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",},
            });
        }catch(err){
            console.log('Lỗi : '+err);
        }
    }


    return (
        <>
            <h3>Liên hệ</h3>
            <div className="main-content">
                <form onSubmit={(e) => handleSubmit(e)} action="" class="frmContact">
                    <p>Vui lòng điền đầy đủ các thông tin liên hệ sau: </p>
                    <div class="row">
                        <label>Họ tên: </label>
                        <input type="text" name="name" value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div class="row">
                        <label>Số điện thoại: </label>
                        <input type="text" name="phone" value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div class="row">
                        <label>Website: </label>
                        <input type="text" name="web" value={web}
                            onChange={e => setWeb(e.target.value)}
                        />
                    </div>
                    <div class="row">
                        <label>Giới tính: </label>
                        <select name="gender"
                            onChange={e => setGender(e.target.value)}
                            value={gender}
                        >
                            <option value="">-- Chọn giới tính --</option>
                            <option value="1">Nam</option>
                            <option value="0">Nữ</option>
                        </select>
                    </div>
                    <div class="row">
                        <label>Ảnh đại diện: </label>
                        <input type="file" name="picture" value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />
                    </div>
                    <div class="row">
                        <label>Nội dung: </label>
                        <textarea name="content"  value={content}
                        onChange={e=>setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div class="row">
                        <input type="submit" name="submit" value="Gửi liên hệ" />
                        <input type="reset" name="reset" value="Nhập lại" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default LienHe