import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqData = {
  vendors: [
    {
      question: 'How do I post a delivery request?',
      answer: 'After completing KYC verification, simply click "Create Delivery Request" in your dashboard, fill in the pickup and delivery details, and submit. Verified agents in your area will start submitting quotes within minutes.'
    },
    {
      question: 'How does escrow payment work?',
      answer: 'When you accept a quote, your payment is transferred to a secure escrow account. The funds are held there until the recipient confirms delivery with the unique PIN. Only then is the payment released to the agent.'
    },
    {
      question: 'What is COD protection?',
      answer: 'For cash-on-delivery orders, each agent receives a unique virtual account number. Your customer pays into this account, funds are held securely, and released to you only after delivery is confirmed via PIN.'
    },
    {
      question: 'How does the delivery PIN work?',
      answer: 'Every delivery request generates a unique PIN that only you and your recipient know. The agent must obtain this PIN from the recipient to confirm delivery. No PIN entry means no payment release.'
    },
    {
      question: 'What happens if an agent doesn\'t deliver?',
      answer: 'If delivery is not confirmed within the agreed timeframe, the escrow funds are automatically refunded to your wallet. You can also report issues through our dispute resolution system.'
    }
  ],
  agents: [
    {
      question: 'How do I register as a delivery agent?',
      answer: 'Click "Become an Agent", complete the registration form, and submit your verification documents (NIN, proof of address, and business registration). Verification typically takes 24-48 hours.'
    },
    {
      question: 'How do I receive delivery requests?',
      answer: 'Once verified, you\'ll receive instant notifications for delivery requests in the states where you operate. You can view request details and submit quotes directly from your dashboard'
    },
    {
      question: 'How and when do I get paid?',
      answer: 'Payment is released to your DILIVALY wallet immediately after the recipient confirms delivery with the PIN. You can withdraw funds to your bank account at any time with no minimum balance requirement.'
    },
    {
      question: 'What is the verification process?',
      answer: 'We verify your identity document, proof of address, and business registration. This helps build trust with vendors and gives you a verified badge that increases your chances of winning quotes.'
    },
    {
      question: 'How does the quote submission work?',
      answer: 'When you see a delivery request, review the pickup and delivery locations. Submit your competitive quote based on distance, effort, and your rates. Vendors compare quotes and select their preferred agent.'
    }
  ]
};

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      className={`p-6 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border transition-all ${
        isOpen ? 'border-[#00C805]/40' : 'border-[#00C805]/20'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <span className="font-body text-white font-semibold text-lg">{question}</span>
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00C805]/20 flex items-center justify-center mt-1">
          {isOpen ? (
            <Minus className="text-[#00C805]" size={16} />
          ) : (
            <Plus className="text-[#00C805]" size={16} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-body text-white/65 mt-4 leading-relaxed border-l-2 border-[#00C805] pl-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<'vendors' | 'agents'>('vendors');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-6 bg-[#0D1F11]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Got Questions? We've Got <span className="text-[#00C805]">Answers</span>
          </h2>
          <p className="font-body text-white/65 text-lg">
            Everything you need to know about DILIVALY
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20">
            <button
              onClick={() => {
                setActiveCategory('vendors');
                setOpenIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'vendors'
                  ? 'bg-[#00C805] text-[#07120A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              For Vendors
            </button>
            <button
              onClick={() => {
                setActiveCategory('agents');
                setOpenIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'agents'
                  ? 'bg-[#00C805] text-[#07120A]'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              For Agents
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqData[activeCategory].map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
