import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AutoComplete from "../components/AutoComplete";
import { RegisterService } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const AddressSchema = Yup.object().shape({
  address: Yup.string().max(250, "กรุณาระบุตัวอักษร <=  ${max} ").required("กรุณาระบุชื่อ"),
  tambon: Yup.string().required("กรุณาระบุตำบล"),
  district: Yup.string().required("กรุณาระบุอำเภอ"),
  county: Yup.string().required("กรุณาระบุจังหวัด"),
  postalcode: Yup.string().required("กรุณาระบุรหัสไปรษณีย์"),
});

const personalSchema = Yup.object().shape({
  name: Yup.string().required("กรุณาระบุชื่อ"),
  lastname: Yup.string().required("กรุณาระบุนามสกุล"),
  phone: Yup.string().max(10, "กรุณาตรวจสอบโทรศัพท์อีกครั้ง").required("กรุณาระบุโทรศัพท์"),
  email: Yup.string().required("กรุณาระบุอีเมล"),
  password: Yup.string().min(8, "กรุณาระบุตัวอักษร >=  ${min} ").required("กรุณาระบุรหัสผ่าน"),
  conpassword: Yup.string()
    .required("กรุณาระบุรหัสผ่าน")
    .oneOf([Yup.ref("password"), null], "รหัสผ่านไม่ตรงกัน"),
  birthday: Yup.string().required("กรุณาระบุวันเกิด"),
});

export default function Register() {
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();

  const [dataRegis, setDataRegis] = useState({
    persondata: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      conpassword: "",
      gender: "0",
      birthday: "",
    },
    personAddress: {
      address: "",
      tambonID: "",
      tambon: "",
      districtID: "",
      district: "",
      countyID: "",
      county: "",
      postalcode: "",
    },
  });

  function Tab1() {
    return (
      <Formik
        validationSchema={personalSchema}
        initialValues={{
          name: dataRegis.persondata.name,
          lastname: dataRegis.persondata.lastname,
          phone: dataRegis.persondata.phone,
          email: dataRegis.persondata.email,
          password: dataRegis.persondata.password,
          conpassword: dataRegis.persondata.conpassword,
          gender: dataRegis.persondata.gender,
          birthday: dataRegis.persondata.birthday,
        }}
        onSubmit={async (values) => {
          let tmp = { ...dataRegis };
          tmp.persondata = { ...values };
          setDataRegis(tmp);
          setTab(2);
        }}
        enableReinitialize={true}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <div className="w-358 lg:w-480">
              <div className=" grid grid-cols-2 gap-2 ">
                <div>
                  <label htmlFor="name">ชื่อ</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="กรุณาระบุรกรอกชื่อ"
                    className={`${touched.name && !!errors.name ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="name" className={errors.name && touched.name ? "error-message" : ""} />
                </div>
                <div>
                  <label htmlFor="lastname">นามสกุล</label>
                  <Field
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="กรุณาระบุรนามสกุล"
                    className={`${touched.lastname && !!errors.lastname ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="lastname" className={errors.lastname && touched.lastname ? "error-message" : ""} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="phone">โทรศัพท์</label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    max={10}
                    placeholder="กรุณาระบุโทรศัพท์"
                    className={`${touched.phone && !!errors.phone ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="phone" className={errors.phone && touched.phone ? "error-message" : ""} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="email">อีเมล</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="กรุณาระบุรอีเมล"
                    className={`${touched.email && !!errors.email ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="email" className={errors.email && touched.email ? "error-message" : ""} />
                </div>
                <div className="col-span-1">
                  <label htmlFor="password">รหัสผ่าน</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="กรุณาระบุรหัสผ่าน"
                    className={`${touched.password && !!errors.password ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="password" className={errors.password && touched.password ? "error-message" : ""} />
                </div>
                <div className="col-span-1">
                  <label htmlFor="conpassword">ยืนยันรหัสผ่าน</label>
                  <Field
                    type="password"
                    id="conpassword"
                    name="conpassword"
                    placeholder="กรุณาระบุรยืนยันรหัสผ่าน"
                    className={`${touched.conpassword && !!errors.conpassword ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="conpassword" className={errors.conpassword && touched.conpassword ? "error-message" : ""} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="conpassword">เพศ (ไม่ระบุได้)</label>
                  <div className="flex justify-start gap-6 py-2">
                    <div
                      onClick={() => {
                        setFieldValue("gender", "1");
                      }}
                      className={` ${values.gender === "1" ? "radio-active" : "radio"}`}
                    >
                      ชาย
                    </div>
                    <div
                      onClick={() => {
                        setFieldValue("gender", "2");
                      }}
                      className={` ${values.gender === "2" ? "radio-active" : "radio"}`}
                    >
                      หญิง
                    </div>
                    <div
                      onClick={() => {
                        setFieldValue("gender", "0");
                      }}
                      className={` ${values.gender === "0" ? "radio-active" : "radio"}`}
                    >
                      ไม่ระบุ
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label htmlFor="birthday">ของขวัญวันเกิดรอคุณอยู่</label>
                  <Field
                    type="date"
                    id="birthday"
                    name="birthday"
                    placeholder="กรุณาระบุรยืนยันรหัสผ่าน"
                    className={`${touched.birthday && !!errors.birthday ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="birthday" className={errors.birthday && touched.birthday ? "error-message" : ""} />
                </div>
                <div className="col-span-2 flex justify-center py-3">
                  <button type="submit" className="btn-red">
                    ถัดไป
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }

  function Tab2() {
    return (
      <Formik
        validationSchema={AddressSchema}
        initialValues={{
          address: dataRegis.personAddress.address,
          tambonID: dataRegis.personAddress.tambonID,
          tambon: dataRegis.personAddress.tambon,
          districtID: dataRegis.personAddress.districtID,
          district: dataRegis.personAddress.district,
          countyID: dataRegis.personAddress.countyID,
          county: dataRegis.personAddress.county,
          postalcode: dataRegis.personAddress.postalcode,
        }}
        onSubmit={async (values) => {
          let tmp = { ...dataRegis };
          tmp.personAddress = values;
          setDataRegis(tmp);
          setTab(3);
        }}
        enableReinitialize={true}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form>
            <div className="w-358 lg:w-480">
              <div className=" grid grid-cols-2 gap-2 ">
                <div className="col-span-2">
                  <label htmlFor="address">รายละเอียดที่อยู่</label>
                  <Field type="text" id="address" name="address" className={`${touched.address && !!errors.address ? "input-invalid " : ""}`} />
                  <ErrorMessage component="span" name="address" className={errors.address && touched.address ? "error-message" : ""} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="findKeyword">รหัสไปรษณีย์</label>
                  <AutoComplete
                    id="findKeyword"
                    retrunValue={(v) => {
                      setFieldValue("tambonID", v.subdistrictID);
                      setFieldValue("tambon", v.subdistrictName);
                      setFieldValue("districtID", v.districtID);
                      setFieldValue("district", v.districtName);
                      setFieldValue("countyID", v.provinceId);
                      setFieldValue("county", v.provinceName);
                      setFieldValue("postalcode", v.zipCode);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="tambon">ตำบล</label>
                  <Field type="text" id="tambon" name="tambon" readOnly={true} className={`${touched.tambon && !!errors.tambon ? "input-invalid " : ""}`} />
                  <ErrorMessage component="span" name="tambon" className={errors.tambon && touched.tambon ? "error-message" : ""} />
                </div>
                <div>
                  <label htmlFor="district">อำเภอ</label>
                  <Field
                    type="text"
                    id="district"
                    name="district"
                    readOnly={true}
                    className={`${touched.district && !!errors.district ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="district" className={errors.district && touched.district ? "error-message" : ""} />
                </div>
                <div>
                  <label htmlFor="county">จังหวัด</label>
                  <Field type="text" id="county" name="county" readOnly={true} className={`${touched.county && !!errors.county ? "input-invalid " : ""}`} />
                  <ErrorMessage component="span" name="county" className={errors.county && touched.county ? "error-message" : ""} />
                </div>
                <div>
                  <label htmlFor="postalcode">รหัสไปรษณีย์</label>
                  <Field
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    readOnly={true}
                    className={`${touched.postalcode && !!errors.postalcode ? "input-invalid " : ""}`}
                  />
                  <ErrorMessage component="span" name="postalcode" className={errors.postalcode && touched.postalcode ? "error-message" : ""} />
                </div>

                <div className="col-span-2 flex justify-center py-3 gap-2">
                  <button
                    type="button"
                    className="btn-red-gray"
                    onClick={() => {
                      let tmp = { ...dataRegis };
                      tmp.personAddress = values;
                      setDataRegis(tmp);
                      setTab(1);
                    }}
                  >
                    ย้อนกลับ
                  </button>
                  <button type="submit" className="btn-red">
                    ถัดไป
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }

  function Tab3() {
    return (
      <div className="w-358 lg:w-480">
        <h1 className=" font-light text-sm lg:text-lg py-2">ข้อมูลส่วนตัว</h1>
        <div className="grid grid-cols-3  font-light">
          <div className=" text-gray-700 pl-2 lg:pl-4">ชื่อ-นามสกุล</div>
          <div className="flex-1 text-gray-700  pl-2 lg:pl-4 col-span-2">{dataRegis.persondata.name + " " + dataRegis.persondata.lastname}</div>
          <div className=" text-gray-700 pl-2 lg:pl-4">เบอร์โทร</div>
          <div className="flex-1 text-gray-700  pl-2 lg:pl-4  col-span-2">{dataRegis.persondata.phone}</div>
          <div className=" text-gray-700 pl-2 lg:pl-4">อีเมล</div>
          <div className=" text-gray-700  pl-2 lg:pl-4  col-span-2">{dataRegis.persondata.email}</div>
          <div className=" text-gray-700 pl-2 lg:pl-4">เพศ</div>
          <div className=" text-gray-700  pl-2 lg:pl-4   col-span-2">
            {dataRegis.persondata.gender === "1" ? "ชาย" : dataRegis.persondata.gender === "2" ? "หญิง" : "ไม่ระบุ"}
          </div>
          <div className=" text-gray-700 pl-2 lg:pl-4">วันเกิด</div>
          <div className=" text-gray-700  pl-2 lg:pl-4  col-span-2">{dataRegis.persondata.birthday}</div>
        </div>

        <h1 className="  font-light text-sm lg:text-lg py-2">ที่อยู่</h1>
        <div className="text-gray-700  pl-2 lg:pl-4  font-light">
          {dataRegis.personAddress.address +
            " ตำบล " +
            dataRegis.personAddress.tambon +
            " อำเภอ " +
            dataRegis.personAddress.district +
            " จังหวัด " +
            dataRegis.personAddress.county +
            " " +
            dataRegis.personAddress.postalcode}
        </div>

        <div className=" flex justify-center py-3 gap-2">
          <button
            type="button"
            className="btn-red-gray"
            onClick={() => {
              setTab(2);
            }}
          >
            ย้อนกลับ
          </button>
          <button
            className="btn-red"
            type="button"
            onClick={async () => {
              let result = await RegisterService(dataRegis);
              if (result.status === 1) {
                Swal.fire({
                  title: 'ลงทะเบียนสำเร็จ',
                  text: '',
                  icon: 'success',
                  confirmButtonText: 'ปิด'
                })
                navigate("/");
              } else if (result.status === 2) {
                Swal.fire({
                  title: "อีเมลถูกใช้งานแล้ว",
                  text: "กรุณาตรวจสอบอีเมลอีกครั้ง",
                  icon: "error",
                });
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "เกิดข้อผิดพลาด",
                  icon: "error",
                });
              }
            }}
          >
            สมัครสมาชิก
          </button>
        </div>
      </div>
    );
  }

  function SwichTab() {
    switch (tab) {
      case 2:
        return <Tab2 />;
      case 3:
        return <Tab3 />;
      default:
        return <Tab1 />;
    }
  }

  return (
    <div className="2xl:py-20 md:px-24  px-4  lg:px-24  xl:px-52 2xl:px-64 py-10 xl:py-5 ">
      <div className="flex  justify-center  items-center  ">
        <div className="bg-white  drop-shadow-2xl rounded-lg">
          <div className="box-header   flex items-center     rounded-t-lg">
            <div className="p-10  text-white">
              <div className=" text-4xl">ยินดีต้อนรับ</div>
              <p>เข้าสู่ระบบเพื่อใช้งาน</p>
            </div>
          </div>
          <div className="px-1 xl:px-5 py-1 xl:py-5">
            <ul className="flex space-x-2 bg-slate-200 rounded-md mb-3 flex-wrap">
              <li className="flex-auto">
                <div className={`${tab === 1 ? "tab-register-active" : "tab-register"}`}>ข้อมูลส่วนตัว</div>
              </li>
              <li className="flex-auto">
                <div className={`${tab === 2 ? "tab-register-active" : "tab-register"}`}>ที่อยู่</div>
              </li>
              <li className="flex-auto">
                <div className={`${tab === 3 ? "tab-register-active" : "tab-register"}`}>ยันยืนข้อมูล</div>
              </li>
            </ul>
            <SwichTab />
          </div>
        </div>
      </div>
    </div>
  );
}
