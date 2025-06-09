// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
      {/* Contact CTA Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-12 border-b border-gray-200">
          <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight px-2">
              Still have questions?
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 whitespace-nowrap">
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Logo and Social Links */}
          <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <div className="inline-block">
                <Image
                  src="/logo.svg"
                  alt="Connect Logo"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                  priority
                />
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-3">
              <Link 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                aria-label="Follow us on Pinterest"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.74-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Pages Column */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Pages</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/students" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  Students
                </Link>
              </li>
              <li>
                <Link href="/employers" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  Employer
                </Link>
              </li>
              <li>
                <Link href="/immigration-lawyers" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  Immigration Lawyer
                </Link>
              </li>
              <li>
                <Link href="/school-admin" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none transition-colors duration-200">
                  School Administrator
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Subscribe to our newsletter to stay updated
            </h3>
            <div className="space-y-3 max-w-xs mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-colors duration-200"
                aria-label="Email address for newsletter subscription"
              />
              <button className="text-yellow-500 hover:text-yellow-600 focus:text-yellow-600 focus:outline-none py-2 font-medium transition-colors duration-200 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 lg:space-x-6 space-y-2 sm:space-y-0 order-2 md:order-1">
              <Link href="/terms" className="text-xs sm:text-sm text-gray-300 hover:text-white focus:text-white focus:outline-none transition-colors duration-200">
                Terms & conditions
              </Link>
              <span className="text-gray-500 hidden sm:inline text-xs">|</span>
              <Link href="/privacy" className="text-xs sm:text-sm text-gray-300 hover:text-white focus:text-white focus:outline-none transition-colors duration-200">
                Privacy policy
              </Link>
            </div>
            <div className="text-gray-300 text-center text-xs sm:text-sm leading-relaxed order-1 md:order-2">
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span>Copyright © <span className="font-semibold text-white">Purpose Connect</span></span>
                <span className="hidden sm:inline text-gray-500">|</span>
                <span>Designed by <span className="font-semibold text-white">Benmore Technologies</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}