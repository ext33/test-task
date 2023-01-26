import React, { useEffect, useState } from "react"

import { Empty, Input } from "antd"

import adService from "@/api/adService"
import AdItem from "@/components/adItem/AdItem"
import MainLayout from "@/components/layout/MainLayout"
import { IAdsItem } from "@/types/ads"
import { setSearchParamToUrl } from "@/utils/url"

const SearchPage = () => {

    const [ searchValue, setSearchValue ] = useState<string>("")
    const [ searchResults, setSearchResults ] = useState<IAdsItem[]>([])

    const fetchSearchData = (search: string): void => {
        adService.searchAd(search)
            .then((response) => {
                if (response.status === 200) {
                    setSearchResults(response.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (window) {
            let searchParams = new URLSearchParams(window.location.search)
            let search = searchParams.get("search")

            if (search) {
                setSearchValue(search)
                fetchSearchData(search)
            }
        }
    }, [])

    const onSearch = (value: string): void => {
        setSearchParamToUrl(value)
        fetchSearchData(value)
    }

    return (
        <MainLayout pageTitle="Поиск">
            <div className="page-wrapper">
                <div className="search__input">
                    <Input.Search
                        placeholder="Поиск..."
                        size="large"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onSearch={onSearch}
                        allowClear
                        enterButton
                    />
                </div>

                <div className="items__wrapper">
                    {
                        searchResults.length > 0 ?
                            searchResults.map((item, index) => {
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
            </div>
        </MainLayout>
    )
}

export default SearchPage
