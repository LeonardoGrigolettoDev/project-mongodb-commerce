db.produtos.updateMany(
  { ingredientes: { $ne: "ketchup" }, nome: { $ne: "McChicken" } },
  { $push: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
