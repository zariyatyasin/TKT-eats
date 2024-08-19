// import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuSeparator,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <header className=" container mx-auto flex h-20 w-full shrink-0 items-center px-4 md:px-6">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" size="icon" className="rounded-full">
//             <Avatar className="h-8 w-8">
//               <AvatarImage src="/placeholder-user.jpg" />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <span className="sr-only">Toggle user menu</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <div className="flex items-center gap-2 p-2">
//             <Avatar className="h-8 w-8">
//               <AvatarImage src="/placeholder-user.jpg" />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <div className="grid gap-0.5 leading-none">
//               <div className="font-semibold">John Doe</div>
//               <div className="text-sm text-muted-foreground">
//                 john@example.com
//               </div>
//             </div>
//           </div>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <Link href="#" className="flex items-center gap-2" prefetch={false}>
//               <div className="h-4 w-4" />
//               <span>Profile</span>
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Link href="#" className="flex items-center gap-2" prefetch={false}>
//               <div className="h-4 w-4" />
//               <span>Settings</span>
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <Link href="#" className="flex items-center gap-2" prefetch={false}>
//               <div className="h-4 w-4" />
//               <span>Sign out</span>
//             </Link>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <div className="flex-1">
//         <Link
//           href="#"
//           className="flex items-center justify-center md:justify-start"
//           prefetch={false}
//         >
//           <Image
//             alt="logo"
//             className=" h-14 w-14"
//             src={"/logo.webp"}
//             height={1000}
//             width={1000}
//           />
//         </Link>
//       </div>
//       <div className="flex items-center gap-4">
//         <Link
//           href="#"
//           className="hidden items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:flex"
//           prefetch={false}
//         >
//           Login
//         </Link>
//         <Link
//           href="#"
//           className="hidden items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:flex"
//           prefetch={false}
//         >
//           Register
//         </Link>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" size="icon" className="rounded-full">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="/placeholder-user.jpg" />
//                 <AvatarFallback>JD</AvatarFallback>
//               </Avatar>
//               <span className="sr-only">Toggle user menu</span>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <div className="flex items-center gap-2 p-2">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="/placeholder-user.jpg" />
//                 <AvatarFallback>JD</AvatarFallback>
//               </Avatar>
//               <div className="grid gap-0.5 leading-none">
//                 <div className="font-semibold">John Doe</div>
//                 <div className="text-sm text-muted-foreground">
//                   john@example.com
//                 </div>
//               </div>
//             </div>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>
//               <Link
//                 href="#"
//                 className="flex items-center gap-2"
//                 prefetch={false}
//               >
//                 <div className="h-4 w-4" />
//                 <span>Profile</span>
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Link
//                 href="#"
//                 className="flex items-center gap-2"
//                 prefetch={false}
//               >
//                 <div className="h-4 w-4" />
//                 <span>Settings</span>
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>
//               <Link
//                 href="#"
//                 className="flex items-center gap-2"
//                 prefetch={false}
//               >
//                 <div className="h-4 w-4" />
//                 <span>Sign out</span>
//               </Link>
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   );
// }
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ddpLfB2QmIw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-background shadow">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* <div className=" flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 leading-none">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">
                    john@example.com
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <div className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <div className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <div className="h-4 w-4" />
                  <span>Sign out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
        <div className="f ">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 md:justify-start"
            prefetch={false}
          >
            <Image
              alt="logo"
              className=" h-8 w-8"
              src="/logo.webp"
              height={1000}
              width={1000}
            />
            <div className=" text-xl text-primary">TheKitchenTable</div>
          </Link>
        </div>
        {/* <div className=" flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 leading-none">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">
                    john@example.com
                  </div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <div className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <div className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <div className="h-4 w-4" />
                  <span>Sign out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
        <div className="flex items-center    gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="  border-none">
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                  Enter your email and password to sign in.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Sign In</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" rounded-full">Register</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Register</DialogTitle>
                <DialogDescription>
                  Enter your information to create an account.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Register</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
