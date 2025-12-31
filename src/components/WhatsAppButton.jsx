export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919123170683"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <i className="fa-brands fa-whatsapp text-white text-2xl" aria-hidden="true" />
    </a>
  );
}
