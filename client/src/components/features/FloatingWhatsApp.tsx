import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "971501124683";
  const message = encodeURIComponent(
    "Hello! I'm interested in your water filtration solutions. Can you help me?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-glow"></div>

          {/* Main button */}
          <div className="relative bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
            <MessageCircle className="w-8 h-8" />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute top-full right-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        </div>
      </a>

      {/* Chat bubble (optional) */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl p-6 max-w-xs animate-scale-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Chat with Aqua Care</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Get instant answers about our water filtration solutions. We're here to help!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg hover:bg-[#20BA5A] transition-colors font-medium w-full"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chat
          </a>
        </div>
      )}
    </>
  );
}
