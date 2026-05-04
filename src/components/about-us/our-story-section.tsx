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
                consultants.
              </p>

              <p>
                We help brands turn ideas, insights, and experiences into clear,
                powerful narratives that elevate both brand presence and business
                outcomes.
              </p>

              <p>
                Our work blends consulting-grade strategic thinking, deep
                research, premium CXO-level writing, and brand-first storytelling
                that balances emotion with structure and insight.
              </p>

              <p>
                Every BrightArc engagement is founder-led and high-touch. We
                adapt to your tone and never impose ours, helping leaders shape
                their voice, sharpen their positioning, and tell stories that
                matter.
              </p>
            </div>
          </div>

          <div className="w-full h-80 rounded-lg shadow-lg bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500 text-lg font-medium">
              BrightArc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
