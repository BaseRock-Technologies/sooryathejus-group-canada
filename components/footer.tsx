import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, TrendingUp, Phone, Users, CheckCircle, Star, Globe } from "lucide-react"

export default function FooterSection() {
  return (
    <div>

      {/* Footer */}
   <footer className="bg-white border-t border-gray-200 pt-12 pb-4 px-6">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Sooryathejus Group Logo" className="w-15 h-14 object-contain" />
                <span className="font-semibold text-gray-900">Sooryathejus Group</span>
          
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Canada's trusted partner for digital marketing, real estate, and business solutions.
        </p>
       <div className="text-sm text-gray-500 leading-7">
        <p>Toronto, Ontario, Canada</p>
        <p>info@sooryathejusgroup.ca</p>
        <p>+1 (416) 123-4567</p>
      </div>

      </div>

      {/* Right-Aligned Combined Section */}
      <div className="flex justify-center md:justify-end text-center pt-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/digital-marketing" className="hover:text-emerald-600 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="hover:text-emerald-600 transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-600 transition-colors">
                  Business Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div  style={{display: 'none'}}>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
<div className="border-t border-gray-200 mt-4 pt-4 text-center text-sm text-gray-500">
  <p>© 2025 Sooryathejus Group. All rights reserved.</p>
</div>

  </div>
</footer>

    </div>
  )
}
