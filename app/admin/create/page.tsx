'use client'
import Email from "@/components/create/email"
import Advert from "@/components/create/advert"
import { useState } from "react";
function CreateContent() {
  const [show, setShow] = useState("advert");

  return (
    <div className="bg-white h-full w-full mx-auto">
    <div className="flex gap-x-20 mx-4 py-4 border-b border-gray-200">
        <h1
            className={`text-primarycolor text-lg font-medium cursor-pointer 
            ${show === "advert" ? "border-b-2 border-primarycolor" : ""}`}
            onClick={() => setShow("advert")}
        >
            Create Advert
        </h1>
        <h1
            className={`text-primarycolor text-lg font-medium cursor-pointer 
            ${show === "edit" ? "border-b-2 border-primarycolor" : ""}`}
            onClick={() => setShow("edit")}
        >
            Email Update
        </h1>
    </div>
    <div className="px-4 py-6">
        {show === "advert" ? <Advert /> : <Email />}
    </div>
</div>
  )
}
export default CreateContent