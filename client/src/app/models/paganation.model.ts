import { IProduct } from "./product.model";

export interface IPaganation {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProduct[];
}