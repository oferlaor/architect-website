import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Navigation menu items data
const navItems = [
  { label: "MAIN", active: true },
  { label: "GALLERY", active: false },
  { label: "PROJECTS", active: false },
  { label: "CERTIFICATIONS", active: false },
  { label: "CONTACTS", active: false },
];

// Gallery images data
const galleryImages = [
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-23.svg",
    alt: "Gallery image 1",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-24.svg",
    alt: "Gallery image 2",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-25.svg",
    alt: "Gallery image 3",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-26.svg",
    alt: "Gallery image 4",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-27.svg",
    alt: "Gallery image 5",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-28.svg",
    alt: "Gallery image 6",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-29.svg",
    alt: "Gallery image 7",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-30.svg",
    alt: "Gallery image 8",
  },
  {
    src: "https://c.animaapp.com/m87fdylhvygJIT/img/rectangle-31.svg",
    alt: "Gallery image 9",
  },
];

// Footer links data
const footerLinks = [
  { label: "Main", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Certifications", href: "#" },
  { label: "Contacts", href: "#" },
];

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <header className="w-full h-[102px] flex items-center justify-between px-[135px]">
          <div className="h-11 w-[70px]">
            <div className="relative h-11">
              <img
                className="w-[69px] h-[42px]"
                alt="Logo"
                src="https://c.animaapp.com/m87fdylhvygJIT/img/group-8.svg"
              />
              <img
                className="w-[69px] h-3 absolute bottom-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/m87fdylhvygJIT/img/vector.png"
              />
            </div>
          </div>

          <nav className="flex space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`font-normal text-gray-1 text-xs tracking-[2.40px] leading-3 [font-family:'Roboto',Helvetica] whitespace-nowrap ${item.active ? "relative" : ""}`}
                >
                  {item.label}
                </div>
                {item.active && (
                  <>
                    <Separator className="absolute w-[68px] h-px -bottom-2 -left-4 bg-[#333333]" />
                    <Separator className="absolute w-[68px] h-px -top-2 -left-4 bg-[#333333]" />
                  </>
                )}
              </div>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <main className="px-[135px] pt-[63px] pb-[120px]">
          {/* Title Section */}
          <div className="mb-[94px]">
            <h2 className="[font-family:'Roboto',Helvetica] font-light text-[#bdbdbd] text-[64px] leading-[64px]">
              Photo
            </h2>
            <h1 className="font-bold text-[#333333] text-[64px] leading-[64px] [font-family:'Roboto',Helvetica]">
              Gallery
            </h1>
          </div>

          <Separator className="mb-8 bg-gray-6" />

          {/* Gallery Grid */}
          <div className="grid grid-cols-5 gap-[30px] mb-[60px]">
            <Card className="w-[210px] h-[260px] bg-[#c4c4c4] rounded-none shadow-none" />

            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="w-[210px] h-[260px] p-0 rounded-none shadow-none overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center">
            <div className="flex items-center mr-[116px]">
              <span className="[font-family:'Roboto',Helvetica] font-normal text-2xl text-[#333333] leading-6">
                01
              </span>
              <Separator
                className="w-8 h-px mx-4 bg-gray-4"
                orientation="horizontal"
              />
              <span className="[font-family:'Roboto',Helvetica] font-normal text-2xl text-gray-4 leading-6">
                05
              </span>
            </div>

            <div className="flex">
              <Button
                variant="outline"
                size="icon"
                className="w-[53px] h-[53px] rounded-none border-[#f2f2f2] bg-white mr-[23px]"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-[53px] h-[53px] rounded-none border-[#f2f2f2] bg-[#f8f8f8]"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full h-[417px] bg-[#2c2c2c] text-white">
          <div className="max-w-[1440px] mx-auto px-[116px] pt-[58px]">
            <div className="flex justify-between">
              {/* Logo */}
              <div>
                <img
                  className="w-[145px] h-[94px] object-cover"
                  alt="Logo"
                  src="https://c.animaapp.com/m87fdylhvygJIT/img/group-11-1.png"
                />
              </div>

              {/* Information */}
              <div className="flex space-x-[160px]">
                <div>
                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-base mb-[45px]">
                    Information
                  </h3>
                  <ul className="space-y-10">
                    {footerLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="[font-family:'Roboto',Helvetica] font-medium text-white text-sm tracking-[0.42px] leading-6"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-base mb-[45px]">
                    Contacts
                  </h3>

                  <div className="flex items-start mb-[60px]">
                    <MapPinIcon className="w-4 h-4 mt-1 mr-[30px]" />
                    <p className="[font-family:'Roboto',Helvetica] font-medium text-white text-sm tracking-[0.42px] leading-6">
                      1234 Sample Street
                      <br />
                      Austin Texas 78704
                    </p>
                  </div>

                  <div className="flex items-center mb-[36px]">
                    <PhoneIcon className="w-4 h-4 mr-[30px]" />
                    <p className="[font-family:'Roboto',Helvetica] font-medium text-white text-sm tracking-[0.42px] leading-6">
                      512.333.2222
                    </p>
                  </div>

                  <div className="flex items-center">
                    <MailIcon className="w-4 h-4 mr-[30px]" />
                    <p className="[font-family:'Roboto',Helvetica] font-medium text-white text-sm tracking-[0.42px] leading-6">
                      sampleemail@gmail.com
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-white text-base mb-[43px]">
                    Social Media
                  </h3>
                  <div className="flex space-x-12">
                    <FacebookIcon className="w-2.5 h-[19px]" />
                    <TwitterIcon className="w-[22px] h-[17px]" />
                    <InstagramIcon className="w-5 h-5" />
                    <img
                      className="w-3.5 h-[19px]"
                      alt="Pinterest"
                      src="https://c.animaapp.com/m87fdylhvygJIT/img/pininterest.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-[70px] bg-white/50" />

            <div className="flex justify-center">
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#c8c8c880] text-xs tracking-[0] leading-[22px]">
                © 2019 All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
