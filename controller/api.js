import {cliente} from "../models/cliente.js"
import { producto } from "../models/producto.js"
import { pedido } from "../models/pedido.js"

const crear=async(req,res,next)=>{
    const datos=req.body
    console.log(datos)
    const clientes=new cliente(datos)
    try{
        await clientes.save()
        res.json({
            mensaje:"Se creo el cliente"
        })
    }catch(error){
        console.log(error)
        next()
    }
    
}

const crearProducto=async(req,res,next)=>{
    const datos=req.body
    console.log(datos)
    const productos=new producto(datos)
    try{
        await productos.save()
        res.json({
            mensaje:"Se creo el producto"
        })
    }catch(error){
        console.log(error)
        next()
    }
    
}

const crearPedido=async(req,res,next)=>{
    const datos=req.body
    console.log(datos)
    const pedidos=new pedido(datos)
    try{
        await pedidos.save()
        res.json({
            mensaje:"Se creo el pedido"
        })
    }catch(error){
        console.log(error)
        next()
    }
    
}

const actualizar=async(req,res,next)=>{
          
    try{
        console.log(req.params.id)
        const clientes=await cliente.findByIdAndUpdate({_id:req.params.id},
            req.body,{
                new:true
            })
            res.json(clientes)
       
    }catch(error){
         res.send(error)
        next()
    }
    
}

const actualizarProducto=async(req,res,next)=>{
          
    try{
        console.log(req.params.id)
        const productos=await producto.findByIdAndUpdate({_id:req.params.id},
            req.body,{
                new:true
            })
            res.json(productos)
       
    }catch(error){
         res.send(error)
        next()
    }
    
}

const actualizarPedido=async(req,res,next)=>{
          
    try{
        console.log(req.params.id)
        const pedidos=await pedido.findByIdAndUpdate({_id:req.params.id},
            req.body,{
                new:true
            })
            res.json(pedidos)
       
    }catch(error){
         res.send(error)
        next()
    }
    
}

const eliminar=async(req,res,next)=>{
          
    try{
        console.log(req.params.id)
        const clientes=await cliente.findByIdAndDelete({_id:req.params.id},
            req.body,{
                new:true
            })
            res.json(clientes)
       
    }catch(error){
         res.send(error)
        next()
    }
    
}

const consulta=async(req,res,next)=>{
          
    try{
        const clientes=await cliente.find({})
        res.json(clientes)
    }catch(error){
        console.log(error)
        next()
    }
    
}

const consultaProductos=async(req,res,next)=>{
          
    try{
        const productos=await producto.find({})
        res.json(productos)
    }catch(error){
        console.log(error)
        next()
    }
    
}

const consultaPedidos = async (req, res, next) => {
  try {
    const pedidos = await pedido.find({})
      .populate("cliente")               // trae nombre/email del cliente
      .populate("productos.producto");   // trae nombre/precio de los productos

    res.json(pedidos);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const consultaId=async(req,res,next)=>{
          
    try{
        const clientes=await cliente.findById(req.params.id)
        if(!clientes){
            res.json({
                mensaje:"El cliente no existe"
            })
            next
        }
        res.json(clientes)
    }catch(error){
         res.send(error)
        next()
    }
    
}

const consultaProductoId=async(req,res,next)=>{
          
    try{
        const productos=await producto.findById(req.params.id)
        if(!productos){
            res.json({
                mensaje:"El producto no existe"
            })
            next
        }
        res.json(productos)
    }catch(error){
         res.send(error)
        next()
    }
    
}

const consultaPedidoId=async(req,res,next)=>{
          
    try{
        const pedidos=await pedido.findById(req.params.id)
        if(!pedidos){
            res.json({
                mensaje:"El pedido no existe"
            })
            next
        }
        res.json(pedidos)
    }catch(error){
         res.send(error)
        next()
    }
    
}

export{
    crear,
    consulta,
    consultaId, 
    consultaProductoId,
    consultaPedidoId,
    crearProducto,
    consultaProductos,
    crearPedido,
    consultaPedidos,
    actualizar,
    actualizarProducto,
    actualizarPedido
}