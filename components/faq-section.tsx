/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/origin-ui/accordion";
import { Button } from "@/components/origin-ui/button";
import { ChevronDown } from "lucide-react";

const items = [
  {
    id: "01",
    title: "Who am I?",
    img: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-www.jpg",
    content:
      "I'm Ali Imam — a multidisciplinary designer and creative developer crafting thoughtful digital experiences with purpose and precision.",
  },
  {
    id: "02",
    title: "What do I design?",
    img: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-ui.jpg",
    content:
      "I design intuitive interfaces, visual identities, and digital products that connect clarity with emotion — always guided by simplicity and usability.",
  },
  {
    id: "03",
    title: "My design approach",
    img: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-icons.jpg",
    content:
      "Every project begins with understanding. I combine logic, emotion, and craft to create experiences that feel effortless and meaningful.",
  },
  {
    id: "04",
    title: "Philosophy & values",
    img: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-fonts.jpg",
    content:
      "Design should be timeless — not trendy. I value honesty in visuals, restraint in detail, and intention in every decision I make.",
  },
  {
    id: "05",
    title: "Beyond design",
    img: "https://raw.githubusercontent.com/aliimam-in/aliimam/refs/heads/main/apps/www/public/templates/dalim-agency.jpg",
    content:
      "Outside of work, I explore photography, motion, and creative coding — all ways to see and shape the world differently.",
  },
];

export default function Accordion03() {
  const [openItem, setOpenItem] = useState("02");

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Accordion 
        type="single" 
        value={openItem} 
        onValueChange={setOpenItem}
        collapsible 
        className="w-full space-y-2"
      >
        {items.map((item) => (
          <AccordionItem 
            value={item.id} 
            key={item.id}
            className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline group [&[data-state=open]>div>svg]:rotate-180">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-400">{item.id}</span>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h2>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 shrink-0" />
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="px-6 py-6 space-y-4 flex flex-col justify-between">
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  <div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      View More
                    </Button>
                  </div>
                </div>
                
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}