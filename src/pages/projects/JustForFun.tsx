import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const heroImage = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/just-for-fun-hero.png";
const image2 = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/just-for-fun/image-2.png";
const image3 = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/just-for-fun/image-3.png";
const image4 = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/just-for-fun/image-4.jpg";

const JustForFun = () => {
  return (
    <CaseStudyLayout
      title="Just For Fun"
      subtitle="Creative explorations & personal sketches"
      description="A collection of personal sketches and creative explorations. These pieces represent moments of creative freedom where I experimented with different styles, techniques, and ideas without constraints."
    >
      <div className="space-y-32">
        <div className="space-y-8">
          <img src={heroImage} alt="Just for fun creative work" className="w-full rounded-lg shadow-elegant" />
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Creative Exploration</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif mb-8">
              These sketches and illustrations represent personal creative time where I explore different artistic styles and techniques. Each piece is an experiment in visual storytelling, composition, and aesthetic expression.
            </p>
            <div className="relative px-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image2} alt="Creative sketch 1" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image3} alt="Creative sketch 2" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image4} alt="Creative sketch 3" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Artistic Freedom</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif">
              These personal projects provide a creative outlet beyond professional design work, allowing me to experiment, practice new techniques, and maintain artistic inspiration. They represent the joy of creating without constraints or deadlines.
            </p>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default JustForFun;
