import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = {
  vendors: [
    {
      quote: "DILIVALY transformed how we handle deliveries. The escrow system gives us peace of mind, and the competitive quotes save us money on every shipment.",
      name: "Ajeigbe Moruf",
      role: "E-commerce Owner",
      avatar: "AM"
    },
    {
      quote: "The PIN verification is brilliant. We used to have issues with fake delivery confirmations, but now we know every package reaches our customers safely.",
      name: "Chioma Okonkwo",
      role: "SME Owner",
      avatar: "CO"
    },
    {
      quote: "Being able to compare quotes from multiple agents has reduced our delivery costs by 30%. The platform is intuitive and the agents are professional.",
      name: "Adesanya Sunday",
      role: "E-com Vendor",
      avatar: "AS"
    }
  ],
  agents: [
    {
      quote: "I get consistent delivery jobs every day, and the payment is guaranteed. No more chasing clients for money after completing deliveries.",
      name: "Ibrahim Musa",
      role: "Delivery Agent",
      avatar: "IM"
    },
    {
      quote: "The verification badge has helped me win more jobs. Vendors trust verified agents, and the rating system rewards good service with more opportunities.",
      name: "Grace Adeola",
      role: "Dispatch Rider",
      avatar: "GA"
    },
    {
      quote: "DILIVALY gave me a steady income stream. The escrow protection means I always get paid for completed deliveries. It's changed my business.",
      name: "Emeka Obi",
      role: "Logistics Professional",
      avatar: "EO"
    }
  ]
};

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<'vendors' | 'agents'>('vendors');

  return (
    <section className="py-20 px-6 bg-[#07120A]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-[#00C805]">Thousands</span>
          </h2>
          <p className="font-body text-white/65 text-lg">
            Hear from vendors and agents who trust DILIVALY every day
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20">
            <button
              onClick={() => setActiveCategory('vendors')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'vendors'
                  ? 'bg-[#00C805] text-[#07120A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Vendors
            </button>
            <button
              onClick={() => setActiveCategory('agents')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'agents'
                  ? 'bg-[#00C805] text-[#07120A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Agents
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials[activeCategory].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-[#00C805] text-5xl mb-4 leading-none">"</div>
              <p className="font-body text-white/75 mb-6 leading-relaxed">{testimonial.quote}</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#00C805] fill-[#00C805]" size={16} />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#00C805]/20 flex items-center justify-center">
                  <span className="font-body text-[#00C805] font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-body text-white font-semibold">{testimonial.name}</p>
                  <div className="inline-block px-2 py-1 rounded-full bg-[#00C805]/20 border border-[#00C805]/30">
                    <span className="font-body text-[#00C805] text-xs">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
