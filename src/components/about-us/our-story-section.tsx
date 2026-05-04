import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2022, BrightArc is a boutique content and brand
                storytelling studio supported by ISB-trained marketers and
                consultants. We help brands turn ideas, insights, and
                experiences into powerful narratives that elevate both brand
                presence and business outcomes.
              </p>
              <p>
                Our work blends consulting-grade strategic thinking, deep
                research across industries, competitors, and audiences, premium
                CXO-level writing, and brand-first storytelling that balances
                emotion with structure and insight.
              </p>
              <p>
                Every BrightArc engagement is founder-led and high-touch,
                combining ISB-level thinking with exceptional writing and fast
                yet uncompromising execution. Every piece we create is fully
                original, deeply researched, and tailored to your industry and
                brand voice.
              </p>
            </div>
          </div>

          <div className="relative w-full h-80">
            <Image
              src="/together-people.jpeg"
              alt="Our team"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
