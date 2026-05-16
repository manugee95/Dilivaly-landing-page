import { motion } from 'motion/react';
import { Package, CheckCircle, Wallet } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-15 pt-24 lg:pt-15 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#00C805]/20 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 200, 5, 0.1) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Deliver.<br />
            <span className="text-[#00C805]">Anywhere</span>.<br />
            Securely.
          </h1>

          <p className="font-body text-white/65 text-lg mb-8 leading-relaxed">
            Post a delivery request. Get competing quotes from verified agents. Pay through escrow. Only pay when delivery is fufilled.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="/">
              <button className="font-body bg-[#00C805] text-[#07120A] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00d906] transition-all hover:scale-105 cursor-pointer">
              Start Delivering
            </button>
            </a>
            <a href="/">
              <button className="font-body border-2 border-[#00C805] text-[#00C805] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00C805]/10 transition-all cursor-pointer">
              Become an Agent
            </button>
            </a>
          </div>

          {/* <p className="font-body text-white/40 text-sm">Free to join. No subscription fees.</p> */}
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full aspect-square">
            <motion.div
              className="relative md:absolute md:top-10 md:right-10 p-2 sm:p-4 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20 shadow-2xl w-full max-w-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* <div className="flex items-center gap-3">
                <Package className="text-[#00C805]" size={24} />
                <div>
                  <p className="font-body text-white font-medium">New Quote Received</p>
                  <p className="font-body text-[#00C805] font-bold">₦1,200</p>
                </div>
                <div className="w-2 h-2 bg-[#00C805] rounded-full animate-pulse ml-2"></div>
              </div> */}
              <img src="/screenshot-1.png" alt="SCREENSHOT" className="w-full h-auto object-contain rounded-2xl" />
            </motion.div>

            {/* <motion.div
              className="absolute top-1/2 left-10 p-4 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#00C805]" size={24} />
                <div>
                  <p className="font-body text-white font-medium">Delivery Confirmed</p>
                  <p className="font-body text-white/65 text-sm">PIN Verified</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-20 p-4 rounded-2xl bg-[rgba(1,77,11,0.15)] backdrop-blur-xl border border-[#00C805]/20 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <Wallet className="text-[#00C805]" size={24} />
                <div>
                  <p className="font-body text-white font-medium">Escrow Released</p>
                  <p className="font-body text-[#00C805] font-bold">₦5,400</p>
                </div>
              </div>
            </motion.div> */}

            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#00C805]/20 to-transparent rounded-3xl blur-3xl"></div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
