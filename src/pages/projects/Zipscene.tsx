import { Link } from "react-router-dom";
import { ChevronDown, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image1 from "@/assets/zipscene/image-1.png";
import image2 from "@/assets/zipscene/image-2.png";
import image3 from "@/assets/zipscene/image-3.png";
import image4 from "@/assets/zipscene/image-4.png";
import image5 from "@/assets/zipscene/image-5.png";
import image6 from "@/assets/zipscene/image-6.png";
import image7 from "@/assets/zipscene/image-7.png";

const Zipscene = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Zipscene Analytics Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-serif">
            Tasked with creating an internal analytics tool to help generate effective campaigns in the restaurant industry to increase sales and productivity.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to My Work
          </Link>
        </div>
        
        <a 
          href="#content" 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </section>

      {/* Main Content */}
      <main id="content" className="container mx-auto px-6 py-20 space-y-32">
        {/* Overview Section */}
        <section className="space-y-8">
          <img
            src={image1}
            alt="Zipscene Analytics overview"
            className="w-1/2 mx-auto rounded-lg shadow-lg"
          />
        </section>
  
        {/* Insights Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Insights Home Page</h2>
            <p className="text-lg text-muted-foreground font-serif max-w-3xl">
              Use our database to identify new insights for Guests, Locations and Market Conditions
            </p>
          </div>
          <div className="space-y-6">
            <img
              src={image2}
              alt="Insights home page interface"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={image3}
                alt="Insights feature detail"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src={image4}
                alt="Insights data visualization"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Advisor Section */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Advisor Home Page</h2>
          <div className="space-y-6">
            <img
              src={image5}
              alt="Advisor home page"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={image6}
                alt="Advisor feature detail"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src={image7}
                alt="Custom pixel perfect icon font"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Custom Icon Font Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Custom Iconography</h2>
            <p className="text-lg text-muted-foreground font-serif max-w-3xl">
              Designed a custom pixel-perfect icon font to create a unified visual language throughout the analytics platform.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Zipscene;
