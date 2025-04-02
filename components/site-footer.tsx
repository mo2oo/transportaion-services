import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">TransportPro</h3>
            <p className="text-sm text-muted-foreground">
              Premium transportation services with flexible subscription plans for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-sm text-muted-foreground hover:text-primary">
                  Book a Ride
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#daily-commute" className="text-sm text-muted-foreground hover:text-primary">
                  Daily Commute
                </Link>
              </li>
              <li>
                <Link href="/services#airport-transfers" className="text-sm text-muted-foreground hover:text-primary">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="/services#special-events" className="text-sm text-muted-foreground hover:text-primary">
                  Special Events
                </Link>
              </li>
              <li>
                <Link href="/services#medical" className="text-sm text-muted-foreground hover:text-primary">
                  Medical Appointments
                </Link>
              </li>
              <li>
                <Link href="/services#custom" className="text-sm text-muted-foreground hover:text-primary">
                  Custom Routes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p className="text-sm text-muted-foreground">123 Transport Avenue</p>
              <p className="text-sm text-muted-foreground">New York, NY 10001</p>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+1234567890" className="hover:text-primary">
                  (123) 456-7890
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@transportpro.com" className="hover:text-primary">
                  info@transportpro.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 TransportPro. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

