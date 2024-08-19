import React from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/components/hooks/use-media-query";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  menuImage: string;
  ingredients: string[];
}

interface SelectedItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface MenuProps {
  menu: MenuItem[];
  selectedItems: SelectedItem[];
  handleAddToBooking: (item: MenuItem, quantity: number) => void;
}

export function Menu({ menu, selectedItems, handleAddToBooking }: MenuProps) {
  const [open, setOpen] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="grid gap-4">
      <div className="grid gap-4">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex shadow-none border-b pb-2 items-center gap-4"
          >
            <div className="relative">
              <img
                src={item.menuImage}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
              {isDesktop ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-[-15px] right-[-15px] bg-white border rounded-full"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Ingredients</DialogTitle>
                      <DialogDescription>
                        The ingredients used in this dish.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="px-4 prose prose-sm prose-gray dark:prose-invert max-w-none">
                      <ul>
                        {item.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-[-15px] right-[-15px] bg-white border rounded-full"
                    >
                      <Info className="h-4 w-4" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Ingredients</DrawerTitle>
                      <DrawerDescription>
                        The ingredients used in this dish.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 prose prose-sm prose-gray dark:prose-invert max-w-none">
                      <ul>
                        {item.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
            <div className="flex-1 p-2">
              <h3 className="text-sm md:text-lg font-bold">{item.name}</h3>
              <p className="text-muted-foreground text-xs md:text-base">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-2">
                <div className="font-bold">${item.price.toFixed(2)}</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddToBooking(item, -1)}
                  >
                    -
                  </Button>
                  <span>
                    {selectedItems.find((i) => i.id === item.id)?.quantity ?? 0}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddToBooking(item, 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
