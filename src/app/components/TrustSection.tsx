import { motion } from 'motion/react';
import { Shield, Lock, KeyRound, Database } from 'lucide-react';

const trustCards = [
  {
    icon: Shield,
    title: 'Verified Agents Only',
    description: 'All agents undergo identity and document verification before accessing the platform.'
  },
  {
    icon: Lock,
    title: 'Escrow-Protected Payments',
    description: 'Vendor funds are held securely and only released on delivery confirmation.'
  },
  {
    icon: KeyRound,
    title: 'PIN Delivery Verification',
    description: 'Every delivery requires physical PIN confirmation — no PIN, no payment.'
  },
  {
    icon: Database,
    title: 'Encrypted Transactions',
    description: 'All payment data is encrypted end-to-end using industry-standard protocols.'
  }
];

const badges = [
  '🔒 SSL Secured',
  '🔐 Encrypted Payments',
  '✅ KYC Verified',
  '🛡️ Escrow Protected'
];

export function TrustSection() {
  return (
    <section className="py-20 px-6 bg-[#0D1F11]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Built on <span className="text-[#00C805]">Trust</span> & Security
          </h2>
          <p className="font-body text-white/65 text-lg max-w-2xl mx-auto">
            Your security is our priority. Every transaction is protected by multiple layers of verification and encryption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustCards.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20 hover:border-[#00C805]/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-[#00C805]/20 flex items-center justify-center mb-4">
                <card.icon className="text-[#00C805]" size={28} />
              </div>
              <h3 className="font-body text-white font-semibold text-lg mb-2">{card.title}</h3>
              <p className="font-body text-white/65 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-[#00C805]/20 pt-8">
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(1,77,11,0.1)] border border-[#00C805]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-body text-white/75 text-sm font-medium">{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
