import HomePage from  '@/app/(navroutes)/HomeCard/page';




// Define the item type for better TypeScript safety
interface ItemData {
  img: string;
  title: string;
}

export default function Home() {
  // Your component returning JSX
  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* <div className="text-center mb-8" >
          <h1 className=" text-3xl sm:text-4xl font-extrabold text-gray-900" >welcome to our store</h1>
        </div> */}
        <HomePage/>
      </div>
    </>
    
  )
}



