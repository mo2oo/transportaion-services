import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our comprehensive range of premium transportation services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="daily-commute" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop"
                  alt="Daily Commute Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-brand-700">Daily Commute</h2>
                <p className="text-muted-foreground">
                  Our daily commute service provides reliable transportation for your regular work or school commute.
                  With flexible pickup times and consistent service, you can say goodbye to the stress of driving in
                  traffic.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Scheduled pickups and drop-offs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Comfortable, clean vehicles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Professional, punctual drivers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Cost-effective subscription plans</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/pricing">
                    <Button className="bg-brand-600 hover:bg-brand-700">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="airport-transfers" className="w-full py-12 md:py-24 bg-brand-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-brand-700">Airport Transfers</h2>
                <p className="text-muted-foreground">
                  Start and end your journey with our premium airport transfer service. We monitor flight arrivals and
                  departures to ensure timely pickups and drop-offs, even when flights are delayed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Flight tracking and monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Meet and greet service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Luggage assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Comfortable vehicles with ample space</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>24/7 service availability</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/pricing">
                    <Button className="bg-brand-600 hover:bg-brand-700">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
                  alt="Airport Transfer Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="special-events" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1519619091416-f5d7e5200702?q=80&w=1200&auto=format&fit=crop"
                  alt="Special Events Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-brand-700">Special Events</h2>
                <p className="text-muted-foreground">
                  Make your special occasions truly memorable with our luxury transportation service. Whether it's a
                  wedding, corporate event, or gala, we provide elegant transportation that adds a touch of
                  sophistication to your event.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Luxury and premium vehicles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Professional chauffeurs in formal attire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Red carpet service available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Customizable decorations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Group transportation options</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/pricing">
                    <Button className="bg-brand-600 hover:bg-brand-700">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="medical" className="w-full py-12 md:py-24 bg-brand-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-brand-700">Medical Appointments</h2>
                <p className="text-muted-foreground">
                  Our medical transportation service provides caring and attentive transportation to and from medical
                  appointments. We understand the unique needs of patients and provide door-to-door assistance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Door-to-door assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Wheelchair accessible vehicles available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Trained and compassionate drivers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Comfortable, smooth rides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Flexible scheduling for follow-up appointments</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/pricing">
                    <Button className="bg-brand-600 hover:bg-brand-700">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1581362716668-cf63f9e8b689?q=80&w=1200&auto=format&fit=crop"
                  alt="Medical Appointment Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="custom" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1473445730015-841f29a9490b?q=80&w=1200&auto=format&fit=crop"
                  alt="Custom Routes Service"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-brand-700">Custom Routes</h2>
                <p className="text-muted-foreground">
                  Our custom route service provides personalized transportation solutions tailored to your specific
                  needs. Whether you need multiple stops, recurring routes, or specialized transportation, we can create
                  a custom plan for you.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Personalized route planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Multiple stop options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Recurring schedule options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Flexible vehicle selection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-600"></div>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/pricing">
                    <Button className="bg-brand-600 hover:bg-brand-700">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

