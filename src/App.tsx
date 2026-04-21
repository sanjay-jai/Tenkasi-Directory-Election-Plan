import { ExternalLink, Phone, Users, MapPin, Vote } from 'lucide-react';
import { motion } from 'motion/react';

const DirectoryLink = ({ title, url, icon: Icon, description, gradient, accentColor }: { title: string, url: string, icon: any, description: string, gradient: string, accentColor: string }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -10, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={`group relative flex flex-col p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden`}
  >
    {/* Decorative Background Gradient */}
    <div className={`absolute top-0 left-0 w-full h-2 ${gradient}`} />
    
    <div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      <Icon size={32} />
    </div>
    
    <div className="flex-grow">
      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 className={`text-2xl font-black text-slate-900 group-hover:${accentColor} transition-colors`}>
          {title}
        </h2>
        <div className={`p-2 rounded-full bg-slate-50 group-hover:${gradient.replace('from-', 'bg-')} group-hover:text-white transition-all duration-300`}>
          <ExternalLink size={20} className="shrink-0" />
        </div>
      </div>
      <p className="text-slate-600 text-base leading-relaxed font-medium">
        {description}
      </p>
    </div>
    
    {/* Animated Corner accent */}
    <div className={`absolute -bottom-4 -right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity rounded-full bg-current`} style={{ color: accentColor }} />
  </motion.a>
);

export default function App() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="max-w-7xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 relative"
        >
          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
          
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-50 flex items-center justify-center p-8"
            >
              <div className="text-brand-secondary transform hover:scale-110 transition-transform duration-300">
                <Vote size={80} strokeWidth={1.5} />
              </div>
              
              {/* Subtle accent ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-brand-secondary/5 pointer-events-none" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-[1000] text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Tenkasi <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-dark">Communication <br /> Election Plan</span>
          </h1>
          
          <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
            Centralized directory for coordination and communication across all organizational levels for the Tenkasi district elections.
          </p>
        </motion.header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <DirectoryLink 
            title="DEO Directory"
            url="https://tenkasi-deo-directory.vercel.app/"
            icon={Users}
            description="High-level coordination for District Election Officers and senior administrative staff."
            gradient="from-emerald-500 to-teal-600"
            accentColor="text-emerald-700"
          />
          
          <DirectoryLink 
            title="RO Level Directory"
            url="https://tenkasi-district-communication-plan.vercel.app/"
            icon={Phone}
            description="Detailed communication channels for zonal level supervisors and coordination staff."
            gradient="from-brand-secondary to-blue-600"
            accentColor="text-brand-secondary"
          />
          
          <DirectoryLink 
            title="Polling Station Directory"
            url="https://tenkasi-polling-directory.vercel.app/"
            icon={MapPin}
            description="Comprehensive database of polling station locations and local contact particulars."
            gradient="from-brand-accent to-orange-600"
            accentColor="text-orange-700"
          />
        </motion.div>



        <footer className="mt-24 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>© 2026 Tenkasi District Administration. All rights reserved by District Election Officer, Tenkasi.</p>
        </footer>
      </div>
    </div>
  );
}

