import './InvoiceTable.css';
import EditableDescriptionCell from './EditableDescriptionCell';
import EditableHoursCell from './EditableHoursCell';
import EditableRateCell from './EditableRateCell';
import EditableRowModeButtons from './EditableRowModeButtons';
import InvoiceTableAddButton from './InvoiceTableAddButton';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';


const InvoiceTable = ({initialInvoiceList}) => {

    const rows = initialInvoiceList.map(invoiceItem => {
        const {id, description, rate, hours } = invoiceItem

        return(
            <InvoiceTableRow 
                key={id}
                initialInvoiceData={{description, rate, hours}}
            />
        )
    })
    return (
        <table>
            <thead>
                <InvoiceTableHeader/>
            </thead>
            <tbody>
                {rows}
            </tbody>
            <tfoot>
                <InvoiceTableAddButton/>
            </tfoot>
        </table>
    )
}

export default InvoiceTable