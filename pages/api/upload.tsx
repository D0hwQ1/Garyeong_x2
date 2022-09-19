import formidable from "formidable"
import fs from "fs"
require("dotenv").config()

const whitelist = ["http://localhost:3000", process.env.WEB]

export const config = {
    api: {
        bodyParser: false,
    },
}
export default async (req, res) => {
    if (whitelist.indexOf(req.headers.origin) === -1 || !req.headers.origin) {
        return res.status(404).send("not allowed")
    }

    if (req.method == "POST") {
        var form = new formidable.IncomingForm()
        form.parse(req, function (err, fields, files) {
            const { _, originalFilename, filepath } = files.file
            const { email, title } = JSON.parse(fields.json)

            fs.mkdirSync(`./public/request/${email}`, { recursive: true })
            fs.writeFileSync(`./public/request/${email}/${new Date().getTime()}_${title}.json`, fields.json)
            fs.renameSync(filepath, `./public/request/${email}/${new Date().getTime()}_${originalFilename}`)

            res.status(200).send("success")
        })
    } else {
        res.status(404).send("not found")
    }
}
