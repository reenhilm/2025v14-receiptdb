"use server";
import { fetchFailedMessage, nextworkMessage } from "./constants";
import ApiError from "./classes/api-error";
import { Receipt } from "./interfaces/receipt";

export const fetchReceiptById = async (receiptId: string, groupId:number): Promise<Receipt | ApiError> => {
    try {
        const res = await fetch(`https://reenhilm.github.io/Data/receiptdb_group${groupId}.json`);

        if (res.status == 404)
            return ApiError.fromError(404);

        if (!res.ok) {
            //logging could be done here
            throw ApiError.fromError(res.status, fetchFailedMessage);
        }

        const data: Receipt[] = await res.json();
        const foundReceipt: Receipt | undefined = data.find(r => r.id === receiptId);
        if(foundReceipt === undefined)
            return ApiError.fromError(404);
        
        return foundReceipt;

    } catch {
        //catching all errors, we don't want to show all internal error-messages to client so providing general error to client
        return ApiError.fromError(500, nextworkMessage);
    }
};