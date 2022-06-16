import Instance from "../helpers/Axios";

export async function FindAddressService(keyword) {
  try {
    const response = await Instance.get(`https://localhost:7147/api/Address/${keyword}`);
    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
}
