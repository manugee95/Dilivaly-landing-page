import { motion } from 'motion/react';
import { UserCheck, Bell, DollarSign, CheckCircle2, Package, Award } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserCheck,
    title: 'Register and Complete Verification',
    description: 'Sign up, verify your identity and documents to become a trusted agent on the platform.'
  },
  {
    number: 2,
    icon: Bell,
    title: 'Receive Nearby Delivery Requests',
    description: 'Get instant notifications for delivery opportunities in your operating area.'
  },
  {
    number: 3,
    icon: DollarSign,
    title: 'Submit Your Best Quote',
    description: 'Review the delivery details and submit a competitive quote based on distance and effort.'
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: 'Order Becomes Active',
    description: 'When the vendor accepts your quote, you receive the pickup and delivery details.'
  },
  {
    number: 5,
    icon: Package,
    title: 'Pick Up Item & Complete Delivery',
    description: 'Collect the package from the vendor and deliver it safely to the destination.'
  },
  {
    number: 6,
    icon: Award,
    title: 'Customer Confirms via PIN',
    description: 'Recipient enters the delivery PIN. Once confirmed, you receive your payment immediately.'
  }
];

export function HowItWorksAgent() {
  return (
    <section id="agents" className="py-20 px-6 bg-[#0D1F11]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#00C805]/10 border border-[#00C805]/30 mb-4">
            <span className="font-body text-[#00C805] font-medium text-xs uppercase tracking-wider">For Agents</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">How It Works for Agents</h2>
          <p className="font-body text-white/65 text-lg max-w-2xl mx-auto">
            Earn consistently with guaranteed payments. Build your reputation and grow your business.
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
          <p className="text-white/50 italic mb-6 text-lg">
            Start earning today with fair pay and guaranteed payment protection.
          </p>
          <a href="/">
            <button className="border-2 border-[#00C805] text-[#00C805] px-8 py-3 rounded-full font-semibold hover:bg-[#00C805]/10 transition-all cursor-pointer">
            Start Earning as an Agent →
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
