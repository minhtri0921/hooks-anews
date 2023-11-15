const mysql2 = require('mysql2');

const configDB = {
    host: "localhost",
    user: "root",
    password: "mt2109",
    database: "anews"
};

class CategoriesControllers{

    // [GET] /Categories
    async index(req, res) {
        try {
            var conn = mysql2.createConnection(configDB);

            var sqlSelect = "SELECT * FROM categories";
            const listNews = await new Promise((resolve, reject) => {
                conn.query(sqlSelect, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            });
            res.status(200).send(listNews);
        } catch (err) {
            console.log("Lỗi: " + err);
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
    async getCatById(req, res) {
        var id = req.query.id;
        try {
            var conn = mysql2.createConnection(configDB);

            const catById = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM categories WHERE id = ${id}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(catById[0]);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
}

module.exports = new CategoriesControllers();
