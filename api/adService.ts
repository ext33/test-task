import axios, { AxiosResponse } from "axios"

import { baseUrl } from "@/api/config"

const adService = {
    fetchAllAds: async (): Promise<AxiosResponse> => {
        return axios.get(`${baseUrl}/ad`)
    },

    fetchCurrentAd: async (id: string): Promise<AxiosResponse> => {
        return axios.get(`${baseUrl}/ad/${id}`)
    },

    searchAd: async (search: string): Promise<AxiosResponse> => {
        const data = {
            search: search
        }

        return axios.post(`${baseUrl}/search`, data)
    }
}

export default adService
