import "./InvoiceTable.css"
import { useState } from "react"
import InvoiceTableAddButton from "./InvoiceTableAddButton"
import InvoiceTableHeader from "./InvoiceTableHeader"
import InvoiceTableRow from "./InvoiceTableRow"
import idGenerator from "../utils/idGenerator"

const getId = idGenerator(4)

const InvoiceTable = ({ initialInvoiceList }) => {
    const [invoiceList, setInvoiceList] = useState(initialInvoiceList)

    const addInvoiceRow = () => {
        const newInvoiceList = [...invoiceList]
        newInvoiceList.push({
            id: getId.next().value,
            description: "Description",
            rate: "",
            hours: "",
            isEditing: true
        })
        setInvoiceList(newInvoiceList)
    }

    const deleteInvoiceRow = id => {
        const newInvoiceList = [...invoiceList]
        const index = newInvoiceList.findIndex(invoice => invoice.id === id)
        newInvoiceList.splice(index, 1)
        setInvoiceList(newInvoiceList)
    }

    const rows = invoiceList.map(invoiceItem => {
        const { id, description, rate, hours } = invoiceItem
        return (
            <InvoiceTableRow
                key={id}
                initialInvoiceData={{ description, rate, hours }}
                onDeleteRow={() => deleteInvoiceRow(id)}
            />
        )
    })
    
    return (
        <table>
            <thead>
                <InvoiceTableHeader />
            </thead>
            <tbody>{rows}</tbody>
            <tfoot>
                <InvoiceTableAddButton onClick={addInvoiceRow} />
            </tfoot>
        </table>
    )
}

export default InvoiceTable
