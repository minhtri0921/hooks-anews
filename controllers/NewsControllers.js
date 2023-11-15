const mysql2 = require('mysql2');

const configDB = {
    host: "localhost",
    user: "root",
    password: "mt2109",
    database: "anews"
};

class NewsController {

    // [GET] /news
    async index(req, res) {
        try {
            var conn = mysql2.createConnection(configDB);

            var sqlSelect = "SELECT * FROM news";
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
    async getNewsById(req, res) {
        var id = req.params.id;
        try {
            var conn = mysql2.createConnection(configDB);

            const newsById = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM news WHERE id = ${id}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(newsById[0]);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
    async getListNewsByCat(req, res) {
        var catId = req.query.cid;
        try {
            var conn = mysql2.createConnection(configDB);

            const listNewsByCat = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM news WHERE cat_id = ${catId}`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listNewsByCat);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
}
module.exports = new NewsController();
