import React from 'react';
import Link from 'next/link';
import DeveloperLogo from '@/components/DeveloperLogo';
import { BrandLogo, SocialLinks } from '@/components';
import { settings } from '@/config/settings';

const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden py-8 lg:py-16 mt-auto">
      <div className="container">

        <div className="flex flex-wrap -mx-4">

          <div className="hidden lg:block w-full md:w-1/4 px-4">
            <div className="space-y-4 lg:space-y-6">
              <Link href="/" className="flex items-center">
                <BrandLogo label={settings.siteTitle} />
                <span className="sr-only">{settings.siteTitle}</span>
              </Link>

              <div className="w-full max-w-60 space-y-4">
                <p className="text-sm text-primary-foreground/85 leading-6">{settings.siteDescription}</p>
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4 px-4">
            <div className="flex flex-wrap lg:justify-end -mx-4 lg:-mx-8 xl:-mx-12">

              <div className="w-full md:w-1/3 lg:w-auto px-4 lg:px-8 xl:px-12 mb-4 md:mb-0">
                <div className="h-full border-b md:border-b-0 border-primary-foreground/20 pb-4 md:pb-0 lg:pl-8 xl:pl-12">
                  <h5 className="font-semibold text-md mb-1">
                    Information
                  </h5>
                  <ul className="list-none flex flex-col gap-y-2 mt-4">
                    <li>
                      <Link
                        href="/products"
                        className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                      >
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto px-4 lg:px-8 xl:px-12 mb-4 md:mb-0">
                <div className="h-full border-b md:border-b-0 lg:border-l border-primary-foreground/20 pb-4 md:pb-0 lg:pl-8 xl:pl-12">
                  <h5 className="font-semibold text-md mb-1">
                    Head Office
                  </h5>
                  <div className="mt-4">
                    <p>
                      Valentin, Street Road 24,<br />
                      New York, USA – 67452
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto px-4 lg:px-8 xl:px-12 mb-4 md:mb-0">
                <div className="h-full border-b md:border-b-0 lg:border-l border-primary-foreground/20 pb-4 md:pb-0 lg:pl-8 xl:pl-12">
                  <h5 className="font-semibold text-md mb-1">
                    Contact Us
                  </h5>
                  <div className="mt-4">
                    <p><span className="font-semibold">Tel:</span> +1-212-456-7890</p>
                    <p><span className="font-semibold">Email:</span> Info@aralsf.com</p>
                  </div>
                </div>
              </div>
              <div className="block md:hidden w-full md:border-l md:border-primary-foreground/20 px-4 lg:px-8 xl:px-12 mb-4 md:mb-0">
                <div className="space-y-5">
                  <h5 className="font-semibold text-md mb-1">
                    Follow us
                  </h5>
                  <div className="mt-4">
                    <SocialLinks />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
        <hr className="my-4 border-primary-foreground/20 sm:mx-auto dark:border-primary-foreground/20 lg:my-10" />
        <div className="sm:flex sm:items-center sm:justify-between mt-4">
          <div className="space-y-1">
            <p className="text-sm sm:text-center sm:flex sm:items-center sm:gap-3 dark:text-primary-foreground">
              ©2001 – 2024
              <span className="block h-3 border-r border-primary-foreground"></span>
              ARAL Inc. All rights reserved.
            </p>
            <a
              href="https://code-craft.am/"
              target="_blank"
              className="text-sm font-semibold flex items-center gap-x-1 w-fit"
            >
              <DeveloperLogo width={16} height={16} className="text-[#a8cf45]" />
              <span>by CodeCraft</span>
            </a>
          </div>
        </div>

      </div>


      <div className="hidden container p-4 py-10 lg:p-8 lg:py-16">
        <div className="w-full grid grid-cols-4 gap-6 lg:gap-12">

          <div className="hidden lg:block col-span-1 mb-6 md:mb-0 space-y-4 lg:space-y-6">
            <Link href="/" className="flex items-center">
              <BrandLogo label={settings.siteTitle} />
              <span className="sr-only">{settings.siteTitle}</span>
            </Link>
            <div className="w-full max-w-60 space-y-4">
              <p className="text-sm text-primary-foreground/85 leading-6">
                {settings.siteDescription}
              </p>
              <SocialLinks />
            </div>
          </div>

          <div className="col-span-4 lg:col-span-3 flex flex-col md:flex-row lg:justify-end gap-6 lg:gap-0 md:-mx-6 lg:-mx-12">
            <div
              className="flex flex-col items-start w-full max-w-3/12 lg:w-auto lg:items-end border-b md:border-none border-primary-foreground/20 pb-6 md:pb-0 md:px-6 lg:px-12">
              <div className="space-y-5">
                <h5 className="font-semibold text-md">
                  Information
                </h5>
                <ul className="list-none flex flex-col gap-y-2">
                  <li>
                    <Link
                      href="/products"
                      className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="font-medium text-primary-foreground/80 hover:text-primary-foreground transition-all duration-150"
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="flex flex-col items-start w-full max-w-3/12 lg:w-auto lg:items-end border-b md:border-b-0 md:border-l border-primary-foreground/20 pb-6 md:pb-0 md:px-6 lg:px-12">
              <div className="space-y-5">
                <h5 className="font-semibold text-md">
                  Head Office
                </h5>
                <p>
                  Valentin, Street Road 24,<br />
                  New York, USA – 67452
                </p>
              </div>
            </div>
            <div
              className="flex flex-col items-start w-full max-w-3/12 lg:w-auto lg:items-end border-b md:border-b-0 md:border-l border-primary-foreground/20 pb-6 md:pb-0 md:px-6 lg:px-12">
              <div className="space-y-5">
                <h5 className="w-full block font-semibold text-md">
                  Contact Us
                </h5>
                <div className="space-y-1">
                  <p><span className="font-semibold">Tel:</span> +1-212-456-7890</p>
                  <p><span className="font-semibold">Email:</span> Info@aralsf.com</p>
                </div>
              </div>
            </div>
            <div className="md:hidden flex flex-col items-start lg:items-end md:border-l md:border-primary-foreground/20 md:pl-6 lg:px-10">
              <div className="space-y-5">
                <h5 className="w-full block font-semibold text-md">
                  Follow us
                </h5>
                <div className="space-y-1">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

        </div>

        <hr className="my-6 border-primary-foreground/20 sm:mx-auto dark:border-primary-foreground/20 lg:my-10" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm sm:text-center sm:flex sm:items-center sm:gap-3 dark:text-primary-foreground">
              ©2001 – 2024
              <span className="block h-3 border-r border-primary-foreground"></span>
              ARAL Inc. All rights reserved.
            </p>
            <a
              href="https://code-craft.am/"
              target="_blank"
              className="text-sm font-semibold flex items-center gap-x-1 w-fit"
            >
              <DeveloperLogo width={16} height={16} className="text-[#a8cf45]" />
              <span>by CodeCraft</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
