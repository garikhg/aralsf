'use client';

import React from 'react';
import {Heading5} from "@/components/ui/heading";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

const ContactForms = () => {
    return (
        <div className="bg-primary text-primary-foreground rounded-lg p-10">
            <Heading5 className="font-semibold mb-4">
                Send us a message
            </Heading5>
            <form className="space-y-4">
                <div>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Label htmlFor="name" className="sr-only">Your Name:</Label>
                </div>
                <div>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Label htmlFor="email" className="sr-only">Email:</Label>
                </div>
                <div>
                    <Input
                        type="tel"
                        id="tel"
                        name="tel"
                        placeholder="Phone Number"
                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Label htmlFor="tel" className="sr-only">Contact Number:</Label>
                </div>
                <div>
                    <Input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="h-14 bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Label htmlFor="subject" className="sr-only">Subject:</Label>
                </div>
                <div>
                    <Label htmlFor="message">Message:</Label>
                    <Input
                        id="message"
                        name="message"
                        className="bg-transparent rounded-none px-0 placeholder:text-white/70 border-t-0 border-r-0 border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>

                <Button type="submit"
                        className="w-full h-14 bg-yellow hover:bg-yellow hover:opacity-80 text-primary text-md px-4 rounded-full transition-all duration-150 uppercase mt-10">Send
                    Message</Button>
            </form>
        </div>
    );
};

export default ContactForms;
