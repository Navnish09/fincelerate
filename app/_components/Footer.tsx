import {
  TypographyLarge,
  TypographySmall
} from "@/components/ui/typography";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <div className="mt-10">
      <footer>
        <div className="container mx-auto px-6 md:px-4 py-12">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex flex-col gap-5">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="mr-2">
                    <Image
                      src={"/logo.svg"}
                      width={40}
                      height={40}
                      alt="fincelerate-logo"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">incelerate</h2>
                </div>
                <p className="text-sm md:text-base">
                  Your journey, our guidance.
                </p>
                <p className="mt-2">
                  <span className="text-amber-500 font-medium">Invest</span>{" "}
                  with{" "}
                  <span className="text-amber-500 font-medium">
                    confidence.
                  </span>
                </p>
              </div>

              <div className="flex space-x-4 mb-8">
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Youtube size={24} />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Quick Links */}
              <div className="flex flex-col gap-3">
                <TypographyLarge>Quick Links</TypographyLarge>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Link 1</TypographySmall>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Link 2</TypographySmall>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Link 3</TypographySmall>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Link 4</TypographySmall>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Why Fincelerate? */}
              <div className="flex flex-col gap-3">
                <TypographyLarge>Why Fincelerate?</TypographyLarge>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>About Us</TypographySmall>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Meet Our Team</TypographySmall>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Link 3</TypographySmall>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Link 4</TypographySmall>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-3">
                <TypographyLarge>Legal</TypographyLarge>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Privacy Policy</TypographySmall>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <TypographySmall>Terms of Service</TypographySmall>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-foreground/10"></div>

          {/* Contact and copyright */}
          <div className="flex flex-col justify-between items-center my-5">
            <div className="flex flex-row items-center gap-10">
              <div className="flex items-center gap-2">
                <Phone size={16} className="" />
                <span className="text-sm">+91-9871248691</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-sm">mail@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="border-t border-foreground/10 w-full"></div>
          <div className="text-sm text-gray-400 text-center mt-5">
            © 2025 Fincelerate Pvt Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
};
