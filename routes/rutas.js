import express from "express"
import { crear, crearProducto, crearPedido, consultaId, actualizar, actualizarProducto, actualizarPedido } from "../controller/api.js";
import { consulta, consultaProductos, consultaPedidos, consultaProductoId, consultaPedidoId } from "../controller/api.js";
//import { eliminar } from "../controller/api.js";

//import { listar } from "../controller/api.js";
//import { editar } from "../controller/api.js";
const router=express.Router();

router.post("/crear",crear)
router.post("/crearproducto", crearProducto)
router.post("/crearpedido", crearPedido)

//router.delete("/eliminar", eliminar)
router.put("/actualizar/:id", actualizar)
router.put("/actualizarproducto/:id", actualizarProducto)
router.put("/actualizarpedido/:id", actualizarPedido)
//router.get("/listar", listar)
//router.put("/editar", editar)

router.get("/consulta", consulta)
router.get("/consulta/:id", consultaId)
router.get("/consultaproducto/:id", consultaProductoId)
router.get("/consultaproducto", consultaProductos)
router.get("/consultapedido", consultaPedidos)
router.get("/consultapedido/:id",consultaPedidoId)

export default router