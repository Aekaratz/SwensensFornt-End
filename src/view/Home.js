import React from "react";

export default function Home() {
  return (
    <>
      <section className="banner py-1 pb-6 lg:pt-28 pt-0">
        <div className="flex flex-col-reverse md:px-24  lg:grid lg:grid-cols-2 px-4  lg:px-24  xl:px-52 2xl:px-64  items-center ">
          <div className=" text-center text-3xl mt-4 md:text-4xl lg:text-4xl lg:text-left font-medium   xl:text-5xl  2xl:text-6xl    pb-3">
            <div className="leading-tight px-1 ">
              <div>สมัครเป็นสมาชิก</div>
              <div>สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่</div>
            </div>
            <div className=" font-light text-sm lg:text-lg 2xl:text-xl mt-5 px-1 ">
              พิเศษสุดๆ! สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้ ยิ่งคุ้ม ใครๆ ก็สมัครได้ ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ
              รอไม่ได้แล้ว สมัครเลย
            </div>
          </div>
          <img src="https://www.swensens1112.com/images/banner-image.svg" alt="banner" />
        </div>

        <div className="flex justify-end">
          <button className=" btn-banner ">สั่งออนไลน์</button>
        </div>
      </section>

      <section className=" 2xl:py-20 md:px-24  px-4  lg:px-24  xl:px-52 2xl:px-64   py-6 bg-white">
        <h1 className=" text-xl pb-4 2xl:text-4xl 2xl:font-medium 2xl:pb-10">ดีลสุดคุ้ม</h1>
        <img
          height={205}
          width={368}
          className=" pb-4 2xl:pb-16"
          src="https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/superdeal%2FAW_SW-HAPPY-Thu-5-MAY.-BANNER-1440x810-3.png?alt=media"
          alt="bg-page-bottom"
        />
        <h1 className="2xl:text-4xl 2xl:font-medium">ของรางวัลสำหรับคุณ</h1>
      </section>

      <section
        className=" md:px-24  px-4  lg:px-24  xl:px-52 2xl:px-64 pt-2 2xl:pt-20"
        style={{ backgroundImage: 'url("https://www.swensens1112.com/images/bg-page-bottom.jpg")' }}
      >
        <div className="flex flex-col-reverse  lg:grid lg:grid-cols-2 content-end 2xl:h-96  items-center ">
          <img src="https://www.swensens1112.com/images/app-screen.png" alt="app-screen" className="   " />
          <div className="flex flex-wrap text-4xl font-medium justify-center lg:justify-start">
            <div className="py-7">ดาวน์โหลดที่</div>
            <div className="grid grid-cols-2  items-center gap-10 ">
              <img src="https://www.swensens1112.com/images/google-play.png" alt="google-play" className=" h-13 w-full" />
              <img src="https://www.swensens1112.com/images//app-store.png" alt="app-store" className=" h-13 w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
