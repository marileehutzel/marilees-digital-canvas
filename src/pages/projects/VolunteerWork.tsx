import CaseStudyLayout from "@/components/CaseStudyLayout";
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
      description="A collection of volunteer design work including branding for local non-profits and promotional materials for community events."
    >
      <div className="space-y-32">
        <div className="space-y-12">
          <div>
            <h4 className="mb-6">T-Shirt Logo Design</h4>
            <p className="mb-8">T-Shirt logo design for a HipHop non-profit in Fort Collins, Colorado.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src={image1} alt="T-shirt logo design - front view" className="w-full rounded-lg shadow-elegant" />
              <img src={image2} alt="T-shirt logo design - back view" className="w-full rounded-lg shadow-elegant" />
            </div>
          </div>

          <div>
            <h4 className="mb-6">Gig Posters</h4>
            <p className="mb-8">Various size gig flyers used on Instagram to promote DJ dance parties.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src={image3} alt="Gig poster design 1" className="w-full rounded-lg shadow-elegant" />
              <img src={image4} alt="Gig poster design 2" className="w-full rounded-lg shadow-elegant" />
              <img src={image5} alt="Gig poster design 3" className="w-full rounded-lg shadow-elegant" />
              <img src={image6} alt="Gig poster design 4" className="w-full rounded-lg shadow-elegant" />
            </div>
          </div>

          <div>
            <h4 className="mb-6">Community Impact</h4>
            <p className="mb-8">
              These volunteer projects provided an opportunity to support local organizations while experimenting with
              different design styles.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Local</div>
                <p>Non-profits supported</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Gig</div>
                <p>Posters for events</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Pro Bono</div>
                <p>Design contributions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default VolunteerWork;
