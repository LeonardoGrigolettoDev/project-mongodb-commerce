db.produtos.updateMany({ nome: "Big Mac" }, { $set: { ultimaModificacao: new Timestamp() } });
db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });