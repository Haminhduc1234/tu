import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="header_container">
        <img
          className="logo"
          src="https://cdn.thuvienphapluat.vn/images/logo_xuan.png?fbclid=IwAR0HDtsmNxK0n4Mhfrzj9XFN6wtWAP5a05GuVQYMFhdeGGwA08vpcLYk714"
          alt=""
        />
        <div className="header_container_content">
          <div className="header_container_title">VIỆN PHÁP LUẬT</div>
          <div className="header_container_sub_title">
            Hỗ trợ quá trình xử phạt vi phạm hành chính lĩnh vực lâm nghiệp
          </div>
        </div>
      </div>

      <div className="content_container">
        <div className="content_container_inform">
          <p className="text-center content-title">
            QUY ĐỊNH XỬ PHẠT HÀNH CHÍNH TRONG LĨNH VỰC LÂM NGHIỆP
          </p>
          <div className="line_div" />
          <div>
            <p className="title_search">Tra cứ xử phạt hành chính</p>
            <input className="input_search" type="text" />
            <button className="button_search">Tìm kiếm</button>
          </div>
          <div>
            <button className="button_action">Thêm mới</button>
            <button className="button_action">Sửa</button>
            <button className="button_action">Xóa</button>
          </div>
        </div>
        <div className="content_sidebar">
          <div className="content_sidebar_item">
            <img
              className="avatar"
              src="https://tse1.mm.bing.net/th?id=OIP.DA2u6Ioeunl7aZ8z_sVsaQHaLH&pid=Api&P=0"
              alt=""
            />
          </div>
          <div className="content_sidebar_item"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
