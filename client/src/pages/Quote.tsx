import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, FileText, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    emirate: "",
    propertyType: "",
    productCategory: "",
    specificProduct: "",
    waterSource: "",
    numberOfPeople: "",
    installationDate: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      "Quote request submitted successfully! Our team will contact you within 24 hours."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      emirate: "",
      propertyType: "",
      productCategory: "",
      specificProduct: "",
      waterSource: "",
      numberOfPeople: "",
      installationDate: "",
      additionalInfo: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Free Quote</h1>
            <p className="text-lg text-muted-foreground">
              Get a customized quote for your water filtration needs. Fill out the form below
              and our experts will get back to you within 24 hours with the best solution and
              pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971 XX XXX XXXX"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emirate">Emirate *</Label>
                          <Select
                            value={formData.emirate}
                            onValueChange={(value) =>
                              setFormData({ ...formData, emirate: value })
                            }
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your emirate" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dubai">Dubai</SelectItem>
                              <SelectItem value="sharjah">Sharjah</SelectItem>
                              <SelectItem value="ajman">Ajman</SelectItem>
                              <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                              <SelectItem value="rak">Ras Al Khaimah</SelectItem>
                              <SelectItem value="fujairah">Fujairah</SelectItem>
                              <SelectItem value="uaq">Umm Al Quwain</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Property & Requirements */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Property & Requirements</h2>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Property Type *</Label>
                          <RadioGroup
                            value={formData.propertyType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, propertyType: value })
                            }
                            required
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="residential" id="residential" />
                              <Label htmlFor="residential" className="font-normal">
                                Residential (Home/Apartment)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="commercial" id="commercial" />
                              <Label htmlFor="commercial" className="font-normal">
                                Commercial (Office/Restaurant)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="industrial" id="industrial" />
                              <Label htmlFor="industrial" className="font-normal">
                                Industrial (Factory/Large Scale)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="productCategory">Product Category *</Label>
                            <Select
                              value={formData.productCategory}
                              onValueChange={(value) =>
                                setFormData({ ...formData, productCategory: value })
                              }
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="residential-ro">
                                  Residential RO System
                                </SelectItem>
                                <SelectItem value="commercial-ro">
                                  Commercial RO System
                                </SelectItem>
                                <SelectItem value="industrial-ro">
                                  Industrial RO System
                                </SelectItem>
                                <SelectItem value="water-softener">Water Softener</SelectItem>
                                <SelectItem value="whole-house">
                                  Whole House System
                                </SelectItem>
                                <SelectItem value="not-sure">Not Sure</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="numberOfPeople">
                              Number of People/Users *
                            </Label>
                            <Input
                              id="numberOfPeople"
                              name="numberOfPeople"
                              type="number"
                              value={formData.numberOfPeople}
                              onChange={handleChange}
                              placeholder="e.g., 5"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="waterSource">Current Water Source</Label>
                            <Select
                              value={formData.waterSource}
                              onValueChange={(value) =>
                                setFormData({ ...formData, waterSource: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select water source" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="municipal">Municipal/DEWA</SelectItem>
                                <SelectItem value="tanker">Water Tanker</SelectItem>
                                <SelectItem value="well">Well Water</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="installationDate">
                              Preferred Installation Date
                            </Label>
                            <Input
                              id="installationDate"
                              name="installationDate"
                              type="date"
                              value={formData.installationDate}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specificProduct">
                            Specific Product Interest (Optional)
                          </Label>
                          <Input
                            id="specificProduct"
                            name="specificProduct"
                            value={formData.specificProduct}
                            onChange={handleChange}
                            placeholder="e.g., KENT Excel Plus, AQUA Care RO System"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo">
                            Additional Information or Requirements
                          </Label>
                          <Textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder="Tell us about any specific requirements, concerns, or questions..."
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our terms and privacy policy. We'll
                      contact you within 24 hours with a detailed quote.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What Happens Next */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: FileText,
                        title: "Quote Review",
                        description: "We review your requirements carefully",
                      },
                      {
                        icon: Phone,
                        title: "Expert Contact",
                        description: "Our team calls you within 24 hours",
                      },
                      {
                        icon: CheckCircle,
                        title: "Customized Solution",
                        description: "Receive detailed quote and recommendations",
                      },
                      {
                        icon: Clock,
                        title: "Quick Installation",
                        description: "Schedule installation at your convenience",
                      },
                    ].map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{step.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {step.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Need Immediate Assistance?</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+97142675814"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Call Us</div>
                        <div className="text-xs text-muted-foreground">
                          (971) 4 267 5814
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/971501124683"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-[#25D366]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <div>
                        <div className="font-medium text-sm">WhatsApp</div>
                        <div className="text-xs text-muted-foreground">
                          Quick Response
                        </div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Free Services */}
              <Card className="bg-accent/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Included Free</h3>
                  <ul className="space-y-2">
                    {[
                      "Water quality testing",
                      "Expert consultation",
                      "Professional installation",
                      "System setup & training",
                      "1-year warranty",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
