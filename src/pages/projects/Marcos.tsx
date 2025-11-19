import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/marcos-hero.png";
import image1 from "@/assets/marcos/image-1.png";
import image2 from "@/assets/marcos/image-2.png";
import image3 from "@/assets/marcos/image-3.png";
import image4 from "@/assets/marcos/image-4.png";
import image5 from "@/assets/marcos/image-5.png";
import image6 from "@/assets/marcos/image-6.png";
import image7 from "@/assets/marcos/image-7.png";

const Marcos = () => {
  return (
    <CaseStudyLayout
      title="Marco's Pizza"
      subtitle="Pizza Builder & Mobile Ordering"
      context="Restaurant Ordering Experience"
      description="Custom pizza builder with intuitive topping customization and seamless mobile ordering flow"
      disclaimer="Work completed as part of agency engagement with Marco's Pizza."
    >
      <div className="space-y-32 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <img src={heroImage} alt="Marco's Pizza builder interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pizza Builder 1.0</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Brainstorming sketches and wireframes for pizza builder. I needed a way to allow the users to add specific items to half of a pizza or whole, select the amount, and have the design be flexible enough to work for other Marco's menu offerings.
          </p>
          <img src={image1} alt="Pizza builder initial wireframes" className="w-full rounded-lg shadow-elegant" />
          <div className="p-6 bg-card rounded-lg shadow-card">
            <h3 className="text-xl font-semibold mb-3">1st Prototype</h3>
            <p className="text-muted-foreground">
              The pizza builder was introducing new functionality and needed to be tested on device to get hands-on user feedback. I created a prototype in Adobe Experience Design to help visualize the concept and test the interaction patterns with real users.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pizza Builder 2.0</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Feedback from users was mixed. They felt the pizza diagram was confusing and it was difficult to find the amount selection. They liked the simple layout and clean design. Taking the feedback I went to my sketchbook and came up with new solutions.
          </p>
          <img src={image2} alt="Adding extra or light topping amount sketch" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Topping Selection Flow</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Add an item to pizza and select topping quantity with improved visual clarity and interaction patterns.
          </p>
          <div className="space-y-6">
            <img src={image3} alt="Topping selection interface" className="w-full rounded-lg shadow-elegant" />
            <img src={image4} alt="Topping customization options" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Adding to Cart</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Streamlined process for adding customized pizzas to cart with clear visual feedback.
          </p>
          <img src={image5} alt="Place order screen" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Final Art: Pizza Builder</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Ordering a half and half pizza with refined visual design and intuitive controls.
          </p>
          <img src={image6} alt="Final pizza builder design - half and half pizza" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Final Art: Rewards Program</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Integrated rewards program to enhance customer loyalty and engagement.
          </p>
          <img src={image7} alt="Rewards program interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Custom Pizza Builder</h3>
              <p className="text-muted-foreground">
                Flexible builder supporting full customization: whole pizza or half-and-half, with precise topping amount control.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Menu Item Detail</h3>
              <p className="text-muted-foreground">
                Rich product pages with appetizing photography, detailed descriptions, and nutritional information.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Mobile-First Design</h3>
              <p className="text-muted-foreground">
                Optimized for mobile ordering with thumb-friendly controls and quick add-to-cart functionality.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Order Summary</h3>
              <p className="text-muted-foreground">
                Clear, scannable order review showing all customizations before checkout.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Design Process</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The iterative design process involved multiple rounds of sketching, prototyping, user testing, and refinement. By closely listening to user feedback and rapidly iterating on the design, we created an intuitive pizza customization experience that balanced flexibility with simplicity—making it easy for customers to build their perfect pizza while accommodating Marco's diverse menu offerings.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default Marcos;
