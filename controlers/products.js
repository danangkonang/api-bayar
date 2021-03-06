const conn = require('../config/db');

exports.index = (req, res) => {
  conn.query('SELECT * FROM `barang`', (err, results) => {
    res.send(results);
  });
};

exports.show = (req, res) => {
  const id = req.params.id_barang;
  conn.query('SELECT * FROM `barang` WHERE `id_barang`= ?', [id], (err, results) => {
    res.send(results);
  });
};
