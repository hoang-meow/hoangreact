import React from 'react';
import './styles.scss';
import * as icon  from "react-icons/fa";

Header.propTypes = {};

function Header(props) {
  return (
    <>
      <div className="menutop">
        <button type="button" className="btnlogin">
          <span> Đăng nhập </span>
        </button>
      </div>
      <div className="menu">
        <div className="layoutLef">
          <img
            className="v"
            src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png"
            alt=""
            height="80px"
          />
          <div className="home-title v">
            <div >HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG</div>
            <div >
              LOÀI NGUY CẤP QUÝ HIẾM ĐƯỢC ƯU TIÊN BẢO VỆ
            </div>
          </div>
        </div>
        <div className="layoutRight">
        <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
