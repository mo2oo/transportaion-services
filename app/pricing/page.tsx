import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subscription Plans</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect monthly subscription plan for your transportation needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <Card className="flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20">
                  <div className="absolute transform rotate-45 bg-muted text-center text-xs font-semibold py-1 right-[-40px] top-[32px] w-[170px]">
                    Popular
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-brand-700">Basic Plan</CardTitle>
                  <CardDescription>For occasional transportation needs</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-brand-600">$199</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>8 rides per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Standard vehicles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>24-hour advance booking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Up to 15 miles per ride</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=basic" className="w-full">
                    <Button className="w-full bg-brand-600 hover:bg-brand-700">Subscribe Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-brand-600 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20">
                  <div className="absolute transform rotate-45 bg-secondary text-white text-center text-xs font-semibold py-1 right-[-40px] top-[32px] w-[170px]">
                    Most Popular
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-brand-700">Standard Plan</CardTitle>
                  <CardDescription>For regular transportation needs</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-brand-600">$349</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>16 rides per month</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Premium vehicles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>12-hour advance booking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Up to 25 miles per ride</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Priority scheduling</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=standard" className="w-full">
                    <Button className="w-full bg-brand-600 hover:bg-brand-700">Subscribe Now</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 h-20 w-20">
                  <div className="absolute transform rotate-45 bg-muted text-center text-xs font-semibold py-1 right-[-40px] top-[32px] w-[170px]">
                    Premium
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-brand-700">Premium Plan</CardTitle>
                  <CardDescription>For frequent transportation needs</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-brand-600">$599</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Unlimited rides</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Luxury vehicles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>On-demand booking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Unlimited mileage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>Dedicated driver</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-brand-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-brand-600" />
                      </div>
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=premium" className="w-full">
                    <Button className="w-full bg-brand-600 hover:bg-brand-700">Subscribe Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="mx-auto max-w-3xl mt-16">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-muted"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Additional Services</span>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-white to-brand-50 border-brand-200">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=600&auto=format&fit=crop"
                      alt="Airport Transfer Package"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-700">Airport Transfer Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Add dedicated airport transfers to any subscription plan with flight tracking and luggage
                      assistance.
                    </p>
                    <div className="text-2xl font-bold text-brand-600">$99</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand-600 hover:bg-brand-700">Add to Subscription</Button>
                  </CardFooter>
                </Card>
                <Card className="bg-gradient-to-br from-white to-brand-50 border-brand-200">
                  <div className="relative h-48 w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=600&auto=format&fit=crop"
                      alt="Special Events Package"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-700">Special Events Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Add luxury transportation for special events with premium vehicles and professional chauffeurs.
                    </p>
                    <div className="text-2xl font-bold text-brand-600">$149</div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand-600 hover:bg-brand-700">Add to Subscription</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-brand-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have Questions About Our Plans?</h2>
                <p className="text-brand-100 md:text-xl">
                  Our team is ready to help you choose the perfect plan for your transportation needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-brand-600 hover:bg-brand-50">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-brand-700">
                    View FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

