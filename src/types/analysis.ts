export type Analysis = {
    id: string
    name: string
    userId: string
    classifierId: string
    visibility: 'public' | 'private'
    startAt: Date
    endAt: Date
    messagesQuantity: number
    averageAccuracy: number
}