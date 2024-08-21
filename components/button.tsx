import { Button } from "./ui/button"

export const ButtonComp =({text}:{text:string})=>{
    return(
        <Button  className="w-[196px] bg-primarycolor  hover:text-primarycolor text-white  hover:bg-white border" >
      {text}
</Button>
    )
}