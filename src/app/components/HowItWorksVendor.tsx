import { motion } from 'motion/react';
import { UserCheck, FileText, Users, ThumbsUp, Wallet, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserCheck,
    title: 'Complete KYC Verification',
    description: 'Register your business and verify your identity to get started on the platform.'
  },
  {
    number: 2,
    icon: FileText,
    title: 'Create a Delivery Request',
    description: 'Enter pickup address, delivery locations, and delivery mode i.e prepaid or cash on delivery.'
  },
  {
    number: 3,
    icon: Users,
    title: 'Receive Competing Quotes',
    description: 'Nearby verified agents submit their best quotes. Compare prices, ratings, and trust scores.'
  },
  {
    number: 4,
    icon: ThumbsUp,
    title: 'Accept Your Preferred Quote',
    description: 'Choose the agent that best fits your needs based on price, reputation, and availability.'
  },
  {
    number: 5,
    icon: Wallet,
    title: 'Pay Securely into Escrow',
    description: 'Your payment is held safely in escrow via your DILIVALY wallet until delivery is confirmed.'
  },
  {
    number: 6,
    icon: CheckCircle,
    title: 'Delivery Confirmed via PIN',
    description: 'Recipient enters the unique PIN to confirm delivery. Only then is payment released to the agent.'
  }
];

export function HowItWorksVendor() {
  return (
    <section id="vendors" className="py-20 px-6 bg-[#07120A]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#00C805]/10 border border-[#00C805]/30 mb-4">
            <span className="font-body text-[#00C805] font-medium text-xs uppercase tracking-wider">For Vendors</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">How It Works for Vendors</h2>
          <p className="font-body text-white/65 text-lg max-w-2xl mx-auto">
            Send packages nationwide with confidence. Simple, secure, and transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="p-6 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20 hover:border-[#00C805]/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#00C805]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00C805] font-bold text-xl">{step.number}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#00C805]/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="text-[#00C805]" size={24} />
                </div>
              </div>
              <h3 className="font-body text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="font-body text-white/65 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-body text-white/40 italic mb-6 text-lg">
            And that's it. Your item arrives safely, and payment is only released when confirmed.
          </p>
          <a href="/">
          <button className="font-body border-2 border-[#00C805] text-[#00C805] px-8 py-3 rounded-full font-semibold hover:bg-[#00C805]/10 transition-all cursor-pointer">
            Post Your First Delivery →
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
