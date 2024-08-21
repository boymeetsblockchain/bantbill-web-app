import { Cards } from "@/components/dashboard/cards"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import Image from 'next/image'


const transactions = [
    {
        description: "Deposit",
        type: "Fund",
        reference: "#12548796",
        card: "1234 ****",
        date: "28 Jan, 12.30 AM",
        number:"+234852525252",
        amount: -2500,
        action: "Download"
    },
    {
        description: "Airtime Service",
        type: "Data",
        reference: "#12548796",
        number:"+234852525252",
        card: "1234 ****",
        date: "25 Jan, 10.40 PM",
        amount: 750,
        action: "Download"
    },
    {
        description: "Naija Bet",
        type: "Bet Service",
        reference: "#12548796",
        number:"+234852525252",
        card: "1234 ****",
        date: "20 Jan, 10.40 PM",
        amount: -150,
        action: "Download"
    },
    {
        description: "Deposit",
        type: "Fund",
        reference: "#12548796",
        number:"+234852525252",
        card: "1234 ****",
        date: "15 Jan, 03.29 PM",
        amount: -1050,
        action: "Download"
    },
    {
        description: "Airtime",
        type: "Airtime",
        reference: "#12548796",
        number:"+234852525252",
        card: "1234 ****",
        date: "14 Jan, 10.40 PM",
        amount: 840,
        action: "Download"
    }
];



function TransactionPage() {
  return (
    <div className="min-h-screen ">
          <div className="">
                <Cards/>
            </div>
            <div className="my-10 flex flex-col space-y-3">
                <h1 className='text-2xl font-semibold text-[#343C6A] mb-4'>Recent Transactions</h1>
                <div className="flex space-x-6 mx-4">
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">All Transactions</h1>
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">Income</h1>
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">Expenses</h1>
                </div>
                <Table className='bg-white'>
                    <TableCaption>A list of your recent transactions.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-primarycolor font-bold">Description</TableHead>
                            <TableHead className="text-primarycolor font-bold">Transaction ID</TableHead>
                            <TableHead className="text-primarycolor font-bold">Type</TableHead>
                            <TableHead className="text-primarycolor font-bold">Number</TableHead>
                            <TableHead className="text-primarycolor font-bold">Date</TableHead>
                            <TableHead className="text-primarycolor font-bold">Amount</TableHead>
                            <TableHead className="text-center text-primarycolor font-bold">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                {transaction.amount > 0 ? <CircleArrowUp color="#5B00BF" className="inline mr-1" /> : <CircleArrowDown color="#5B00BF" className="inline mr-1" />}
                                    {transaction.description}</TableCell>
                                <TableCell>{transaction.reference}</TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                <TableCell>{transaction.number}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                                <TableCell
                                    className={`${
                                        transaction.amount > 0 ? 'text-blue-600' : 'text-red-600'
                                    }`}
                                >
                                    
                                    {transaction.amount > 0 ? `+N${transaction.amount}` : `-N${Math.abs(transaction.amount)}`}
                                </TableCell>
                                <TableCell className="border py-2 px-3 flex items-center border-[#123288] text-[#123288] justify-center rounded-full">
                                    {transaction.action}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-end">
                    <Image src={'/pagination.png'}  width={200} height={100} alt="pagination"/>
                </div>
            </div>
    </div>
  )
}
export default TransactionPage