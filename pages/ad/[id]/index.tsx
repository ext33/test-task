import React from "react"

import { Carousel, Descriptions, Typography } from "antd"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Image from "next/image"

import adService from "@/api/adService"
import MainLayout from "@/components/layout/MainLayout"
import { IAdsItem } from "@/types/ads"
import { parseDateToString } from "@/utils/data"

interface IAdViewProps {
    data: IAdsItem | null
}

const AdView = ({ data }: IAdViewProps) => {

    return (
        <MainLayout pageTitle="Главная">
            <div className="page-wrapper">

                <Typography.Title level={2}>
                    {data?.title || "-"}
                </Typography.Title>

                <div className="ad-view__wrapper">
                    <Carousel className="ad-view__slider">
                        {
                            data?.images?.map((item, index) => (
                                <Image
                                    key={index}
                                    width={900}
                                    height={400}
                                    src={item}
                                    alt={""}
                                />
                            ))
                        }
                    </Carousel>

                    <Descriptions
                        className="ad-view__info"
                        column={1}
                        bordered
                    >
                        <Descriptions.Item label="Цена">
                            {data?.price || "-"}
                        </Descriptions.Item>
                        <Descriptions.Item label="Дата создания">
                            {parseDateToString(data?.create_at)}
                        </Descriptions.Item>
                        <Descriptions.Item label="Описание">
                            {data?.description || "-"}
                        </Descriptions.Item>
                    </Descriptions>
                </div>

            </div>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const params = context.query
    const id = typeof params.id === "string" ? params.id : ""

    let data: IAdsItem | null = null

    await adService.fetchCurrentAd(id)
        .then((response) => {
            if (response.status === 200) {
                data = response.data
            }
        })

    return { props: { data: data } }
}

export default AdView
