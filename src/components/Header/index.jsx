import React from 'react';
import './styles.scss';
import * as icon from 'react-icons/fa';

Header.propTypes = {};

function Header(props) {
  return (
    <>
      <div
        className="menutop"
        style={{ backgroundColor: props.data.color || '#ad180d' }}
      >
        <button type="button" className="btnlogin">
          <span> Đăng nhập </span>
        </button>
      </div>
      <div className="menu">
        <div className="layoutLef">
          <img
            className="mg-l"
            src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png"
            alt=""
            height="80px"
            style={{ cursor: 'pointer' }}
          />
          <div className="home-title mg-r">
            <div>{props.data.context1 || props.data.default1}</div>
            <div>{props.data.context2 || props.data.default2}</div>
          </div>
        </div>
        <div className="layoutRight">
          <div className="container-button">
            <a href="/tintuc" className="button-header theme--dark v-btn">
              <span className="v-btn__content"> Bản tin</span>
            </a>
            <a
              href="/hoso/gioithieu"
              className="button-header v-btn v-btn--router v-btn--text theme--dark v-size--default"
            >
              <span className="v-btn__content"> Giới thiệu</span>
            </a>
            <a
              href="/hoso/tailieu"
              className="button-header v-btn v-btn--router v-btn--text theme--dark v-size--default"
            >
              <span className="v-btn__content"> Tài liệu</span>
            </a>
            <a
              href="/hoso/lienhe"
              className="contact-button v-btn v-btn--has-bg v-btn--router theme--light v-size--default"
            >
              <span className="v-btn__content"> Liên hệ </span>
            </a>
          </div>
        </div>
      </div>
      <div className="search-container">
        <div className="search-item">
        
            <input id="input-29" type="text" />
        </div>
        <button className="btnNC">Nâng Cao</button>
      </div>
      
    </>
  );
}

export default Header;
