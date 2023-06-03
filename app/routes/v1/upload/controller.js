import service from "./service.js";
import { upload } from "../../../utils/index.js";
import fs from "fs";

const getAll = async (_req, _res) => {
  const data = await service.getAll();
  _res.send({ data, status: "success", message: "Get image success" });
};

const getById = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.getById(id);
  _res.send({ data: [data], status: "success", message: "Get image success" });
};

const add = async (_req, _res) => {
  console.log(_req.file);
  const response = await upload(_req.file.path);
  await fs.unlink(_req.file.path, () => {});
  const data = await service.add({ path: response.secure_url });
  _res.send({
    data: [data],
    status: "success",
    message: "Create image success",
  });
};

const deleteById = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({
    data: [data],
    status: "success",
    message: "Delete image success",
  });
};

export { getAll, getById, add, deleteById };
