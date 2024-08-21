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


const users =[
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"Block"
    },
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"not done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"UnBlock"
    },
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"Block"
    },
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"not done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"UnBlock"
    },
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"Block"
    },
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"not done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"UnBlock"
    },
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"Block"
    },
    {
        date:"23 Aug.2023",
        src:'/admin.png',
        name:"frank",
        kyc:"not done",
        phone:"07042283902",
        email:"f_peters@gmail.com",
        status:"Approval",
        action:"UnBlock"
    },
]



function TransactionPage() {
  return (
    <div className="min-h-screen ">
          <div className="">
                <Cards/>
            </div>
            <div className="my-10 flex flex-col space-y-3">
                <h1 className='text-2xl font-semibold text-[#343C6A] mb-4'>Recent Transactions</h1>
                <div className="flex space-x-6 mx-4">
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">All Users</h1>
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">Not Active</h1>
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">Active</h1>
                </div>
                <Table className='bg-white'>
                    <TableHeader className="bg-[#F0F3F9]">
                        <TableRow>
                            <TableHead className="text-primarycolor font-bold">Date/Time</TableHead>
                            <TableHead className="text-primarycolor font-bold">First Name</TableHead>
                            <TableHead className="text-primarycolor font-bold">Kyc</TableHead>
                            <TableHead className="text-primarycolor font-bold">Phone</TableHead>
                            <TableHead className="text-primarycolor font-bold">Email</TableHead>
                            <TableHead className="text-primarycolor font-bold text-center">Status</TableHead>
                            <TableHead className="text-center text-primarycolor font-bold">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell className="flex gap-x-3 items-center">{
                                    user.date
                                    }
                                   <Image src={user.src} width={30} height={30} alt={user.name} className="rounded-full"/> 
                                    </TableCell>
                                <TableCell className="capitalize">{user.name}</TableCell>
                                <TableCell
                                 className={`${user.kyc =="done" ? "text-green-500" :"text-red-500"} capitalize`}
                                >{user.kyc}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell
                                    className={`${user.status=="Approval"?"text-green-500" :"text-orange-400"} bg-[#FEFFE5] px-1 py-1 font-bold rounded-md text-center`}
                                >
                                    
                                    {user.status}
                                </TableCell>
                                <TableCell className={`text-orange-400 font-bold text-center`}>
                                    {user.action}
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