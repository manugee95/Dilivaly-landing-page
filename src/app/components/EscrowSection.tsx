import { motion } from 'motion/react';
import { Lock, MapPin, CheckCircle, CreditCard, Shield, Banknote } from 'lucide-react';
import { useState } from 'react';

export function EscrowSection() {
  const [activeTab, setActiveTab] = useState<'escrow' | 'cod'>('escrow');

  return (
    <section id="security" className="py-20 px-6 bg-[#07120A]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Your Money is <span className="text-[#00C805]">Protected</span>
          </h2>
          <p className="font-body text-white/65 text-lg max-w-2xl mx-auto">
            Advanced escrow and COD protection ensure secure transactions for both vendors and agents.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20">
            <button
              onClick={() => setActiveTab('escrow')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'escrow'
                  ? 'bg-[#00C805] text-[#07120A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Escrow System
            </button>
            <button
              onClick={() => setActiveTab('cod')}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === 'cod'
                  ? 'bg-[#00C805] text-[#07120A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              COD Protection
            </button>
          </div>
        </div>

        {activeTab === 'escrow' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                {[
                  { icon: CreditCard, label: 'Vendor Pays', badge: '🔒 Funds Locked' },
                  { icon: Shield, label: 'Enters Escrow', badge: '📍 In Progress' },
                  { icon: CheckCircle, label: 'Agent Delivers', badge: '✅ Released' }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/30 flex items-center justify-center mb-4">
                      <step.icon className="text-[#00C805]" size={32} />
                    </div>
                    <p className="font-body text-white font-medium mb-2">{step.label}</p>
                    <div className="px-3 py-1 rounded-full bg-[#00C805]/20 border border-[#00C805]/30">
                      <span className="font-body text-[#00C805] text-sm">{step.badge}</span>
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute w-24 h-0.5 bg-gradient-to-r from-[#00C805] to-transparent mt-10" style={{ left: `${(index + 1) * 25}%` }}></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20">
                <h3 className="font-body text-white text-xl font-semibold mb-4">How Escrow Works</h3>
                <p className="font-body text-white/65 leading-relaxed mb-4">
                  When you accept a quote, your payment is securely held in our escrow system. The agent cannot access these funds until delivery is confirmed with the unique PIN code.
                </p>
                <p className="text-white/70 leading-relaxed">
                  This guarantees that vendors only pay for successful deliveries, and agents are guaranteed payment for completed work. No disputes, no chargebacks, no uncertainty.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'cod' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                {[
                  { icon: Lock, label: 'COD Order Created', badge: '🔒 Protected' },
                  { icon: Banknote, label: 'Agent Collects Payment', badge: '💰 Secured' },
                  { icon: CheckCircle, label: 'Vendor Receives Funds', badge: '✅ Delivered' }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/30 flex items-center justify-center mb-4">
                      <step.icon className="text-[#00C805]" size={32} />
                    </div>
                    <p className="font-body text-white font-medium mb-2">{step.label}</p>
                    <div className="px-3 py-1 rounded-full bg-[#00C805]/20 border border-[#00C805]/30">
                      <span className="font-body text-[#00C805] text-sm">{step.badge}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20">
                <h3 className="font-body text-white text-xl font-semibold mb-4">COD Protection System</h3>
                <p className="font-body text-white/65 leading-relaxed mb-4">
                  Each agent receives a unique, dedicated virtual account number for cash-on-delivery collections. When the customer pays, funds are held securely until delivery is confirmed.
                </p>
                <p className="font-body text-white/65 leading-relaxed">
                  This protects vendors from fraudulent COD claims while ensuring agents are fairly compensated. All COD transactions are tracked, verified, and reconciled automatically.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
