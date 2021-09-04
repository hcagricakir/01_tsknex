export interface User {
    id: number,
    isim: string,
    lokasyon: string
}

export interface TotalCount {
    count: number,
}

export interface List {
    totalCount: number
    data: User[]

}