"use client"

import { Input } from "../ui/input"
import { Label } from "../ui/label"

function AddModerator() {
  return (
    <div>
        <h1 className="text-[#333B69] text-lg font-bold">Add Moderators</h1>
        <div className="flex justify-start flex-col gap-y-3">
        <div className="flex flex-col">
                <Label className="font-medium text-sm ">
                 Name
                </Label>
                <Input placeholder="John Doe" className=" w-[300px] py-3 px-2 text-primarycolor border border-gray-300 rounded-2xl"/>
             </div>
        <div className="flex flex-col">
                <Label className="font-medium text-sm ">
                 Phone Number
                </Label>
                <Input placeholder="***********" className=" w-[300px] py-3 px-2 text-primarycolor border border-gray-300 rounded-2xl"/>
             </div>
        <div className="flex flex-col">
                <Label className="font-medium text-sm ">
                 Login
                </Label>
                <Input placeholder="**********" className=" w-[300px] py-3 px-2 text-primarycolor border border-gray-300 rounded-2xl"/>
             </div>
        </div>
    </div>
  )
}
export default AddModerator