import React from "react"

import { LoginOutlined, LogoutOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import { Button } from "antd"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

import Logo from "@/components/logo/Logo"

const Head = () => {
    const { data: session } = useSession()

    return (
        <div className="header" role="heading" aria-level={1}>
            <Link
                href="/"
            >
                <Logo />
            </Link>

            <div>
                <Link
                    className="header__button"
                    href="/search"
                >
                    <Button
                        className="header__button"
                        icon={<SearchOutlined />}
                    />
                </Link>

                {
                    session ?
                        <>
                            <Link
                                className="header__button"
                                href="/profile"
                            >
                                <Button
                                    icon={<UserOutlined />}
                                />
                            </Link>
                            <Button
                                className="header__button"
                                icon={<LogoutOutlined />}
                                onClick={() => signOut()}
                            />
                        </>
                        :
                        <Button
                            className="header__button"
                            icon={<LoginOutlined />}
                            onClick={() => signIn()}
                        >
                            Войти
                        </Button>
                }
            </div>
        </div>
    )
}

export default Head
