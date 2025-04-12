
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdGenerator from "@/components/AdGenerator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentTemplate, setCurrentTemplate] = useState("template1");

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Créateur d'Images Publicitaires <span className="text-[#5f9086]">Jaayma Ticket</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Créez des images percutantes pour promouvoir vos événements sur les réseaux sociaux
          </p>
        </section>

        <Tabs defaultValue="template1" className="w-full max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Choisissez un modèle</h2>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TabsTrigger 
                value="template1" 
                onClick={() => setCurrentTemplate("template1")}
                className="data-[state=active]:bg-[#5f9086] data-[state=active]:text-white"
              >
                Minimaliste
              </TabsTrigger>
              <TabsTrigger 
                value="template2" 
                onClick={() => setCurrentTemplate("template2")}
                className="data-[state=active]:bg-[#5f9086] data-[state=active]:text-white"
              >
                Événement
              </TabsTrigger>
              <TabsTrigger 
                value="template3" 
                onClick={() => setCurrentTemplate("template3")}
                className="data-[state=active]:bg-[#5f9086] data-[state=active]:text-white"
              >
                Promotion
              </TabsTrigger>
              <TabsTrigger 
                value="template4" 
                onClick={() => setCurrentTemplate("template4")}
                className="data-[state=active]:bg-[#5f9086] data-[state=active]:text-white"
              >
                Festif
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="template1" className="mt-0">
            <AdGenerator template="template1" />
          </TabsContent>

          <TabsContent value="template2" className="mt-0">
            <AdGenerator template="template2" />
          </TabsContent>
          
          <TabsContent value="template3" className="mt-0">
            <AdGenerator template="template3" />
          </TabsContent>
          
          <TabsContent value="template4" className="mt-0">
            <AdGenerator template="template4" />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
