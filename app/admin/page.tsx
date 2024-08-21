import { Cards } from "@/components/dashboard/cards"
import Form from "@/components/form"
import Image from "next/image"

function AdminDashBoard() {
  return (
    <div className="min-h-screen">
     <Cards/>
     <div className="flex justify-between my-10 items-start">
      <div>
        <Image src={'/balance.png'} alt="bar chart" width={730} height={360} className=""/>
      </div>
        <div>
          <Form/>
        </div>
     </div>
     </div>
  )
}
export default AdminDashBoard