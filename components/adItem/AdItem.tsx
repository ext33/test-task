import React from "react"

import { Card, Statistic, Typography } from "antd"
import Image from "next/image"
import { useRouter } from "next/router"

import { IAdsItem } from "@/types/ads"
import { parseDateToString, sliceLongString } from "@/utils/data"

interface IAdItemProps {
    data: IAdsItem
}

const AdItem = ({ data }: IAdItemProps) => {
    const router = useRouter()

    return (
        <Card
            hoverable
            className="ad-item__card"
            cover={
                <Image
                    width={300}
                    height={300}
                    src={data.images[0]} alt={""}
                />
            }
            onClick={() => router.push(`/ad/${data.id}`)}
        >
            <Statistic
                title={
                    <div className="ad-item__price-wrapper">
                        <span>{data.price}</span>
                        <span>{parseDateToString(data.create_at)}</span>
                    </div>
                }
                value={data.title}
            />

            <Typography.Paragraph>
                {sliceLongString(data.description, 30)}
            </Typography.Paragraph>

        </Card>
    )
}

export default AdItem
