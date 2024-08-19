import React from 'react';import {Label} from "@/components/ui/label";import {Input} from "@/components/ui/input"import {Button} from "@/components/ui/button";const ContactUs = () => {    return (        <>            <section>                <iframe                    width={"100%"}                    height={550}                    style={{border: '0'}}                    allowFullScreen={true}                    loading="lazy"                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11503.238778685225!2d-73.46864243380251!3d43.88049439486082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccaa997ec2b3f99%3A0xf79ee869c7edb001!2sStreet%20Road%2C%20NY%2012883%2C%20USA!5e0!3m2!1sen!2sam!4v1723408614548!5m2!1sen!2sam"                    referrerPolicy="no-referrer-when-downgrade"                ></iframe>            </section>            <main className="container py-24">                <div className="grid grid-cols-2 gap-4">                    <div className="relative space-y-4 lg:space-y-16">                        <div className="relative pr-0 lg:pr-16">                            <h2 className="w-fit scroll-m-20 pb-2 mb-4 lg:mb-6 text-4xl font-bold after:block after:w-2/5 after:mt-2 after:border-b after:border-1 after:border-black">                                Get in Touch with Us                            </h2>                            <p>                                At Aral Distributions, we’re here to assist you! With extensive experience and representation of leading                                alcohol brands, including Nemiroff, our team is dedicated to providing exceptional service.                            </p>                        </div>                        <div className="space-y-4 lg:space-y-6">                            <div>                                <h3 className="scroll-m-20 text-xl font-bold tracking-tight pb-1">Head Office:</h3>                                <p>123 Street Road, NY 12883, USA</p>                            </div>                            <div>                                <h3 className="scroll-m-20 text-xl font-bold tracking-tight pb-1">Contact Information:</h3>                                <p><b>Phone</b>: 123-456-7890</p>                                <p><b>Email</b>: Info@aralsf.com</p>                            </div>                            <div>                                <h3 className="scroll-m-20 text-xl font-bold tracking-tight pb-1">Business Hours:</h3>                                <p><b>Monday - Friday</b>: 9am - 5pm</p>                                <p><b>Saturday</b>: 10am - 2pm</p>                                <p><b>Sunday</b>: Closed</p>                            </div>                        </div>                    </div>                    <div className="relative">                        <div className="bg-primary text-primary-foreground rounded-lg p-10">                            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight pb-1">Send us a message</h3>                            <div>                                <form className="space-y-4">                                    <div>                                        <Input                                            type="text"                                            id="name"                                            name="name"                                            placeholder="Your Name"                                            className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                        />                                        <Label htmlFor="name" className="sr-only">Your Name:</Label>                                    </div>                                    <div>                                        <Input                                            type="email"                                            id="email"                                            name="email"                                            placeholder="Your Email"                                            className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                        />                                        <Label htmlFor="email" className="sr-only">Email:</Label>                                    </div>                                    <div>                                        <Input                                            type="tel"                                            id="tel"                                            name="tel"                                            placeholder="Phone Numebr"                                            className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                        />                                        <Label htmlFor="tel" className="sr-only">Contact Number:</Label>                                    </div>                                    <div>                                        <Label htmlFor="message">Message:</Label>                                        <Input                                            id="message"                                            name="message"                                            className="bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"                                        />                                    </div>                                    <Button type="submit" className="w-full h-14 bg-yellow hover:bg-yellow hover:opacity-80 text-primary text-md px-4 rounded-full transition-all duration-150 uppercase">Send Message</Button>                                </form>                            </div>                        </div>                    </div>                </div>            </main>        </>    );};export default ContactUs;