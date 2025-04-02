"use client"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-brand-50 to-background">
        <Link href="/" className="mb-8 flex items-center gap-2 text-lg font-semibold">
          <Image
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=40&auto=format&fit=crop"
            alt="TransportPro Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl">TransportPro</span>
        </Link>
        <Card className="w-full max-w-md border-brand-200">
          <CardHeader>
            <CardTitle className="text-2xl text-brand-700">Log in</CardTitle>
            <CardDescription>Enter your email and password to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-brand-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-brand-600 hover:bg-brand-700">Log in</Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-brand-600 hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

