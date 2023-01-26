import { NextApiRequest, NextApiResponse } from "next"

import { ads_data } from "@/data/ads_data"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(ads_data)
}

export default handler
