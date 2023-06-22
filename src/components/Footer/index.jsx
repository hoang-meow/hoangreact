import React from 'react';
import './styles.scss';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div  className="bottom-footer pl-8">
      <div  className="pt-1">
        {' '}
        HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP QUÝ HIẾM ĐƯỢC ƯU TIÊN BẢO
        VỆ{' '}
      </div>
      <div  className="pt-1">
        <span
             className=" pr-8"
        >
          Điều khoản &amp; Bảo mật
        </span>
        <span >Bản quyền bởi Ban quản lý dự án WLP</span>
      </div>
      <div  className="pt-2">
        Được tài trợ bởi: Quỹ môi trường dự án toàn cầu (GEF) THÔNG QUA NGÂN
        HÀNG THẾ GIỚI (WB){' '}
      </div>
    </div>
  );
}

export default Footer;
