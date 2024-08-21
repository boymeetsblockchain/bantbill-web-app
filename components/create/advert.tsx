import Image from "next/image"
import { Button } from "../ui/button"
import { ImageIcon } from "lucide-react"

function Create() {
  return (
    <div className="flex flex-col gap-y-3">
        <div className="images grid  grid-cols-1 md:grid-cols-4 gap-3">
     <div className="flex items-center flex-col gap-y-2 ">
     <Image src={'/advert.png'} alt="advert" width={300} height={150} />
            <Button className="bg-primarycolor text-white rounded-xl w-full border border-primarycolor hover:text-primarycolor" size={"lg"}>
                 Remove
            </Button>
     </div>
     <div className="flex items-center flex-col gap-y-2 ">
     <Image src={'/advert.png'} alt="advert" width={300} height={150} />
            <Button className="bg-primarycolor text-white rounded-xl w-full border border-primarycolor hover:text-primarycolor" size={"lg"}>
                 Remove
            </Button>
     </div>
     <div className="flex items-center flex-col gap-y-2 ">
     <Image src={'/advert.png'} alt="advert" width={300} height={150} />
            <Button className="bg-primarycolor text-white rounded-xl w-full border border-primarycolor hover:text-primarycolor" size={"lg"}>
                 Remove
            </Button>
     </div>
     <div className="flex items-center flex-col gap-y-2 ">
     <Image src={'/advert.png'} alt="advert" width={300} height={150} />
            <Button className="bg-primarycolor text-white rounded-xl w-full border border-primarycolor hover:text-primarycolor" size={"lg"}>
                 Remove
            </Button>
     </div>
        </div>
        <div className="w-full h-[300px] flex items-center flex-col gap-y-3 justify-center border border-separate">
            <ImageIcon color="gray"/>
            <h2 className="text-lg font-bold text-primarycolor">Upload a file <span className="text-sm text-gray-400">or</span> Image</h2>
        </div>
        <h2>Cover Image/Video</h2>
        <div className="my-10 flex justify-end gap-x-3 items-center">
            <h2 className="text-primarycolor font-bold text-lg">Cancel</h2>
            <Button className="bg-primarycolor text-white rounded-xl border border-primarycolor hover:text-primarycolor" size={"lg"}>
                 Remove
            </Button>
        </div>
    </div>
  )
}
export default Create