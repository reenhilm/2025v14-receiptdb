import { Receipt } from "@/interfaces/receipt";

export default function ReceiptMain({ receipt }: { receipt: Receipt }) {
    return (
        <main className="m-auto max-w-120 my-13">
            {receipt.id}
        </main>
    )
}