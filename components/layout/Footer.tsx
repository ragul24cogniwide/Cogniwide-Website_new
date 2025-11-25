'use client'
 
import { motion } from 'framer-motion'
 
const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'CogniAgent', href: '/products/cogniagent' },
        { name: 'CogniKube', href: '/products/cognikube' },
        { name: 'CogniInsights', href: '/products/cogniinsights' },
      ],
      subSections: [
        {
          title: 'Services',
          links: [
            { name: 'AI Consulting', href: '/services/ai-consulting' },
            { name: 'AI Development', href: '/services/ai-development' },
            { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
            { name: 'Data Engineering', href: '/services/data-engineering' },
            { name: 'CyberSecurity', href: '/services/cybersecurity' },
          ]
        }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'CogniVibe', href: '/solutions/cognivibe' },
        { name: 'CogniTest', href: '/solutions/cognitest' },
        { name: 'CogniOps', href: '/solutions/cogniops' },
      ],
      subSections: [
        {
          title: 'Industries',
          links: [
            { name: 'Banking & Finance', href: '/industries/banking' },
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Retail & E-commerce', href: '/industries/retail' },
            { name: 'Insurance', href: '/industries/insurance' },
            { name: 'Manufacturing', href: '/industries/manufacturing' },
            { name: 'Telecommunications', href: '/industries/telecom' },
          ]
        }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Life at Cogniwide', href: '/about/life-at-cogniwide' },
        { name: 'Careers', href: '/careers' },
        // { name: 'News & Press', href: '/news' },
        { name: 'Contact', href: '/contact' },
      ]
    }
  ]
 
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-gray-100/50 to-gray-50 text-brand-black border-t-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img
                  src="/logo-light.png"
                  alt="Cogniwide"
                  className="h-12 w-auto mb-3"
                />
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 font-medium">
                Cogniwide is an AI-based IT products and services company that provides high-performance product development, solutions, and operations services that focuses on Digital Transformation.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                We leverage new generation technologies like AI, RPA, Data Analytics, and Blockchain to build tailor-made digital Web and Mobile solutions and aid in the digital journey of our partners.
              </p>
 
              {/* Social Media Links */}
              <div className="flex space-x-3 mb-8">
                <a href="https://www.linkedin.com/company/cogniwide" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://twitter.com/cogniwide" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/cogniwide" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
 
              {/* Association Logos */}
              <div className="flex items-center space-x-6 mb-4">
                {/* NASSCOM Logo */}
                <img
                  src="https://www.cogniwide.com/assets/images/nasscom-gray.png"
                  alt="NASSCOM Member"
                  className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
                {/* ISO 27001 Logo */}
                <img
                  src="/images/iso-27001-logo.jfif"
                  alt="ISO 27001 Certified"
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          </div>
 
          {/* Footer Links */}
          {footerSections.slice(0, 2).map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-bold text-blue-700 mb-5 pb-2 relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></span>
              </h3>
              <ul className="space-y-3 mb-8">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 transition-all duration-200 text-sm font-medium hover:translate-x-1 inline-block group"
                    >
                      <span className="group-hover:underline">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              {section.subSections && section.subSections.map((subSection) => (
                <div key={subSection.title}>
                  <h4 className="text-base font-bold text-blue-700 mb-4 pb-1 relative inline-block">
                    {subSection.title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
                  </h4>
                  <ul className="space-y-3">
                    {subSection.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-700 hover:text-blue-600 transition-all duration-200 text-sm font-medium hover:translate-x-1 inline-block group"
                        >
                          <span className="group-hover:underline">{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
 
          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold text-blue-700 mb-5 pb-2 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {footerSections[2].links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-all duration-200 text-sm font-medium hover:translate-x-1 inline-block group"
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
 
          {/* Our Branches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold text-blue-700 mb-5 pb-2 relative inline-block">
              Our Branches
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></span>
            </h3>
            <div className="space-y-5 text-xs">
              <div className="bg-blue-50/50 p-3 rounded-lg border-l-3 border-blue-500 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-blue-700 font-bold mb-2 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Chennai HQ
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  3rd Floor, Alpha City, SSPDL Building, Rajiv Gandhi Salai, Navalur<br />
                  Chennai - 603103, Tamil Nadu
                </p>
              </div>
              <div className="bg-blue-50/50 p-3 rounded-lg border-l-3 border-blue-500 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-blue-700 font-bold mb-2 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Bengaluru
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  1st Floor, SPD Plaza, 52, Jyoti Niwas College Rd, Koramangala<br />
                  Bengaluru, Karnataka - 560034
                </p>
              </div>
              <div className="bg-blue-50/50 p-3 rounded-lg border-l-3 border-blue-500 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-blue-700 font-bold mb-2 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Madurai
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  No.15 4th floor Gokale Road, Chinna Chokkikulam<br />
                  Madurai - 625014, Tamil Nadu
                </p>
              </div>
            </div>
          </motion.div>
        </div>
 
        {/* Bottom Section */}
        <motion.div
          className="border-t-2 border-blue-100 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-50/30 via-transparent to-blue-50/30 rounded-lg px-6 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-700 text-sm mb-4 md:mb-0 font-medium">
            © 2024 <span className="text-blue-700 font-bold">Cogniwide</span>. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-all duration-200 text-sm font-medium hover:underline hover:scale-105 inline-block">
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-all duration-200 text-sm font-medium hover:underline hover:scale-105 inline-block">
              Terms of Service
            </a>
            <span className="text-gray-300">|</span>
            <a href="/cookies" className="text-gray-700 hover:text-blue-600 transition-all duration-200 text-sm font-medium hover:underline hover:scale-105 inline-block">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
 
export default Footer