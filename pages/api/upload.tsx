import fs from "fs";
require("dotenv").config();
const whitelist = ["http://localhost:3000", process.env.WEB];

export default async (req, res) => {
    if (req.method == "POST") {
        if (whitelist.indexOf(req.headers.origin) === -1 || !req.headers.origin) {
            return res.status(404).send("not allowed");
        }
        var { email, title, desc } = req.body;

        fs.mkdirSync(`./public/request/${email}`, { recursive: true });
        fs.writeFileSync(`./public/request/${email}/${title}.json`, JSON.stringify(req.body));

        res.status(200).send();
    } else {
        res.status(404).send("not found");
    }
};
