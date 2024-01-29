import api from "./index";

export async function getAllClothes() {
  const { data } = await api.get("/clothes");
  return data;
}

export async function getOneClothes(clotheId) {
  const { data } = await api.get("/clothes");
  console.log(data);
  return data.filter((clothe) => clothe.id == clotheId)[0];
}
