import formidable from "formidable";
import fs from "fs";
require("dotenv").config();

const whitelist = ["http://localhost:3000", process.env.WEB];

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    if (req.method == "POST") {
        if (whitelist.indexOf(req.headers.origin) === -1 || !req.headers.origin) {
            return res.status(404).send("not allowed");
        }
        const form = new formidable.IncomingForm();
        form.parse(req, async function (err, fields, files) {
            const { _, originalFilename, filepath } = files.file;

            const data = fs.readFileSync(filepath);
            fs.writeFileSync(`./public/request/${req.query.email}/${originalFilename}`, data);
        });

        res.status(200).send();
    } else {
        res.status(404).send("not found");
    }
};
