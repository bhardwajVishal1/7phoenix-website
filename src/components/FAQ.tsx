import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does 7PHOENIX provide?",
    answer:
      "We provide Social Media Marketing, SEO, Google Ads, Meta Ads, Website Development, Branding, Graphic Design, Content Marketing, and Performance Marketing.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, local businesses, SMEs, and large enterprises. Every strategy is customized according to your goals and budget.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term strategy. Most businesses begin seeing measurable improvements within 3 to 6 months depending on competition and website health.",
  },
  {
    question: "Can you manage our social media accounts?",
    answer:
      "Absolutely! We create content, design creatives, schedule posts, engage with audiences, and run paid campaigns on Facebook, Instagram, LinkedIn, and more.",
  },
  {
    question: "Do you build websites?",
    answer:
      "Yes. We design modern, responsive, SEO-friendly websites that help businesses convert visitors into customers.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply contact us through our contact form or request a free consultation. We'll discuss your goals and create a custom marketing plan.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section
  id="faq"
  className="bg-transparent py-24"
>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-orange-500 text-sm">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked
            <span className="text-orange-500"> Questions</span>
          </h2>

          <p className="text-white/70 mt-6">
            Everything you need to know before working with 7PHOENIX.
          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <ChevronUp className="text-orange-500" />
                ) : (
                  <ChevronDown className="text-orange-500" />
                )}

              </button>

              {openIndex === index && (

                <div className="px-6 pb-6">

                  <p className="text-white/70 leading-8">
                    {faq.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;