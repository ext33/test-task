import { NextApiRequest, NextApiResponse } from "next"

import { ads_data } from "@/data/ads_data"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body

    if (req.method !== "POST") return
    if (req.body.search === "" || !req.body.search) {
        res.status(200).json([])
    }

    const data = ads_data.filter((item) =>
        item.title.toLowerCase().includes(body.search.toLowerCase()) || item.description.toLowerCase().includes(body.search.toLowerCase())
    )

    if (data) {
        res.status(200).json(data)
    } else {
        res.status(200).json([])
    }

}

export default handler
