import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-50 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help with any questions about our transportation services.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-brand-700">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="subscription">Subscription Plans</SelectItem>
                        <SelectItem value="booking">Booking Assistance</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=800&auto=format&fit=crop"
                    alt="Map location"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-brand-700">Contact Information</h2>
                  <p className="text-muted-foreground">You can also reach us using the information below.</p>
                </div>

                <div className="grid gap-6">
                  <Card className="border-brand-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-brand-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Our Location</h3>
                          <address className="not-italic text-sm text-muted-foreground">
                            123 Transport Avenue
                            <br />
                            New York, NY 10001
                            <br />
                            United States
                          </address>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-brand-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-brand-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Phone Numbers</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>
                              Main:{" "}
                              <a href="tel:+1234567890" className="hover:text-brand-600">
                                (123) 456-7890
                              </a>
                            </p>
                            <p>
                              Support:{" "}
                              <a href="tel:+1234567891" className="hover:text-brand-600">
                                (123) 456-7891
                              </a>
                            </p>
                            <p>
                              Bookings:{" "}
                              <a href="tel:+1234567892" className="hover:text-brand-600">
                                (123) 456-7892
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-brand-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-brand-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email Addresses</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>
                              General:{" "}
                              <a href="mailto:info@transportpro.com" className="hover:text-brand-600">
                                info@transportpro.com
                              </a>
                            </p>
                            <p>
                              Support:{" "}
                              <a href="mailto:support@transportpro.com" className="hover:text-brand-600">
                                support@transportpro.com
                              </a>
                            </p>
                            <p>
                              Bookings:{" "}
                              <a href="mailto:bookings@transportpro.com" className="hover:text-brand-600">
                                bookings@transportpro.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

