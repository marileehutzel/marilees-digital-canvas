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

          {/* Skills Section */}
          <div className="max-w-4xl mx-auto">
            <div className="pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Product Desgin</h6>
                  <p>User research, wireframing, prototyping, and visual design from 0 to 1</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Data Visualization</h6>
                  <p>Complex data storytelling and dashboard design</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Design Systems</h6>
                  <p>Component libraries and design token management</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Enterprise Software</h6>
                  <p>B2B, SaaS, complex workflow optimization, and intergration of AI</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Accessiblity Standards</h6>
                  <p>Focused on WCAG accessiblity standards</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Human Centered Design</h6>
                  <p>Focus on the human in human centered design</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Benchmarking</h6>
                  <p>Competitor analysis of market trends</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Technical Software</h6>
                  <p>Figma, FigJam, Sketch, Adobe Creative Suite (Illustrator & Photoshop), and Miro</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">AI Tools</h6>
                  <p>Figma Make, Lovable, Chat GPT, and Claude</p>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-card">
                  <h6 className="mb-2">Productivity and Business</h6>
                  <p>Azure, Jira, Trello, and Confluence</p>
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
