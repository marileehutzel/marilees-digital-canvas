import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-6 pt-32 pb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={profilePhoto} 
              alt="Marilee Hutzel" 
              className="w-24 h-24 rounded-full object-cover border-2 border-border shadow-lg grayscale"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Creating <span className="bg-gradient-primary bg-clip-text text-transparent">intuitive</span> experiences
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Senior Prodcut Designer specializing in data visualization, machine learning, AI, mobile, and enterprise
            design systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
