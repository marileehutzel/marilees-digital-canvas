import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/hero/volunteer-work-hero.png";
import image1 from "@/assets/volunteer-work/image-1.png";
import image2 from "@/assets/volunteer-work/image-2.png";
import image3 from "@/assets/volunteer-work/image-3.png";
import image4 from "@/assets/volunteer-work/image-4.png";
import image5 from "@/assets/volunteer-work/image-5.png";
import image6 from "@/assets/volunteer-work/image-6.png";

const VolunteerWork = () => {
  return (
    <CaseStudyLayout
      title="Volunteer Work"
      subtitle="Community design & creative contributions"
      description="A collection of volunteer design work including branding for local non-profits and promotional materials for community events. These projects allowed me to give back to the community while exploring creative freedom."
    >
      <div className="space-y-32">
        <div className="space-y-8">
          <img src={heroImage} alt="Volunteer work overview" className="w-full rounded-lg shadow-elegant" />
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">T-Shirt Logo Design</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif mb-8">
              T-Shirt logo design for a HipHop non-profit in Fort Collins, Colorado. The goal was to create a bold, memorable design that captured the energy and spirit of the organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src={image1} alt="T-shirt logo design - front view" className="w-full rounded-lg shadow-elegant" />
              <img src={image2} alt="T-shirt logo design - back view" className="w-full rounded-lg shadow-elegant" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Gig Posters</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif mb-8">
              Various size gig flyers used on Instagram to promote DJ dance parties. Fun to let my creativity loose a bit on these. Each poster was designed to capture the vibe and energy of the event while maintaining visual consistency across the series.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src={image3} alt="Gig poster design 1" className="w-full rounded-lg shadow-elegant" />
              <img src={image4} alt="Gig poster design 2" className="w-full rounded-lg shadow-elegant" />
              <img src={image5} alt="Gig poster design 3" className="w-full rounded-lg shadow-elegant" />
              <img src={image6} alt="Gig poster design 4" className="w-full rounded-lg shadow-elegant" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Community Impact</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif">
              These volunteer projects provided an opportunity to support local organizations while experimenting with different design styles and techniques. The work helped promote community events and strengthen brand identity for local non-profits.
            </p>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default VolunteerWork;
