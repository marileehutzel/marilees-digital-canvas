import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-6 pt-32 pb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div className="flex justify-center md:justify-end">
            <img
              src={profilePhoto}
              alt="Marilee Hutzel"
              className="w-48 h-48 rounded-full object-cover border-2 border-border shadow-lg grayscale"
            />
          </div>
          <div className="text-center md:text-left space-y-6">
            <h1
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
              style={{ fontFamily: '"liebelotte-swell", serif', fontWeight: 400 }}
            >
              Creating <span className="bg-gradient-primary bg-clip-text text-transparent">intuitive</span> experiences
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Senior Product Designer specializing in data visualization, machine learning, AI, mobile, and enterprise
              design systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
