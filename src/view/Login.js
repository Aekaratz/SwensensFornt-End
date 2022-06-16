import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthenService } from "../services/UserService";
import { useRecoilState } from "recoil";
import { userAuthenAtom } from "../recoil/atom/AuthenAtom";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Swal from "sweetalert2/dist/sweetalert2.js";


const authenSchema = Yup.object().shape({
  email: Yup.string().required("กรุณาระบุอีเมล"),
  password: Yup.string().required("กรุณาระบุรหัสผ่าน"),
});

export default function Login() {
  const [userAuthen, setUserAuthen] = useRecoilState(userAuthenAtom);
  const navigate = useNavigate();

  return (
    <div className="2xl:py-20 md:px-24  px-4  lg:px-24  xl:px-52 2xl:px-64 ">
      <div className="flex  justify-center  items-center h-screen ">
        <div className="bg-white  drop-shadow-2xl rounded-lg">
          <div className="box-header-login  flex items-center    ">
            <div className="p-10  text-white">
              <div className=" text-4xl">ยินดีต้อนรับ</div>
              <p>เข้าสู่ระบบเพื่อใช้งาน</p>
            </div>
          </div>
          <Formik
            validationSchema={authenSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              let result = await AuthenService(values);
              if (result.status === 1) {
                localStorage.setItem("fullname", result.data.fullNmae);
                localStorage.setItem("user", result.data.token);
                localStorage.setItem("email", result.data.email);
                setUserAuthen({
                  fullName: localStorage.getItem("fullname"),
                  user: localStorage.getItem("user"),
                  email: localStorage.getItem("email"),
                });
                navigate("/");
              } else {
                Swal.fire({
                  title: "เข้าสู่ระบบไม่สำเร็จ",
                  text: "กรุณาตรวจสอบอีเมลและรหัสผ่านอีกครั้ง",
                  icon: "error",
                });
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className=" px-5 py-5">
                  <div>
                    <label htmlFor="email" className="text-lg  font-light ">
                      อีเมล
                    </label>
                    <Field
                      type="text"
                      placeholder="กรอกอีเมล"
                      id="email"
                      name="email"
                      className={`${touched.email && !!errors.email ? "input-invalid " : ""}`}
                    />
                    <ErrorMessage component="span" name="email" className={errors.email && touched.email ? "error-message" : ""} />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-lg font-extralight ">
                      รหัสผ่าน
                    </label>
                    <Field type="password" placeholder="กรอกรหัสผ่าน" id="password" name="password" className={`${touched.password && !!errors.password ? "input-invalid " : ""}`} />
                    <ErrorMessage component="span" name="password" className={errors.password && touched.password ? "error-message" : ""} />
                  </div>
                </div>
                <div className="fromcontro flex justify-end px-5 ">
                  <a className="forget-password text-red-600  px-5" href="/#">
                    ลืมรหัสผ่าน
                  </a>
                </div>
                <div className=" px-10 py-5 flex justify-center">
                  <button type="submit" className="btn-red-login">
                    เข้าสู่ระบบ
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
