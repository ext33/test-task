
export const setSearchParamToUrl = (value: string): void => {
    if (window) {
        let searchParams = new URLSearchParams(window.location.search)
        searchParams.set("search", value)

        let mainUrlPart = `${window.location.protocol}//${window.location.host}${window.location.pathname}`
        let newUrl = value === "" ? mainUrlPart : `${mainUrlPart}?${searchParams.toString()}`

        if (value === "") {
            newUrl = mainUrlPart
        }

        window.history.pushState({ path: newUrl }, "", newUrl)
    }
}
