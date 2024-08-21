"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useRouter } from "next/navigation";
const moderatorData = [
  {
    name: "Nweke Chisom",
    id: "#12548796",
    role: "Moderator",
    phone: "+23470635456",
    date: "25 Jan, 10.40 PM",
  },
  {
    name: "Nweke Chisom",
    id: "#12548796",
    role: "Moderator",
    phone: "0475385974833",
    date: "20 Jan, 10.40 PM",
  },
  {
    name: "Nweke Chisom",
    id: "#12548796",
    role: "Moderator",
    phone: "+23470635456",
    date: "15 Jan, 03.29 PM",
  },
  {
    name: "Nweke Chisom",
    id: "#12548796",
    role: "Moderator",
    phone: "+23470635456",
    date: "14 Jan, 10.40 PM",
  },
];

function Moderator() {
  const router = useRouter()
  return (
    <div>
      <Table>
        <TableCaption>Moderator Activity Log</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-primarycolor font-bold ">Name</TableHead>
            <TableHead className="text-primarycolor font-bold ">ID</TableHead>
            <TableHead className="text-primarycolor font-bold ">Role</TableHead>
            <TableHead className="text-primarycolor font-bold ">Phone</TableHead>
            <TableHead className="text-primarycolor font-bold ">Date</TableHead>
            <TableHead className="text-primarycolor font-bold ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {moderatorData.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.id}</TableCell>
              <TableCell>{entry.role}</TableCell>
              <TableCell>{entry.phone}</TableCell>
              <TableCell>{entry.date}</TableCell>
              <TableCell>
                <button className="text-[#123288] border border-[#123288] py-1 px-2 rounded-full hover:underline">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
    </div>
  );
}

export default Moderator;
