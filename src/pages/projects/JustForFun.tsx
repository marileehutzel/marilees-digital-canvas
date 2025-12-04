import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero/just-for-fun-hero.png";
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
              These sketches and illustrations represent personal creative time where I explore different artistic
              styles and techniques. Each piece is an experiment in visual storytelling, composition, and aesthetic
              expression.
            </p>
            <div className="relative px-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image2} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image3} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image4} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image5} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image6} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image7} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image8} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image9} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image10} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image11} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image12} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image15} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image16} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image18} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image19} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image20} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image21} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image22} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image23} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-[400px] md:h-[600px]">
                      <img src={image24} alt="Creative sketch" className="w-full h-full object-contain rounded-lg" />
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
            <p className="text-xl text-muted-foreground leading-relaxed font-serif mb-8">
              These personal projects provide a creative outlet beyond professional design work, allowing me to
              experiment, practice new techniques, and maintain artistic inspiration. They represent the joy of creating
              without constraints or deadlines.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Creative pieces in collection</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Mixed</div>
                <p className="text-muted-foreground">Media & techniques explored</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Ongoing</div>
                <p className="text-muted-foreground">Creative exploration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default JustForFun;
