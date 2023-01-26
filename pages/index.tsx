import React from "react"

import { Empty } from "antd"
import { GetServerSideProps } from "next"

import adService from "@/api/adService"
import AdItem from "@/components/adItem/AdItem"
import MainLayout from "@/components/layout/MainLayout"
import { IAdsItem } from "@/types/ads"

interface IHomePageProps {
    data: IAdsItem[]
}

const Home = ({ data }: IHomePageProps) => {
    return (
        <MainLayout pageTitle="Главная">
            <div className="page-wrapper items__wrapper">
                {
                    data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <AdItem
                                    key={index}
                                    data={item}
                                />
                            )
                        })
                        :
                        <div>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
                }
            </div>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    let data: IAdsItem[] = []

    await adService.fetchAllAds()
        .then((response) => {
            if (response.status === 200) {
                data = response.data
            }
        })

    return { props: { data: data } }
}

export default Home
