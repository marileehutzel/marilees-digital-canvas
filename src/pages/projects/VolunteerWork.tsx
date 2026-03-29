import CaseStudyLayout from "@/components/CaseStudyLayout";
import image1 from "@/assets/volunteer-work/image-1.png";
import image2 from "@/assets/volunteer-work/image-2.png";
import image3 from "@/assets/volunteer-work/image-3.png";
import image4 from "@/assets/volunteer-work/image-4.png";
import image5 from "@/assets/volunteer-work/image-5.png";
import image6 from "@/assets/volunteer-work/image-6.png";
import hutzLogo from "@/assets/volunteer-work/Artboard 1NoBackground.png";
import hutzHammer from "@/assets/volunteer-work/HammerNoBackground.png";
import hutzNail from "@/assets/volunteer-work/NailNoBackground.png";
import hutzScrewdriver from "@/assets/volunteer-work/Screw DriverNoBackground.png";
import jeremyTruck from "@/assets/volunteer-work/JeremyBackofTruck.png";
import jeremyTrailer from "@/assets/volunteer-work/JeremyTrailer.png";

const VolunteerWork = () => {
  return (
    <CaseStudyLayout
      title="Volunteer Work"
      subtitle="Community design & creative contributions"
      description="A collection of volunteer design work including branding for local non-profits and promotional materials for community events."
    >
      <div>
        <h4 className="mb-6">Handyman Hutz Branding</h4>
        <p className="mb-8">
          I guess when your family, you get free designs, sometimes. My little brother started a handyman business and I
          created his branding material for him. He's doing great work, and super proud of how far he's gone!
        </p>
        <div className="flex flex-col items-center gap-6">
          <img src={hutzLogo} alt="Handyman Hutz logo" className="max-w-[50%] h-auto" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start mt-8">
          <div className="md:w-1/2 flex flex-col items-center gap-4">
            <img src={jeremyTruck} alt="Jeremy standing next to the branded truck and trailer" className="w-full h-auto rounded-lg shadow-elegant object-contain" />
            <div className="flex flex-row gap-4 justify-center mt-2">
              <img src={hutzHammer} alt="Handyman Hutz hammer icon" className="max-w-[100px] h-auto" />
              <img src={hutzNail} alt="Handyman Hutz nail icon" className="max-w-[100px] h-auto" />
              <img src={hutzScrewdriver} alt="Handyman Hutz screwdriver icon" className="max-w-[100px] h-auto" />
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={jeremyTrailer} alt="Trailer with Handyman Hutz branding design" className="w-full h-auto rounded-lg shadow-elegant object-contain" />
          </div>
        </div>
      </div>

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
