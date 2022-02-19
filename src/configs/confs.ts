export interface configsTypes {
    secretKey?: string,
    APIKEY?: string
}


const confs : configsTypes  = {
    secretKey: process.env.SECRETKEY,
    APIKEY: process.env.APIKEYGOOGLE || ""
}

module.exports = confs