import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface MetadataItem {
  label: string;
  value: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  context?: string;
  disclaimer?: string;
  heroImage?: string;
  heroImageAlt?: string;
  metadata?: MetadataItem[];
  children?: ReactNode;
}

const CaseStudyLayout = ({ title, subtitle, description, context, disclaimer, heroImage, heroImageAlt, metadata, children }: CaseStudyLayoutProps) => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <section className="px-6 pt-28 pb-16 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors mb-8 animate-fade-in"
          >
            <ArrowLeft size={20} />
            <span>Back to My Work</span>
          </Link>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/50 mb-3 font-sans">
              Case Study
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-primary uppercase tracking-tight mb-12">
              {title}
            </h1>
          </div>

          {heroImage && (
            <div className="w-full mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src={heroImage}
                alt={heroImageAlt || title}
                className="w-full rounded-lg shadow-elegant object-cover"
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {metadata && metadata.length > 0 && (
              <div className="space-y-6">
                {metadata.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary/40 mb-1 font-sans">
                      {item.label}
                    </p>
                    <p className="text-base text-primary/80 font-serif leading-snug">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-6">
              {subtitle && (
                <h2 className="text-2xl md:text-3xl text-primary/90 font-serif leading-snug">
                  {subtitle}
                </h2>
              )}
              {context && (
                <p className="text-lg text-primary/70 font-serif leading-relaxed">
                  {context}
                </p>
              )}
              <p className="text-lg text-primary/70 font-serif leading-relaxed">
                {description}
              </p>
              {disclaimer && (
                <p className="text-sm text-primary/50 italic font-serif pt-4">
                  {disclaimer}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {children && (
        <section id="content" className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">{children}</div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
