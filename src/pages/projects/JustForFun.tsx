import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import rainbowLeaves from "@/assets/just-for-fun/rainbow-leaves.jpg";
import monstera from "@/assets/just-for-fun/monstera.jpg";
import image2 from "@/assets/just-for-fun/image-2.png";
import image3 from "@/assets/just-for-fun/image-3.png";
import image4 from "@/assets/just-for-fun/image-4.jpg";
import image5 from "@/assets/just-for-fun/image-5.png";
import image6 from "@/assets/just-for-fun/image-6.png";
import image7 from "@/assets/just-for-fun/image-7.jpg";
import image8 from "@/assets/just-for-fun/image-8.jpg";
import image9 from "@/assets/just-for-fun/image-9.jpg";
import image10 from "@/assets/just-for-fun/image-10.jpg";
import image11 from "@/assets/just-for-fun/image-11.jpg";
import image12 from "@/assets/just-for-fun/image-12.jpg";
import image15 from "@/assets/just-for-fun/image-15.jpg";
import image16 from "@/assets/just-for-fun/image-16.png";
import image18 from "@/assets/just-for-fun/image-18.jpg";
import image19 from "@/assets/just-for-fun/image-19.jpg";
import image20 from "@/assets/just-for-fun/image-20.jpg";
import image21 from "@/assets/just-for-fun/image-21.jpg";
import image22 from "@/assets/just-for-fun/image-22.jpg";
import image23 from "@/assets/just-for-fun/image-23.jpg";
import image24 from "@/assets/just-for-fun/image-24.jpg";

const JustForFun = () => {
  return (
    <CaseStudyLayout
      title="Just For Fun"
      subtitle="Creative explorations & personal sketches"
      description="A collection of personal sketches and creative explorations representing moments of creative freedom."
    >
      <div className="space-y-32">
        <div className="space-y-12">
          <div>
            <h4 className="mb-6">Creative Exploration</h4>
            <p className="mb-8">
              These sketches and illustrations represent personal creative time where I explore different artistic
              styles and techniques.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src={rainbowLeaves}
                  alt="Rainbow leaves painting"
                  className="w-full h-auto object-cover rounded-2xl shadow-card cursor-zoom-in transition-transform hover:scale-[1.01] mb-4"
                />
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-fit p-2 bg-background/95 backdrop-blur">
                <img
                  src={rainbowLeaves}
                  alt="Rainbow leaves painting"
                  className="w-full h-auto max-h-[90vh] object-contain rounded"
                />
              </DialogContent>
            </Dialog>
            <div className="columns-2 md:columns-3 gap-4 space-y-4 [&>*]:mb-4 [&>*]:break-inside-avoid animate-fade-in">
              {[monstera, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image15, image16, image18, image19, image20, image21, image22, image23, image24].map((img, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <img
                      src={img}
                      alt="Creative sketch"
                      className="w-full h-auto object-cover rounded-2xl shadow-card cursor-zoom-in transition-transform hover:scale-[1.02]"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] w-fit p-2 bg-background/95 backdrop-blur">
                    <img
                      src={img}
                      alt="Creative sketch"
                      className="w-full h-auto max-h-[90vh] object-contain rounded"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6">Artistic Freedom</h4>
            <p className="mb-8">
              These personal projects provide a creative outlet beyond professional design work.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p>Creative pieces in collection</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Mixed</div>
                <p>Media & techniques explored</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Ongoing</div>
                <p>Creative exploration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default JustForFun;