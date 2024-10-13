import Category from "./Category";

type Ad = {
    id: number;
    title: string;
    description: string;
    picture: string;
    owner: string;
    price: number;
    location: string;
    createdAt: string;
    category: Category;
};

export default Ad;
