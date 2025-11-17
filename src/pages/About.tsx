import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">About Me</h1>

          <div className="space-y-6 text-lg text-foreground/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p>
              I'm a Senior Product Designer passionate about creating intuitive, data-driven experiences that solve
              complex business challenges. With expertise in enterprise software design, B2B, B2C, SaaS, and mobile I
              specialize in transforming intricate data sets and workflows into elegant, user-friendly interfaces.
            </p>

            <p>
              My work spans across various domains including financial compliance, machine learning interfaces, AI, data
              visualization, mobile, and design systems. I believe in the power of thoughtful design to bridge the gap
              between technical complexity and user understanding.
            </p>

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
