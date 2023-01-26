import { NextApiRequest, NextApiResponse } from "next"

import { ads_data } from "@/data/ads_data"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const data = ads_data.find((item) => item.id === req.query.id)

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404)
    }
}

export default handler
