import mongoose from "mongoose"

mongoose.connect("mongodb+srv://lukasroberth:0987@cluster0.ifej3eb.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;