import React from "react"

import { Descriptions } from "antd"
import { useSession } from "next-auth/react"

import MainLayout from "@/components/layout/MainLayout"

const Profile = () => {
    const { data } = useSession()

    return (
        <MainLayout pageTitle="Профиль">
            <div className="page-wrapper">
                <Descriptions
                    className="profile-page__pane"
                    title="Профиль"
                    column={1}
                    bordered
                >
                    <Descriptions.Item label="Email">
                        {data?.user?.email || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Имя пользователя">
                        {data?.user?.name || "-"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Активный">
                        +
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </MainLayout>
    )
}

export default Profile
