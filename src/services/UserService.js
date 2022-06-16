import Instance from "../helpers/Axios";

export async function AuthenService(data) {
  try {
    const response = await Instance.get(`User/Authen/${data.email}/${data.password}`);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function RegisterService(data) {
  try {
    const response = await Instance.post(`User/Register`, data);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}
