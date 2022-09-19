/** @type {import('next').NextConfig} */
require("dotenv").config()

module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/faucet",
                destination: "http://d0hwq1.com:4500/",
            },
        ]
    },
}
