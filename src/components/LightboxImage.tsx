import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LightboxImage = ({ src, alt, className = "" }: LightboxImageProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className={`cursor-zoom-in transition-transform hover:scale-[1.01] ${className}`}
      />
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-12 animate-fade-in"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-background/60 backdrop-blur-md border border-border/50 hover:bg-background/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-lg shadow-elegant cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
};

export default LightboxImage;
