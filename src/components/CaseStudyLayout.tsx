import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  context?: string;
  disclaimer?: string;
  children?: ReactNode;
}

const CaseStudyLayout = ({
  title,
  subtitle,
  description,
  context,
  disclaimer,
  children,
}: CaseStudyLayoutProps) => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary transition-colors mb-12 animate-fade-in"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground uppercase tracking-tight">
              {title}
            </h1>

            {subtitle && (
              <h2 className="text-2xl md:text-3xl text-secondary-foreground/80 font-serif">
                {subtitle}
              </h2>
            )}

            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-secondary-foreground/90 font-serif leading-relaxed">
              {context && <p>{context}</p>}
              <p>{description}</p>
            </div>

            {disclaimer && (
              <p className="text-sm text-secondary-foreground/50 italic max-w-2xl mx-auto pt-8 font-serif">
                {disclaimer}
              </p>
            )}
          </div>
        </div>
      </section>

      {children && (
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">{children}</div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
