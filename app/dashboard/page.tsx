"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, CreditCard, LogOut, Menu, Package, Settings, User } from "lucide-react"
import { format } from "date-fns"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <Package className="h-6 w-6 text-brand-600" />
                <span className="font-bold">TransportPro</span>
              </Link>
              <Link href="/dashboard" className="text-brand-600">
                Dashboard
              </Link>
              <Link href="/dashboard/bookings" className="text-muted-foreground hover:text-brand-600">
                My Bookings
              </Link>
              <Link href="/dashboard/subscription" className="text-muted-foreground hover:text-brand-600">
                My Subscription
              </Link>
              <Link href="/dashboard/payment" className="text-muted-foreground hover:text-brand-600">
                Payment Methods
              </Link>
              <Link href="/dashboard/profile" className="text-muted-foreground hover:text-brand-600">
                Profile Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Package className="h-6 w-6 text-brand-600" />
          <span className="font-bold">TransportPro</span>
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/dashboard" className="text-brand-600">
            Dashboard
          </Link>
          <Link href="/dashboard/bookings" className="text-muted-foreground hover:text-brand-600">
            My Bookings
          </Link>
          <Link href="/dashboard/subscription" className="text-muted-foreground hover:text-brand-600">
            My Subscription
          </Link>
          <Link href="/dashboard/payment" className="text-muted-foreground hover:text-brand-600">
            Payment Methods
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Link href="/booking">
              <Button className="bg-brand-600 hover:bg-brand-700">Schedule a Ride</Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-brand-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-700">Standard Plan</div>
              <p className="text-xs text-muted-foreground">$349/month</p>
              <div className="mt-4">
                <Link href="/dashboard/subscription">
                  <Button variant="outline" size="sm" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                    Manage Subscription
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="border-brand-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rides Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-700">12</div>
              <p className="text-xs text-muted-foreground">of 16 this month</p>
              <div className="mt-4 h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-3/4 rounded-full bg-brand-600"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-brand-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Scheduled Ride</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-700">Tomorrow</div>
              <p className="text-xs text-muted-foreground">8:00 AM - Airport Transfer</p>
              <div className="mt-4">
                <Link href="/dashboard/bookings">
                  <Button variant="outline" size="sm" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="border-brand-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Payment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-700">Current</div>
              <p className="text-xs text-muted-foreground">Next payment: July 1, 2025</p>
              <div className="mt-4">
                <Link href="/dashboard/payment">
                  <Button variant="outline" size="sm" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                    Payment Methods
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4 border-brand-200">
            <CardHeader>
              <CardTitle className="text-brand-700">Upcoming Rides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="font-medium">Airport Transfer</div>
                    <div className="text-sm text-muted-foreground">Tomorrow, 8:00 AM</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary/10"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="font-medium">Office Commute</div>
                    <div className="text-sm text-muted-foreground">Monday, 7:30 AM</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary/10"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Medical Appointment</div>
                    <div className="text-sm text-muted-foreground">Wednesday, 2:00 PM</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary/10"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/bookings" className="w-full">
                <Button variant="outline" className="w-full border-brand-600 text-brand-600 hover:bg-brand-50">
                  View All Bookings
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-3 border-brand-200">
            <CardHeader>
              <CardTitle className="text-brand-700">Quick Schedule</CardTitle>
              <CardDescription>Book your next ride</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <Link href="/booking" className="w-full">
                <Button className="w-full bg-brand-600 hover:bg-brand-700">Continue to Booking</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

