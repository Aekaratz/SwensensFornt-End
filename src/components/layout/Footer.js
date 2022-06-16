import React from "react";
import LogoFooter from "../../assets/icons/svg/LogoFooter";

export default function Footer() {
  return (
    <footer className="w-full     ">
      <div className="flex justify-center gap-0  md:gap-5 lg:justify-between  xl:justify-between  2xl:justify-between flex-wrap bg-red-600 p-7">
        <div className="pb-10 md:pb-0  2xl:pb-0 xl:pb-0">
          <LogoFooter />
        </div>
        <ul className="flex flex-row justify-around 2xl:text-xl  md:gap-3  2xl:gap-5  flex-wrap gap-1 font-medium text-white ">
          <li>
            <a href="/#" target="_blank" className=" hover:text-red-100">
              ไอศกรีมของเรา
            </a>
          </li>{" "}
          <li>
            <a href="/#" className=" hover:text-red-100">
              สิทธิพิเศษ
            </a>
          </li>{" "}
          <li>
            <a href="/#" className=" hover:text-red-100">
              รีวอร์ด
            </a>
          </li>{" "}
          <li>
            <a href="/#" className=" hover:text-red-100">
              คูปองของฉัน
            </a>
          </li>{" "}
          <li>
            <a href="/#" className=" hover:text-red-100">
              บัตรกำนัลเงินสด
            </a>
          </li>{" "}
          <li>
            <a href="/#" className=" hover:text-red-100">
              บัตรสเวนเซ่นส์การ์ด
            </a>
          </li>{" "}
          <li>
            <a href="/#" className=" hover:text-red-100">
              ข้อมูลของฉัน
            </a>
          </li>
        </ul>
      </div>
      <div className=" bg-red-700  py-4 px-7 flex justify-center  flex-wrap-reverse md:justify-between items-center ">
        <div className="flex  items-center justify-center pt-7 md:pt-0 xl:pt-0 2xl:pt-0 2xl:justify-start gap-5">
          <img src="https://www.swensens1112.com/images/icon-facebook.svg" alt="facebook" className=" w-7" />
          <img src="https://www.swensens1112.com/images/icon-instagram.svg" alt="instagram" className=" w-7" />
          <img src="https://www.swensens1112.com/images/icon-youtube.svg" alt="youtube" className=" w-7" />
        </div>
        <div className="flex  flex-row  justify-center text-center flex-wrap gap-3 2xl:gap-5 text-white font-light text-sm 2xl:text-base">
          <div className="hover:text-red-100 cursor-pointer">คำถามที่พบบ่อย</div>
          <div className=" hover:text-red-100 cursor-pointer">ข้อกำหนดการใช้งาน</div>
          <div className=" hover:text-red-100 cursor-pointer"> นโยบายความเป็นส่วนตัว</div>
        </div>
      </div>
    </footer>
  );
}
