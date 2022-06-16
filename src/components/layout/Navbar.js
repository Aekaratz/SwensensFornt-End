import React from "react";
import Logo from "../../assets/icons/svg/Logo";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAuthenAtom } from "../../recoil/atom/AuthenAtom";

export default function Navbar() {
  const [userAuthen, setUserAuthen] = useRecoilState(userAuthenAtom);
  
  function DesktopAndIpad() {
    return (
      <nav className="bg-white items-center flex   px-6 justify-between" aria-label="Global">
        <Link className="py-4 text-xl font-semibold " to="/">
          <Logo />
        </Link>
        <div className="flex  gap-5 items-center text-lg font-medium">
          <div className="border-l border-l-gray-200 py-3 ">
            <div className="flex justify-start gap-1 items-center pb-2 cursor-pointer py-2 pl-6 pr-2 group ">
              <img
                src="https://www.swensens1112.com/images/icon-location.svg"
                alt="location"
                className="icon"
                style={{ height: 24, width: "auto", marginRight: 8 }}
              />
              <div className="text-gray-500  w-60   font-normal group-hover:text-red-600"> กรุณาเลือกที่อยู่จัดส่ง </div>
              <div className=" text-gray-500 group-hover:text-red-600">
                <svg viewBox="0 0 1024 1024" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                </svg>
              </div>
            </div>
          </div>

          <div className=" pl-6 pr-2 flex gap-5 py-3  border-l border-l-gray-200 ">
            {userAuthen.email === null ? (
              <>
                {" "}
                <Link to="/Register" className="  btn-red-outlet  items-center flex justify-center">
                  สมัครสมาชิก
                </Link>
                <Link to="/Login" className=" btn-red items-center flex justify-center">
                  เข้าสู่ระบบ
                </Link>
              </>
            ) : (
              <div className="flex items-center justify-center text-red-600">
                <div className="px-2">Login แล้ว</div>
                <button
                  className="btn-red"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("fullname");
                    localStorage.removeItem("user");
                    localStorage.removeItem("email");
                    setUserAuthen({
                      fullName: localStorage.getItem("fullname"),
                      user: localStorage.getItem("user"),
                      email: localStorage.getItem("email"),
                    });
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          <a className=" flex py-3 pl-6  items-center gap-1 border-l text-gray-600  border-l-gray-300" href="/#">
            <span className="py-2">TH</span>
            <div className="py-2">
              <svg viewBox="0 0 1024 1024" data-icon="caret-down" width="0.85em" height="0.85em" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
              </svg>
            </div>
          </a>
        </div>
      </nav>
    );
  }

  function Mobile() {
    return (
      <nav className="bg-white px-6 pt-1">
        <div className="flex justify-between py-4 items-center">
          <img src="https://www.swensens1112.com/images/icon-scan-black.svg" alt="icon-scan-black" className="" style={{ height: 32, width: "auto" }} />
          <Logo />
          <div className="flex justify-between gap-6 items-center">
            <img src="https://www.swensens1112.com/images/icon-bag.svg" alt="bag" className="" style={{ height: 24, width: "auto" }} />
            <img src="https://www.swensens1112.com/images/menu.svg" alt="menu" className="icon" style={{ height: 32, width: "auto" }} />
          </div>
        </div>
        <div className="flex justify-start gap-1 items-center pb-2 cursor-pointer">
          <img
            src="https://www.swensens1112.com/images/icon-location.svg"
            alt="location"
            className="icon"
            style={{ height: 24, width: "auto", marginRight: 8 }}
          />
          <div className="text-gray-500  w-5/6 text-lg"> กรุณาเลือกที่อยู่จัดส่ง </div>
          <div className=" text-gray-500">
            <svg viewBox="0 0 1024 1024" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
            </svg>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <header className="sticky top-0 z-30 w-full drop-shadow">
      <div className="hidden lg:block">
        <DesktopAndIpad />
      </div>
      <div className="block lg:hidden">
        <Mobile />
      </div>
    </header>
  );
}
