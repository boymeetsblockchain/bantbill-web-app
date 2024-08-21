import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, CircleArrowDown, CircleArrowUp } from "lucide-react"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


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

function ProfilePage() {
  return (
    <div className="px-5  flex flex-col gap-y-4">
     <div className="bg-white w-full  p-4 h-[450px]">
     <h1
                    className={`text-primarycolor text-lg mt-3 mb-6 font-medium cursor-pointer  `}>
                    Edit Profile
                </h1>
       <div className="flex justify-between  gap-x-4 ">
        <div>
      <Image src={'/profile.png'} height={100} width={150} alt="profile"/>
        </div>
        <div className="flex flex-col mx-4 gap-y-1 flex-1">
        <div className="mb-2">
                    <Label className="text-sm mb-2 font-normal">
                        Full Name
                    </Label>
                    <Input
                        placeholder="Charlene Reed"
                        className="placeholder:text-primarycolor border border-gray-400 rounded-2xl w-full"
                    />
                </div>
                <div className="mb-2">
                    <Label className="text-sm mb-2 font-normal">
                        Email
                    </Label>
                    <Input
                        placeholder="charlenereed@gmail.com"
                        className="placeholder:text-primarycolor border border-gray-400 rounded-2xl w-full"
                    />
                </div>
                <div className="mb-2">
                    <Label className="text-sm mb-2 font-normal">
                        Phone Number
                    </Label>
                    <Input
                        placeholder="+2348141889944"
                        className="placeholder:text-primarycolor border border-gray-400 rounded-2xl w-full"
                    />
                </div>
                <div className="mb-2">
                    <Label className="text-sm mb-2 font-normal">
                        Address
                    </Label>
                    <Input
                        placeholder="Lekki Phase one"
                        className="placeholder:text-primarycolor border border-gray-400 rounded-2xl w-full"
                    />
                </div>
        </div>
         <div className="flex items-center gap-y-4  flex-1 flex-col">
         <div className="mb-4 relative">
                    <Label className="text-sm mb-2 font-normal">
                        Kyc
                    </Label>
                    <Input
                        placeholder="699708762074"
                           className="placeholder:text-primarycolor border border-gray-400 rounded-2xl w-full"
                    />
<CheckCircle2 className="bg-green-400 absolute top-8  right-4" color="white" size={24} />
          </div>
          <h1>NiN Slip</h1>
          <div>
            <Image src={'/nin.png'} width={200} height={100} alt="nin"/>
          </div>
         </div>
        </div>   
        <div className="flex justify-end">
<Button
className="bg-primarycolor text-white rounded-xl border  border-primarycolor hover:text-primarycolor" size={"lg"}>Save</Button>
   </div>      
     </div>
     <div className="my-10 flex flex-col space-y-3">
                <h1 className='text-2xl font-semibold text-[#343C6A] mb-4'>Recent Transactions</h1>
                <div className="flex space-x-6 mx-4">
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">All Transactions</h1>
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">Income</h1>
                    <h1 className="text-primarycolor text-lg font-medium hover:border-b-2 hover:border-primarycolor">Expenses</h1>
                </div>
                <Table className='bg-white px-4'>
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
export default ProfilePage