import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/marcos-hero.png";

const Marcos = () => {
  return (
    <CaseStudyLayout
      title="Marco's Pizza"
      subtitle="Pizza Builder & Mobile Ordering"
      context="Restaurant Ordering Experience"
      description="Custom pizza builder with intuitive topping customization and seamless mobile ordering flow"
      disclaimer="Work completed as part of agency engagement with Marco's Pizza."
    >
      <div className="space-y-12 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <img src={heroImage} alt="Marco's Pizza builder interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Pizza Builder 1.0</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Brainstorming sketches and wireframes for pizza builder. I needed a way to allow the users to add specific items to half of a pizza or whole, select the amount, and have the design be flexible enough to work for other Marco's menu offerings.
          </p>
          <div className="p-6 bg-card rounded-lg shadow-card">
            <h3 className="text-xl font-semibold mb-3">Initial Prototype</h3>
            <p className="text-muted-foreground">
              The pizza builder was introducing new functionality and needed to be tested on device to get hands-on user feedback. I created a prototype in Adobe Experience Design to help visualize the concept and test the interaction patterns with real users.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">User Feedback & Iteration</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Feedback from users was mixed. They felt the pizza diagram was confusing and it was difficult to find the amount selection. They liked the simple layout and clean design. Taking the feedback I went to my sketchbook and came up with new solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Simplified Visual Design</h3>
              <p className="text-muted-foreground">
                Removed the confusing pizza diagram and replaced it with a clearer, list-based approach for topping selection.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Enhanced Amount Selection</h3>
              <p className="text-muted-foreground">
                Made topping quantity selection (light, regular, extra) more prominent and easier to access during the customization flow.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Pizza Builder 2.0</h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The refined design focused on clarity and ease of use. Key improvements included:
            </p>
            <div className="space-y-4">
              <div className="p-6 bg-card rounded-lg shadow-card">
                <h4 className="font-semibold mb-2">Topping Selection Flow</h4>
                <p className="text-sm text-muted-foreground">
                  Streamlined process for adding toppings with immediate visual feedback and clear quantity controls
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-card">
                <h4 className="font-semibold mb-2">Half & Half Functionality</h4>
                <p className="text-sm text-muted-foreground">
                  Intuitive interface for splitting pizzas with different toppings on each side
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-card">
                <h4 className="font-semibold mb-2">Cart Management</h4>
                <p className="text-sm text-muted-foreground">
                  Smooth transition from builder to cart with clear summary of customizations
                </p>
              </div>
            </div>
          </div>
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
