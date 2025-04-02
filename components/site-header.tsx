import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6 h-16 flex items-center border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=40&auto=format&fit=crop"
              alt="TransportPro Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl">TransportPro</span>
          </Link>
          <nav className="mt-8 grid gap-4">
            <Link href="/services" className="text-base font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/pricing" className="text-base font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/booking" className="text-base font-medium hover:text-primary">
              Book a Ride
            </Link>
            <Link href="/contact" className="text-base font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image
          src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=40&auto=format&fit=crop"
          alt="TransportPro Logo"
          width={32}
          height={32}
          className="rounded"
        />
        <span className="text-xl">TransportPro</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link href="/services" className="text-sm font-medium hover:text-primary">
          Services
        </Link>
        <Link href="/pricing" className="text-sm font-medium hover:text-primary">
          Pricing
        </Link>
        <Link href="/booking" className="text-sm font-medium hover:text-primary">
          Book a Ride
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-primary">
          Contact
        </Link>
      </nav>
      <div className="ml-4 flex items-center gap-2">
        <Link href="/login">
          <Button variant="outline" size="sm">
            Log In
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  )
}

