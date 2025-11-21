import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/hero/ascribe-hero.png";
import image1 from "@/assets/ascribe/image-1.png";
import image2 from "@/assets/ascribe/image-2.png";
import image3 from "@/assets/ascribe/image-3.png";
import image4 from "@/assets/ascribe/image-4.png";
import image5 from "@/assets/ascribe/image-5.png";
import image6 from "@/assets/ascribe/image-6.png";
import image7 from "@/assets/ascribe/image-7.png";
import image8 from "@/assets/ascribe/image-8.png";
import image9 from "@/assets/ascribe/image-9.png";
import image10 from "@/assets/ascribe/image-10.png";
import image11 from "@/assets/ascribe/image-11.png";
import image12 from "@/assets/ascribe/image-12.png";
import image13 from "@/assets/ascribe/image-13.png";
import image14 from "@/assets/ascribe/image-14.png";
import image15 from "@/assets/ascribe/image-15.png";
import image16 from "@/assets/ascribe/image-16.png";
import image17 from "@/assets/ascribe/image-17.png";
import image18 from "@/assets/ascribe/image-18.png";
import image19 from "@/assets/ascribe/image-19.png";
import image20 from "@/assets/ascribe/image-20.png";
import image21 from "@/assets/ascribe/image-21.png";
import image22 from "@/assets/ascribe/image-22.png";
import image23 from "@/assets/ascribe/image-23.png";
import image24 from "@/assets/ascribe/image-24.png";

const Ascribe = () => {
  return (
    <CaseStudyLayout
      title="Ascribe Intelligence"
      subtitle="Blockchain Platform for Digital Rights Management"
      description="Ascribe is a blockchain-based platform that allows creators to register their digital works, track ownership, and manage intellectual property rights through a secure, transparent ledger system."
    >
      <div className="space-y-32">
        <section className="space-y-8">
          <img src={heroImage} alt="Ascribe Platform Overview" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">The Challenge</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Digital creators face significant challenges in protecting their intellectual property online. Traditional copyright systems are slow, expensive, and difficult to enforce across borders. Ascribe needed to create an intuitive platform that leverages blockchain technology to provide instant, verifiable proof of ownership for digital works.
          </p>
          <img src={image1} alt="Platform Challenge" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Registration Flow</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The registration process was designed to be straightforward and accessible to creators of all technical backgrounds. Users can upload their work, add metadata, and receive a blockchain-verified certificate of authenticity in minutes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image2} alt="Registration Step 1" className="w-full rounded-lg" />
            <img src={image3} alt="Registration Step 2" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Ownership Tracking</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Every transfer of ownership is recorded on the blockchain, creating an immutable chain of custody. This transparency helps creators track how their work moves through the market and ensures authenticity for collectors and buyers.
          </p>
          <img src={image4} alt="Ownership Tracking Interface" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Marketplace Integration</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Ascribe integrates seamlessly with digital marketplaces, allowing creators to sell their work while maintaining verifiable provenance. The platform supports various licensing models and royalty structures.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image5} alt="Marketplace View" className="w-full rounded-lg" />
            <img src={image6} alt="Licensing Options" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Certificate System</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Each registered work receives a unique certificate that serves as proof of authenticity. These certificates are cryptographically secured and can be verified by anyone with access to the blockchain.
          </p>
          <img src={image7} alt="Certificate of Authenticity" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Collection Management</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Creators and collectors can organize their works into collections, making it easy to manage portfolios and showcase their digital assets. The interface provides powerful filtering and search capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={image8} alt="Collection View 1" className="w-full rounded-lg" />
            <img src={image9} alt="Collection View 2" className="w-full rounded-lg" />
            <img src={image10} alt="Collection View 3" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Transfer Process</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Transferring ownership is simple and secure. Both parties receive confirmation of the transfer, and all details are permanently recorded on the blockchain, creating a complete audit trail.
          </p>
          <img src={image11} alt="Transfer Interface" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Consignment Features</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The platform supports consignment arrangements, allowing creators to loan their work to galleries or collectors while maintaining ownership rights. Smart contracts automate the terms and ensure compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image12} alt="Consignment Setup" className="w-full rounded-lg" />
            <img src={image13} alt="Consignment Management" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">User Dashboard</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The dashboard provides creators with a comprehensive overview of their registered works, pending transfers, and market activity. Real-time notifications keep users informed of important events.
          </p>
          <img src={image14} alt="User Dashboard" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Provenance Visualization</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The platform visualizes the complete history of a work, showing all transfers, editions, and related events in an intuitive timeline format. This transparency builds trust and adds value to digital works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image15} alt="Provenance Timeline" className="w-full rounded-lg" />
            <img src={image16} alt="History Details" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Edition Management</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Creators can create limited editions of their work, with each edition uniquely numbered and tracked. The system prevents unauthorized duplication and maintains the scarcity that gives digital works value.
          </p>
          <img src={image17} alt="Edition Management" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Verification System</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Anyone can verify the authenticity of a work by checking its blockchain record. The verification process is instant and provides complete transparency about a work's origin and ownership history.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={image18} alt="Verification Interface" className="w-full rounded-lg" />
            <img src={image19} alt="Verification Results" className="w-full rounded-lg" />
            <img src={image20} alt="Blockchain Record" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Mobile Experience</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The platform is fully responsive and optimized for mobile devices, allowing creators to manage their works on the go. The mobile experience maintains all the functionality of the desktop version.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image21} alt="Mobile Interface 1" className="w-full rounded-lg" />
            <img src={image22} alt="Mobile Interface 2" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Impact & Results</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Ascribe has revolutionized how digital creators protect and monetize their work. The platform has processed thousands of registrations and transfers, helping creators establish verifiable provenance for their digital assets while building trust in the digital art market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image23} alt="Platform Impact" className="w-full rounded-lg" />
            <img src={image24} alt="Future Vision" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8 text-center">
          <blockquote className="text-2xl font-serif italic text-muted-foreground border-l-4 border-primary pl-8">
            "Blockchain technology finally gives digital creators the same protections that physical artists have enjoyed for centuries. Ascribe makes this technology accessible to everyone."
          </blockquote>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default Ascribe;
