import api from "./api";

const URL = "/autores";

export const deletarAutor = async (id: string) => {
  await api.delete(`${URL}/${id}`);
};
