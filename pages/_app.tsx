import "@/styles/root.scss"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter()

    return (
        <SessionProvider session={session}>
            <AnimatePresence
                exitBeforeEnter={true}
                initial={true}
                mode="wait"
                onExitComplete={() => typeof window !== "undefined" ? window.scrollTo(0, 0) : null}
            >
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </SessionProvider>
    )
}
