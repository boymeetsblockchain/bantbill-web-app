"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useRouter } from "next/navigation"

function HomePage() {
  const router = useRouter()

  return (
    <div className="flex items-center bg-neutral-200 justify-center h-screen w-full">
      <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col md:flex-row max-w-screen-xl rounded-lg shadow-lg">
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 md:flex items-center hidden justify-center">
          <Image src={'/onboarding.png'} height={200} width={200} alt="onboarding"/>
        </div>
        <div className="flex-grow md:border-l px-6 md:px-10 lg:px-16">
          <form className="flex flex-col gap-y-4">
            <div className="flex justify-center mb-8">
              <Image src={'/logo.png'} height={100} width={100} alt="logo"/>
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="phone" className="text-[#343C44]">Phone</Label>
              <Input 
                id="phone" 
                placeholder="08141889944" 
                className="p-3 border border-[#D6E4EC] text-[#343c44] placeholder:text-[#D6E4EC] rounded-md w-full"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="password" className="text-[#343C44]">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter Your Password" 
                className="p-3 border border-[#D6E4EC] text-[#343c44] placeholder:text-[#D6E4EC] rounded-md w-full"
              />
            </div>
            <div className="mt-8">
              <Button
                type="button" 
                onClick={() => router.push('/admin')}
                className="bg-primarycolor text-white w-full py-3 border border-primarycolor hover:text-primarycolor hover:bg-white rounded-md"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomePage
