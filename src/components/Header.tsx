
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/76bd07f1-ab0b-4907-a6ec-dfd3ace2a597.png" 
            alt="Jaayma Ticket Logo" 
            className="h-10" 
          />
        </div>
        <nav>
          <Button variant="ghost" className="text-[#5f9086] hover:text-[#4a7269] hover:bg-[#f0f9f7]">
            À propos
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
