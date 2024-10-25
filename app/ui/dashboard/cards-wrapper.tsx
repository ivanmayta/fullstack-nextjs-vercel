import { Card } from "./cards"
import { Suspense } from "react"
import { fetchCardData } from "@/app/lib/data"
async function CardsWrapper() {
    //await new Promise((resolve) => setTimeout(resolve, 2000))
    const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData()
    return (
        <>
            <Card
                title="collected"
                type="collected"
                value={totalPaidInvoices}
            />
            <Card title="pending" type="pending" value={totalPendingInvoices} />
            <Card
                title="total invoices"
                type="invoices"
                value={numberOfInvoices}
            />
            <Card
                title="total customers"
                type="customers"
                value={numberOfCustomers}
            />
        </>
    )
}

export default CardsWrapper
