import { ImageIcon, Search,Square } from "lucide-react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

function Email() {
  return (
    <div className="py-5 px-3 space-y-2">
        <h1 className="font-bold text-xl text-center">Create Update</h1>
        <p className="text-sm text-[#6f727a]">Input relevant data and click on submit to publish the content.</p>
        <div className="flex flex-col gap-y-1">
              <Label htmlFor="phone" className="text-[#343C44]">Type</Label>
              <Input
                id="phone" 
                placeholder="App Update" 
                className="p-3 border border-[#D6E4EC] text-[#343c44] placeholder:text-[#D6E4EC] rounded-md w-full"
              />
            </div>
            <div className="flex flex-col gap-y-2">
             <div className="header flex flex-row items-center justify-between">
             <Label htmlFor="phone" className="text-[#343C44]">Select</Label>
             <div className="relative flex items-center rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search for something"
            className="bg-[#F5F7FA] text-[#8BA3CB] border-none outline-none px-2 py-1 rounded-full placeholder:px-5 placeholder:text-sm"
          />  
          <Square color="#6f727a" size={24}/>
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primarycolor" />

        </div>
             </div>
             <div className="w-full h-[150px] flex  flex-col gap-y-3 px-3 border">
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-sm text-[#6f727a]">alexandermathew@gmail.com</h2>
                  <Square color="#6f727a"/>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-sm text-[#6f727a]">chuyachisom@gmail.com</h2>
                  <Square color="#6f727a"/>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-sm text-[#6f727a]">Chiagoziechisom@gmail.com</h2>
                  <Square color="#6f727a"/>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-sm text-[#6f727a]">Chiagoziechisom@gmail.com</h2>
                  <Square color="#6f727a"/>
                </div>
             </div>
            </div>
            <p className="text-sm text-[#6f727a] font-bold">Body of the  Content</p>   
            <textarea placeholder="Enter Text Here" className="w-full border px-2 h-[150px]">

            </textarea>
            <div className="w-full h-[150px] flex items-center flex-col gap-y-3 justify-center border border-separate">
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
export default Email