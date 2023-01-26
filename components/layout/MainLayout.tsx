import React from "react"

import { motion } from "framer-motion"

import NextSeo from "./NextSeo"
import Head from "../header/Header"

interface IMainLayoutProps {
    children: React.ReactElement,
    pageDescription?: string,
    pageTitle?: string,
    withHeader?: boolean,
    animateDuration?: number
    animateExitDuration?: number
}

const MainLayout = (props: IMainLayoutProps) => {
    const {
        children,
        pageDescription,
        pageTitle,
        withHeader = true,
        animateDuration = 0.4,
        animateExitDuration = 0.4,
    } = props

    return (
        <>
            <NextSeo
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            />

            <div className="main-container">
                {
                    withHeader ?
                        <Head />
                        : null
                }

                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: animateExitDuration } }}
                    transition={{
                        type: "tween",
                        duration: animateDuration
                    }}
                >
                    {children}
                </motion.div>

            </div>
        </>
    )
}

export default MainLayout
