"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    isPropertyManager: "",
    roomCount: "",
    currentPMS: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/xeozbzqy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        isPropertyManager: formData.isPropertyManager,
        roomCount: formData.roomCount,
        currentPMS: formData.currentPMS,
        message: formData.message,
      }),
    });

    if (response.ok) {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        isPropertyManager: "",
        roomCount: "",
        currentPMS: "",
        message: "",
      });
    } else {
      const data = await response.json();
      toast({
        title: "Error sending message",
        description: data?.message || "Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error sending message",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-semibold text-gray-900">
          Let's Connect
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Fill out the form below and we'll be in touch soon
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="businessName"
                className="text-sm font-medium text-gray-700"
              >
                Business Name *
              </Label>
              <Input
                id="businessName"
                name="businessName"
                type="text"
                value={formData.businessName}
                onChange={handleChange}
                required
                placeholder="Enter your business name"
                className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Are you a property manager managing holiday rentals? *
              </Label>
              <Select
                value={formData.isPropertyManager}
                onValueChange={(value) =>
                  handleSelectChange("isPropertyManager", value)
                }
              >
                <SelectTrigger className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                How many rooms/apartments do you manage?
              </Label>
              <Select
                value={formData.roomCount}
                onValueChange={(value) =>
                  handleSelectChange("roomCount", value)
                }
              >
                <SelectTrigger className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 properties</SelectItem>
                  <SelectItem value="6-15">6-15 properties</SelectItem>
                  <SelectItem value="16-50">16-50 properties</SelectItem>
                  <SelectItem value="51-100">51-100 properties</SelectItem>
                  <SelectItem value="100+">100+ properties</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="currentPMS"
              className="text-sm font-medium text-gray-700"
            >
              What current PMS are you using?
            </Label>
            <Input
              id="currentPMS"
              name="currentPMS"
              type="text"
              value={formData.currentPMS}
              onChange={handleChange}
              placeholder="e.g., Airbnb, Booking.com, VRBO, or other PMS"
              className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your business needs..."
              rows={5}
              className="border-gray-200 focus:border-teal-500 focus:ring-teal-500 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact <span className="text-teal-500">PumaPro</span>
            </h1>
            <p className="text-lg text-gray-600">
              Get in touch with us to learn more about our all-in-one
              operational platform
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
export default Page;