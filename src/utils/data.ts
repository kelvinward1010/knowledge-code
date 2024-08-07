import { IDataStatic } from "@/types/data";

export const takeData = (
    input: string,
    dataInput: IDataStatic[],
): IDataStatic => {
    const data: any = dataInput.find((i: IDataStatic) => i.key === input);
    return data;
};
