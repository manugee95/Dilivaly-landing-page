import { Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07120A] border-t border-[#00C805]/20 py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img
                src="/src/imports/dilivaly-logo.png"
                alt="DILIVALY"
                className="h-10"
              />
            </div>
            <p className="font-body text-white/65 text-sm leading-relaxed mb-6">
              Nigeria's trusted delivery marketplace. Connecting vendors and agents for secure, reliable deliveries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#00C805]/10 hover:bg-[#00C805]/20 flex items-center justify-center transition-colors">
                <Twitter className="text-[#00C805]" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#00C805]/10 hover:bg-[#00C805]/20 flex items-center justify-center transition-colors">
                <Facebook className="text-[#00C805]" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#00C805]/10 hover:bg-[#00C805]/20 flex items-center justify-center transition-colors">
                <Instagram className="text-[#00C805]" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#00C805]/10 hover:bg-[#00C805]/20 flex items-center justify-center transition-colors">
                <Linkedin className="text-[#00C805]" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-white font-semibold mb-4 text-xs uppercase tracking-wider">For Vendors</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">How It Works</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Post a Delivery</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Escrow Protection</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">COD Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white font-semibold mb-4 text-xs uppercase tracking-wider">For Agents</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Become an Agent</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Verification Process</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Earnings</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Rating System</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Agent Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white font-semibold mb-4 text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="font-body text-white/65 hover:text-[#00C805] transition-colors text-sm">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#00C805]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} DILIVALY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-[#00C805] transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-[#00C805] transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-[#00C805] transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
