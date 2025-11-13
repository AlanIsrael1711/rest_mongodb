import mongoose from "mongoose";
const Schema = mongoose.Schema;

mongoose.pluralize(null);

const pedidoSchema = new Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente", // referencia al modelo cliente
    required: true
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "producto" // referencia al modelo producto
      },
      cantidad: { type: Number, default: 1 } // opcional
    }
  ]
});

const pedido = mongoose.model("pedido", pedidoSchema);

export { pedido };
