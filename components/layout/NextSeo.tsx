import React from "react"

import Head from "next/head"

interface INextSeoProps {
    pageTitle?: string
    pageDescription?: string
}

const NextSeo = ({ pageTitle, pageDescription }: INextSeoProps) => {

    return (
        <Head>
            <title>
                {pageTitle ? pageTitle : "Avito 2.0"}
            </title>

            <meta
                content="Avito 2.0"
                name="apple-mobile-web-app-title"
            />

            <meta
                content="Avito 2.0"
                name="application-name"
            />

            <meta
                content="Avito 2.0"
                lang="en"
                name="application-name"
            />

            <meta
                content={pageDescription ? pageDescription : "Avito 2.0. Объявления для вашего бизнеса."}
                name="description"
            />
        </Head>
    )
}

export default NextSeo
