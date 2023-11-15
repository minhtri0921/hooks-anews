const mysql2 = require('mysql2');

const configDB = {
    host: "localhost",
    user: "root",
    password: "mt2109",
    database: "anews"
};

class ContactController {
    async postContact(req, res) {
        var formData = req.form_data
        // console.log(formData);
        try {
            var conn = mysql2.createConnection(configDB);


            const listNews = await new Promise((resolve, reject) => {
                conn.query(`INSERT INTO contact(name,phone,web,gender,content,file) VALUES ('${formData.name}','${formData.phoneNumber}',
                '${formData.web}','${formData.gender}','${formData.content}','${formData.files}')`, function (err, results) {
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

}

module.exports = new ContactController();
