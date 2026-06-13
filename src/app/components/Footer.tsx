import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-gray-200/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center space-y-4">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Designed and Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
            <span className="font-semibold text-gray-900">Chiranth Poojari</span>
          </p>

          {/* Year */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved
          </p>

          {/* Links */}
          <div className="flex justify-center gap-6 pt-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <button
                key={link}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
