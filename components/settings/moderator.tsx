"use client"
import { useState } from "react";
import Moderator from "./view"
import { Button } from "../ui/button";
import AddModerator from "./add";


function ModeratorPage() {
  const [show,setShow]= useState("view")
  return (
    <>
    {
      show ==="view" && (<Moderator/>)
    } 
    {
      show==="add" && (<AddModerator/>)
    }

<div className="flex justify-end">
<Button 
 onClick={()=>setShow("add")}
className="bg-primarycolor text-white rounded-xl border border-primarycolor hover:text-primarycolor" size={"lg"}>
                 {
                  show === "view" ? "Add" :"Create"
                 }
            </Button>
   </div>
    </>
  )
}
export default ModeratorPage