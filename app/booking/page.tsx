"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BookingPage() {
  const [date, setDate] = useState<Date>()
  const [bookingStep, setBookingStep] = useState(1)

  const handleContinue = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1)
    }
  }

  const handleBack = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Schedule a Ride</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book your transportation in advance with our easy scheduling system.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-muted"></div>
                </div>
                <div className="relative flex justify-between text-sm">
                  <div
                    className={`flex flex-col items-center ${bookingStep >= 1 ? "text-brand-600" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 1 ? "bg-brand-600 text-white" : "bg-muted text-muted-foreground"}`}
                    >
                      1
                    </div>
                    <span className="mt-2 bg-background px-2">Ride Details</span>
                  </div>
                  <div
                    className={`flex flex-col items-center ${bookingStep >= 2 ? "text-brand-600" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 2 ? "bg-brand-600 text-white" : "bg-muted text-muted-foreground"}`}
                    >
                      2
                    </div>
                    <span className="mt-2 bg-background px-2">Passenger Info</span>
                  </div>
                  <div
                    className={`flex flex-col items-center ${bookingStep >= 3 ? "text-brand-600" : "text-muted-foreground"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${bookingStep >= 3 ? "bg-brand-600 text-white" : "bg-muted text-muted-foreground"}`}
                    >
                      3
                    </div>
                    <span className="mt-2 bg-background px-2">Payment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              {bookingStep === 1 && (
                <Card className="border-brand-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-700">Ride Details</CardTitle>
                    <CardDescription>Fill in the details for your transportation request.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="service-type">Service Type</Label>
                          <Select defaultValue="standard">
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard Ride</SelectItem>
                              <SelectItem value="airport">Airport Transfer</SelectItem>
                              <SelectItem value="medical">Medical Appointment</SelectItem>
                              <SelectItem value="event">Special Event</SelectItem>
                              <SelectItem value="shopping">Shopping Trip</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label>Pickup Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : <span>Select date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  initialFocus
                                  disabled={(date) => date < new Date()}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div className="space-y-2">
                            <Label>Pickup Time</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="6:00">6:00 AM</SelectItem>
                                <SelectItem value="6:30">6:30 AM</SelectItem>
                                <SelectItem value="7:00">7:00 AM</SelectItem>
                                <SelectItem value="7:30">7:30 AM</SelectItem>
                                <SelectItem value="8:00">8:00 AM</SelectItem>
                                <SelectItem value="8:30">8:30 AM</SelectItem>
                                <SelectItem value="9:00">9:00 AM</SelectItem>
                                <SelectItem value="9:30">9:30 AM</SelectItem>
                                <SelectItem value="10:00">10:00 AM</SelectItem>
                                <SelectItem value="10:30">10:30 AM</SelectItem>
                                <SelectItem value="11:00">11:00 AM</SelectItem>
                                <SelectItem value="11:30">11:30 AM</SelectItem>
                                <SelectItem value="12:00">12:00 PM</SelectItem>
                                <SelectItem value="12:30">12:30 PM</SelectItem>
                                <SelectItem value="13:00">1:00 PM</SelectItem>
                                <SelectItem value="13:30">1:30 PM</SelectItem>
                                <SelectItem value="14:00">2:00 PM</SelectItem>
                                <SelectItem value="14:30">2:30 PM</SelectItem>
                                <SelectItem value="15:00">3:00 PM</SelectItem>
                                <SelectItem value="15:30">3:30 PM</SelectItem>
                                <SelectItem value="16:00">4:00 PM</SelectItem>
                                <SelectItem value="16:30">4:30 PM</SelectItem>
                                <SelectItem value="17:00">5:00 PM</SelectItem>
                                <SelectItem value="17:30">5:30 PM</SelectItem>
                                <SelectItem value="18:00">6:00 PM</SelectItem>
                                <SelectItem value="18:30">6:30 PM</SelectItem>
                                <SelectItem value="19:00">7:00 PM</SelectItem>
                                <SelectItem value="19:30">7:30 PM</SelectItem>
                                <SelectItem value="20:00">8:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="pickup-location">Pickup Location</Label>
                          <div className="flex">
                            <Input id="pickup-location" placeholder="Enter pickup address" className="rounded-r-none" />
                            <Button type="button" variant="outline" className="rounded-l-none border-l-0">
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="destination">Destination</Label>
                          <div className="flex">
                            <Input
                              id="destination"
                              placeholder="Enter destination address"
                              className="rounded-r-none"
                            />
                            <Button type="button" variant="outline" className="rounded-l-none border-l-0">
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="vehicle-type">Vehicle Type</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select vehicle type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="sedan">Sedan</SelectItem>
                                <SelectItem value="suv">SUV</SelectItem>
                                <SelectItem value="luxury">Luxury Sedan</SelectItem>
                                <SelectItem value="van">Passenger Van</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="passengers">Number of Passengers</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select passengers" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="6">6+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes">Special Instructions</Label>
                          <Textarea id="notes" placeholder="Any special requirements or notes" rows={3} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" disabled>
                      Back
                    </Button>
                    <Button onClick={handleContinue} className="bg-brand-600 hover:bg-brand-700">
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {bookingStep === 2 && (
                <Card className="border-brand-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-700">Passenger Information</CardTitle>
                    <CardDescription>Please provide your contact information.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Enter your last name" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email address" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subscription">Subscription Plan</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your subscription plan" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No Subscription (Pay Per Ride)</SelectItem>
                            <SelectItem value="basic">Basic Plan</SelectItem>
                            <SelectItem value="standard">Standard Plan</SelectItem>
                            <SelectItem value="premium">Premium Plan</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-muted-foreground mt-1">
                          If you have an active subscription, select it here. Otherwise, choose "Pay Per Ride".
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button onClick={handleContinue} className="bg-brand-600 hover:bg-brand-700">
                      Continue to Payment
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {bookingStep === 3 && (
                <Card className="border-brand-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-brand-700">Payment Information</CardTitle>
                    <CardDescription>Please provide your payment details to complete your booking.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="Enter the name on your card" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="Enter your card number" />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiration Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="Enter CVV" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="billing-address">Billing Address</Label>
                        <Input id="billing-address" placeholder="Enter your billing address" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="City" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" placeholder="State" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">Zip Code</Label>
                          <Input id="zip" placeholder="Zip Code" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="save-payment"
                            className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-600"
                          />
                          <label htmlFor="save-payment" className="text-sm text-muted-foreground">
                            Save payment information for future bookings
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                    <Button className="bg-brand-600 hover:bg-brand-700">Complete Booking</Button>
                  </CardFooter>
                </Card>
              )}
            </div>

            <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2 border-brand-200">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-700">Why Book with TransportPro?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Reliable Service</h3>
                        <p className="text-sm text-muted-foreground">
                          Our drivers are always punctual and professional.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Flexible Scheduling</h3>
                        <p className="text-sm text-muted-foreground">Book rides in advance or on short notice.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Premium Vehicles</h3>
                        <p className="text-sm text-muted-foreground">Clean, comfortable, and well-maintained fleet.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Transparent Pricing</h3>
                        <p className="text-sm text-muted-foreground">No hidden fees or surprise charges.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-200">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-700">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our customer service team is available to assist you with your booking.
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-brand-600" />
                    <span className="text-sm">Available Monday-Friday, 8am-8pm</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-brand-600" />
                    <span className="text-sm">Saturday-Sunday, 9am-5pm</span>
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </Link>
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

