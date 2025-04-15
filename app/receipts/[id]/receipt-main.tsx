import { Receipt } from "@/interfaces/receipt";

export default function ReceiptMain({ receipt }: { receipt: Receipt }) {
    return (
        <>
            <main className="m-auto max-w-120 my-13">
                {receipt.id}
                {receipt.retailer_name}
                {receipt.title}
                {receipt.description}
                {receipt.price_total}
                {receipt.image_url}
                {receipt.date.purchased}
                {receipt.date.uploaded}
                {receipt.category.id}
                {receipt.category.name}
                {receipt.uploader.id}
                {receipt.uploader.fullname}
            </main>
        </>
    )
}