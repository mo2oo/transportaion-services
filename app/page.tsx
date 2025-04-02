import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, CreditCard, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Premium Transportation on Your Schedule
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Subscribe to our reliable transportation service with flexible monthly plans and convenient
                    scheduling.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/pricing">
                    <Button className="px-8 bg-brand-600 hover:bg-brand-700">
                      View Plans <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Schedule a Ride
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop"
                    alt="Luxury sedan for private transportation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our subscription-based transportation service makes getting around simple and affordable.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-brand-200 bg-gradient-to-br from-white to-brand-50">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-brand-600" />
                  </div>
                  <CardTitle className="text-xl">1. Subscribe</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Choose a monthly subscription plan that fits your transportation needs and budget.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-brand-200 bg-gradient-to-br from-white to-brand-50">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-brand-600" />
                  </div>
                  <CardTitle className="text-xl">2. Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Book your rides in advance through our easy-to-use scheduling system with just a few clicks.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-brand-200 bg-gradient-to-br from-white to-brand-50">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-brand-600" />
                  </div>
                  <CardTitle className="text-xl">3. Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Make advance payments securely online for your subscription or individual rides.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-brand-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a variety of transportation options to meet your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop"
                    alt="Daily Commute Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-brand-700">Daily Commute</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Reliable transportation for your daily work commute with flexible pickup times.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop"
                    alt="Airport Transfer Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-brand-700">Airport Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comfortable and punctual service to and from airports with flight tracking.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1519619091416-f5d7e5200702?q=80&w=600&auto=format&fit=crop"
                    alt="Special Events Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-brand-700">Special Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Elegant transportation for weddings, corporate events, and special occasions.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1581362716668-cf63f9e8b689?q=80&w=600&auto=format&fit=crop"
                    alt="Medical Appointment Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-brand-700">Medical Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Caring transportation to medical appointments with door-to-door assistance.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1567593810070-7a3d471af022?q=80&w=600&auto=format&fit=crop"
                    alt="Shopping Trip Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-brand-700">Shopping Trips</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Convenient transportation for shopping with assistance for packages.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=600&auto=format&fit=crop"
                    alt="Custom Routes Service"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-brand-700">Custom Routes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Personalized transportation routes tailored to your specific needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-brand-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Experience Premium Transportation?
                </h2>
                <p className="text-brand-100 md:text-xl">
                  Join thousands of satisfied customers who enjoy our reliable and comfortable transportation services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link href="/pricing">
                  <Button size="lg" className="bg-white text-brand-600 hover:bg-brand-50">
                    View Pricing
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-brand-700">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <Card className="bg-brand-50 border-brand-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                        alt="Client Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Business Executive</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "TransportPro has completely transformed my daily commute. The subscription model is cost-effective,
                    and the drivers are always professional and punctual."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-brand-50 border-brand-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                        alt="Client Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Michael Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Frequent Traveler</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "I travel frequently for work, and their airport transfer service is exceptional. The drivers track
                    my flights, and I never have to worry about transportation, even when flights are delayed."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-brand-50 border-brand-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
                        alt="Client Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Emily Chen</p>
                      <p className="text-sm text-muted-foreground">Senior Citizen</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "As a senior with medical appointments, I rely on TransportPro's medical transportation service. The
                    drivers are compassionate and always help me to and from the vehicle. It's given me back my
                    independence."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

