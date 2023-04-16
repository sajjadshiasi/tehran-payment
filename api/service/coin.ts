/* eslint-disable import/no-anonymous-default-export */
import { IAllCoinProps } from "@/types/res";
import { instance } from "../instance";

export default {
  getCoin: (params: {
    vs_currency: string;
    order: string;
    per_page: number;
    page: number;
    sparkline: boolean;
    locale: string;
  }) => instance.get<IAllCoinProps>("/coins/markets", {params}),
};
