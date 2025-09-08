import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "5551985371902";
  const message = "Olá! Gostaria de saber mais sobre os serviços da MaxxFixação";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-success hover:bg-success/90 text-success-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppFloat;