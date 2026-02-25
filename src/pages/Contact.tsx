import { motion } from "framer-motion";
import { ArrowLeft, Globe, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Join our community",
    desc: "Connect with skincare enthusiasts and get expert advice from our team.",
    link: { name: "Join our Discord", href: "#" },
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    title: "Follow us on Twitter",
    desc: "Stay updated with the latest skincare science and product launches.",
    link: { name: "Send us DMs", href: "#" },
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-primary">
      {/* Nav */}
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground/70 transition-colors hover:text-primary-foreground">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back</span>
        </Link>
      </nav>

      <div className="mx-auto max-w-[1200px] px-6 pb-24 md:px-8">
        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="gap-12 lg:flex"
        >
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Let's connect
            </h1>
            <p className="mt-3 text-primary-foreground/60">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>
          <ul className="mt-10 flex flex-col gap-6 md:flex-row lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 border-t border-primary-foreground/10 py-6 md:border-t-0 lg:border-l lg:border-primary-foreground/10 lg:pl-12"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70">
                  {item.icon}
                </div>
                <h4 className="text-lg font-medium text-primary-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-primary-foreground/50">{item.desc}</p>
                <a
                  href={item.link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  {item.link.name}
                  <Send className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="mx-auto max-w-lg space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="text-primary-foreground/50">
              We'd love to hear from you! Please fill out the form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-lg space-y-5">
            <div className="flex flex-col gap-5 sm:flex-row [&>*]:w-full">
              <div>
                <label className="text-sm font-medium text-primary-foreground/80">First name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-primary-foreground/15 bg-transparent px-3 py-2.5 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/30 focus:border-accent"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary-foreground/80">Last name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="mt-2 w-full rounded-lg border border-primary-foreground/15 bg-transparent px-3 py-2.5 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/30 focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-primary-foreground/80">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full rounded-lg border border-primary-foreground/15 bg-transparent px-3 py-2.5 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/30 focus:border-accent"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-primary-foreground/80">Phone number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-000"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 w-full rounded-lg border border-primary-foreground/15 bg-transparent px-3 py-2.5 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/30 focus:border-accent"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-primary-foreground/80">Message</label>
              <textarea
                required
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 h-36 w-full resize-none rounded-lg border border-primary-foreground/15 bg-transparent px-3 py-2.5 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/30 focus:border-accent"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg bg-accent py-5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
            >
              Submit
            </Button>
          </form>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;
