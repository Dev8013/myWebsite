import { Button } from "@/components/ui/button";
import Card from "@/components/ui/Card";
import ViewCounter from "@/components/ui/ViewCounter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-gray-900 w-full min-h-[100vh]">
      <div className="flex w-full flex-col p-4 md:px-8 lg:px-16 2xl:px-32">
        <div className="flex items-center justify-between">
          <Card />
          <ViewCounter />
        </div>
        <div className="flex flex-col items-center justify-center p-4 mt-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl">Welcome to my website</h1>
            <p className="flexflex-wrap text-center pt-4 text-white">Hello! Thank you for being here! I hope that at least one of my projects will interest you.

              I kindly ask you to report any service disruptions to me. Don't be afraid.

              For any questions or if you need assistance,

              please don't hesitate to contact me.

              Have a great day or night! ^-^

            </p>
          </div>
          <h1 className="text-red-500 text-xl mt-4">Web-dev Projects</h1>
          <div className="flex-col md:grid grid-cols-4 gap-8 items-center text-center text-white mt-8">
              <Button className="bg-gray-500 hover:bg-red-500 hover:text-white">facebook-2.0</Button>
              <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">AI-MOCKER-Interview</Button>
              <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">Front-End-Society-App</Button>
              <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">lamasocial</Button>
              <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">Halo Community</Button>
              <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">cu-front-end</Button>
              <Button className="bg-gray-500  hover:bg-red-500 hover:text-white">Music player</Button>
          </div>
          <div className="flex flex-col mt-8 gap-4 items-center">
            <h1 className="text-red-500 text-xl">App-Dev Projects</h1>
            <span className="text-green-500 text-sm">Comming Soon..</span>
          </div>
        </div>
        <div className="text-white items-center flex p-4 flex-col justify-end absolute bottom-0 right-0">
          <span className="text-sm text-gray-400">Version 0.1</span>
          <span className="text-sm text-gray-400">21/july/2024</span>
        </div>
      </div>
    </div>
  );
}
