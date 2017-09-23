const mysql = require('mysql');

module.exports = {
    cadastrarUsuario,
    getUsuario,
    getUsuarios
}

let connection = mysql.createConnection({
    host: 'sistemas-distribuidos.cen1wavirsc8.us-east-2.rds.amazonaws.com',
    user: 'root',
    password: 'Sist_Dist',
    database: 'sistemas_distribuidos'
});

connection.connect((err) => {
    if (err) {
        console.error('Error Conect: ', err.stack);
    }
});

function cadastrarUsuario(usuario, callback) {
    connection.query('INSERT INTO usuario SET ?', usuario, (err, results) => {
        if (err)
            callback(500, err);
        else {
            usuario.Id = results;
            callback(null, usuario);
        }
    });
}

function getUsuario(id, callback) {
    let sql = 'SELECT * FROM usuario WHERE id = ?';
    connection.query(sql, [id], function (err, results) {
        if (err)
            callback(500, err);
        else
            callback(null, results);
    });
}

function getUsuarios(callback) {
    let sql = 'SELECT * FROM usuario';
    connection.query(sql, function (err, results) {
        if (err)
            callback(500, err);
        else
            callback(null, results);
    });
}
