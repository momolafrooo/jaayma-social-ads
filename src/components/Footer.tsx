
const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/76bd07f1-ab0b-4907-a6ec-dfd3ace2a597.png" 
              alt="Jaayma Ticket Logo" 
              className="h-10" 
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jaayma Ticket. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
