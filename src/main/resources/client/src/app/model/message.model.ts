export interface Message {
    id: number;
    from: string;
    to: string;
    createDate: string;
    title: string;
    message: string;
    deleted: boolean;
}
