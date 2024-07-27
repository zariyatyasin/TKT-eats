import Link from "next/link";
import React from "react";
import { ChefHatIcon, Facebook, Instagram, Linkedin } from "lucide-react";
export default function Header() {
  return (
    // <header className="bg-white border-b">
    //   <div className="container mx-auto flex items-center justify-between py-4 px-6">
    //     <h1 className="text-2xl font-bold">TheKitchenTable</h1>
    //     <nav className="space-x-5">
    //       <a href="#" className="text-gray-900">
    //         Home
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         About
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         Services
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         Careers
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         Blog
    //       </a>
    //     </nav>
    //   </div>
    // </header>
    <header className="  top-0 z-40 w-full  text-gray-900 ">
      <div className=" max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          {/* <ChefHatIcon className="h-6 w-6" /> */}
          <img src="/logo.webp" className="h-16 w-16" />
          {/* <span className="font-bold text-white text-xl">
            {" "}
            The Kitchen Table
          </span> */}
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            our partners
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className=" flex items-center gap-6">
          <Link
            href={"https://www.instagram.com/thekitchentable_official/?hl=en"}
          >
            <Facebook className=" w-6 h-6" />
          </Link>
          <Instagram className=" w-6 h-6" />
          <Linkedin className=" w-6 h-6" />
        </div>
      </div>
    </header>
  );
}

// import { ChefHatIcon, Facebook, Instagram, Linkedin } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// export default function Header() {
//   return (
//     // <header className="bg-white border-b">
//     //   <div className="container mx-auto flex items-center justify-between py-4 px-6">
//     //     <h1 className="text-2xl font-bold">TheKitchenTable</h1>
//     //     <nav className="space-x-5">
//     //       <a href="#" className="text-gray-900">
//     //         Home
//     //       </a>
//     //       <a href="#" className="text-gray-900">
//     //         About
//     //       </a>
//     //       <a href="#" className="text-gray-900">
//     //         Services
//     //       </a>
//     //       <a href="#" className="text-gray-900">
//     //         Careers
//     //       </a>
//     //       <a href="#" className="text-gray-900">
//     //         Blog
//     //       </a>
//     //     </nav>
//     //   </div>
//     // </header>
//     <header className="  top-0 z-40 w-full   ">
//       <div className=" max-w-7xl mx-auto flex py-2  border-b-2 border-gray-950  items-center justify-between px-4 md:px-6">
//         <nav className="hidden items-center gap-4  md:flex">
//           <Link
//             href="#"
//             className="text-base font-medium hover:underline"
//             prefetch={false}
//           >
//             Home
//           </Link>

//           <Link
//             href="#"
//             className="text-base font-medium hover:underline"
//             prefetch={false}
//           >
//             Contact
//           </Link>
//         </nav>
//         <Link href="#" className="flex items-center gap-1" prefetch={false}>
//           {/* <ChefHatIcon className="h-6 w-6" /> */}
//           <img src="/logo.webp" className="h-24 w-24" />
//           {/* <span className="font-bold text-white text-2xl">
//             {" "}
//             TheKitchenTable
//           </span> */}
//         </Link>

//         <div className=" flex items-center gap-6">
//           <Facebook className=" w-6 h-6" />
//           <Instagram className=" w-6 h-6" />
//           <Linkedin className=" w-6 h-6" />
//         </div>
//       </div>
//     </header>
//   );
// }
