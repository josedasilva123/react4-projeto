export interface IAdvert{
    id: number;
    title: string;
    price: number;
    image?: string;
    excerpt: string;
    content: string;
    userId: number;
    createdAt: Date;
    updatedAt?: Date;
}