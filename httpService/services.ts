import { IAllCoinProps } from "@/types/res";
import api from "@/api/service/coin";

export const getAllCoin = () =>
  new Promise<any>(
    (resolve: (res: IAllCoinProps) => void, reject: (err: any) => void) => {
      api
        .getCoin()
        .then((res) => {
          resolve(res.data as IAllCoinProps);
        })
        .catch((err) => reject(err));
    }
  );
