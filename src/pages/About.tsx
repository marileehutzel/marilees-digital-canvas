import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hikingImg from "@/assets/about-hiking.jpg";
import kayakingImg from "@/assets/about-kayaking.jpg";
import adventureImg from "@/assets/about-adventure.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Collage */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="col-span-1 row-span-2">
                <img
                  src={hikingImg}
                  alt="Hiking on a snowy mountain summit"
                  className="w-full h-full object-cover rounded-2xl shadow-card"
                />
              </div>
              <div className="col-span-1">
                <img
                  src={kayakingImg}
                  alt="Kayaking adventure"
                  className="w-full h-full object-cover rounded-2xl shadow-card"
                />
              </div>
              <div className="col-span-1">
                <img
                  src={adventureImg}
                  alt="Adventure moments"
                  className="w-full h-full object-cover rounded-2xl shadow-card"
                />
              </div>
            </div>

            {/* About Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">About Me</h1>

              <div className="space-y-6 text-lg text-foreground/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p>
                  I'm a Senior Product Designer passionate about creating intuitive, data-driven experiences that solve
                  complex business challenges. With expertise in enterprise software design, B2B, B2C, SaaS, and mobile
                  I specialize in transforming intricate data sets and workflows into elegant, user-friendly interfaces.
                </p>

                <p>
                  My work spans across various domains including financial compliance, machine learning interfaces, AI,
                  data visualization, mobile, and design systems. I believe in the power of thoughtful design to bridge
                  the gap between technical complexity and user understanding.
                </p>

                <p>
                  When I'm not designing, you could find me hiking, skiing, making wine, learning aerial silks, hanging
                  out with my son, or advernturing with my partner.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="max-w-4xl mx-auto">
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">UX/UI Design</h3>
                  <p className="text-sm text-muted-foreground">
                    User research, wireframing, prototyping, and visual design
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Data Visualization</h3>
                  <p className="text-sm text-muted-foreground">Complex data storytelling and dashboard design</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Design Systems</h3>
                  <p className="text-sm text-muted-foreground">Component libraries and design token management</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Enterprise Software</h3>
                  <p className="text-sm text-muted-foreground">B2B SaaS and complex workflow optimization</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Figma, FigJam, Figma Make, Lovable, Sketch, Adobe Creative Suite (Illustrator & Photoshop),
                    InVision, Miro, Azure, Jira, Trello, Confluence, Chat GPT, Claude
                  </p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h3 className="font-semibold text-foreground mb-2">AI</h3>
                  <p className="text-sm text-muted-foreground">Figma Make, Lovable, Chat GPT, and Claude</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
