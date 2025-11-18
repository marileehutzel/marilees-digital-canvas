import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import butterflyLogo from "@/assets/butterfly-logo.png";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message sent successfully!",
      description: (
        <div className="flex items-center gap-2">
          <img src={butterflyLogo} alt="" className="w-5 h-5" />
          <span>Thank you for reaching out. I'll get back to you soon.</span>
        </div>
      ),
    });

    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 animate-fade-in">Let's Connect</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-foreground/80">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>

             
                </a>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-background" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
