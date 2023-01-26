
export const parseDateToString = (date?: Date): string => {
    if (!date) return "-"

    return new Date(`${date}`).toDateString() || "-"
}

export const sliceLongString = (str: string, sliceLength: number): string => {
    return str.length <= sliceLength ? str : `${str.slice(0, sliceLength)}...`
}
