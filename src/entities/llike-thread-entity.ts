export default interface LikeThreadEntity {
    id: string;
    thread: {
        like: number,
        replies: number
        User: number
    },
    threadId: string;
    userId: string
}






