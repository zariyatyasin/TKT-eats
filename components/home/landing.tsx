import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

export default function Landing() {
  return (
    <div className="w-full min-h-[70vh] bg-[url('/chef.png')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center h-full">
        <div className="max-w-2xl text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary ">
            Find the Perfect Chef for Your Event
          </h1>
          <p className=" text-gray-900 md:text-xl">
            Discover talented local chefs and book them for your next gathering,
            whether it&apos;s a private dinner, corporate event, or special
            occasion.
          </p>
          <form className="flex items-center w-full max-w-xl">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Enter your location"
                className="w-full rounded-l-md pr-12 focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                className="absolute right-0 top-0 h-full rounded-l-none rounded-r-md bg-primary text-primary-foreground"
              >
                <SearchIcon className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>

    // <div className=" ">
    //   <div className=" h-screen ">
    //     <header className="flex items-center justify-between p-4 border-b">
    //       <div className="flex items-center space-x-4">
    //         <h1 className="text-xl font-bold">RUSHIT</h1>
    //         <div className="relative">
    //           <input
    //             type="search"
    //             placeholder="Search..."
    //             className="pl-8 pr-4 py-2 border rounded-full"
    //           />
    //           <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    //         </div>
    //       </div>
    //       <nav className="flex space-x-6">
    //         <a href="#" className="text-lg">
    //           Menu
    //         </a>
    //         <a href="#" className="text-lg">
    //           Stock
    //         </a>
    //         <a href="#" className="text-lg">
    //           Category
    //         </a>
    //         <a href="#" className="text-lg">
    //           About Us
    //         </a>
    //       </nav>
    //       <button className="bg-black text-white px-4 py-2 rounded-full">
    //         Login/Signup
    //       </button>
    //     </header>
    //     <main className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2">
    //       <div className="bg-[#5b3cc4] p-8 rounded-lg text-white relative">
    //         <h2 className="text-6xl font-bold mb-4">FOOD MOOD</h2>
    //         <div className="absolute top-1/2 left-4 transform -translate-y-1/2 space-y-4">
    //           <img
    //             src="/placeholder.svg"
    //             alt="Pizza"
    //             className="w-12 h-12 rounded-full"
    //             width="50"
    //             height="50"
    //             style={{ aspectRatio: "50/50", objectFit: "cover" }}
    //           />
    //           <img
    //             src="/placeholder.svg"
    //             alt="Hotdog"
    //             className="w-12 h-12 rounded-full"
    //             width="50"
    //             height="50"
    //             style={{ aspectRatio: "50/50", objectFit: "cover" }}
    //           />
    //         </div>
    //         <img
    //           src="/placeholder.svg"
    //           alt="Character holding pizza"
    //           className="absolute bottom-0 right-0 w-64 h-64"
    //           width="300"
    //           height="300"
    //           style={{ aspectRatio: "300/300", objectFit: "cover" }}
    //         />
    //         <button className="bg-green-500 text-black px-6 py-3 rounded-full mt-8">
    //           Order Now
    //         </button>
    //       </div>
    //       <div className="space-y-4">
    //         <div className="bg-[#f5f5f5] p-8 rounded-lg">
    //           <h3 className="text-3xl font-bold mb-2">
    //             <span className="text-orange-500">Download</span> Our App &
    //             Enjoy <span className="text-orange-500">Tasty</span> Food
    //           </h3>
    //           <p className="text-gray-700 mb-4">
    //             Place an order for food in our application and couriers will
    //             bring it to you in 25 minutes
    //           </p>
    //           <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
    //             Download now
    //           </button>
    //         </div>
    //         <div className="bg-[#f5f5f5] p-8 rounded-lg flex items-center">
    //           <img
    //             src="/placeholder.svg"
    //             alt="Hamburger"
    //             className="w-24 h-24 mr-4"
    //             width="100"
    //             height="100"
    //             style={{ aspectRatio: "100/100", objectFit: "cover" }}
    //           />
    //           <div>
    //             <h3 className="text-2xl font-bold mb-2">Buy 2 Get 1 free</h3>
    //             <p className="text-orange-500">Hamburger</p>
    //           </div>
    //           <div className="ml-auto text-center">
    //             <div className="bg-black text-white p-4 rounded-full">
    //               <span className="text-2xl font-bold">$28</span>
    //             </div>
    //             <ShoppingCartIcon className="mt-2 h-6 w-6 text-black" />
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  );
}
