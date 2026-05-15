import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#07120A] via-[#0D1F11] to-[#07120A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#00C805]/10 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 200, 5, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-[1280px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#00C805]/10 border border-[#00C805]/30 mb-6">
            <span className="font-body text-[#00C805] font-medium text-sm">Ready to Get Started?</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Join DILIVALY <span className="text-[#00C805]">Today</span>
          </h2>

          <p className="font-body text-white/65 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Whether you're sending a package or delivering one, DILIVALY connects you with the right partner, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <motion.button
              className="font-body bg-[#00C805] text-[#07120A] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00d906] transition-all flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Post a Delivery as a Vendor
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.button
              className="font-body border-2 border-[#00C805] text-[#00C805] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00C805]/10 transition-all flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as a Delivery Agent
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-6 font-body text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C805] rounded-full"></div>
              Free to join
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C805] rounded-full"></div>
              No hidden fees
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C805] rounded-full"></div>
              Secure escrow payments
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
