import React from 'react';import {Search} from "lucide-react";import {Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogClose, DialogDescription} from "@/components/ui/dialog";import {Input} from "@/components/ui/input";const SiteSearch = () => {    return (        <Dialog>            <DialogTrigger                className="h-14 w-14 p-4 text-primary-foreground hover:text-primary-foreground/80 transition-all duration-150"            >                <Search size={24}/>                <span className="sr-only">Search</span>            </DialogTrigger>            <DialogContent className="max-w-7xl top-[20%]">                <DialogHeader>                    <DialogTitle>Search</DialogTitle>                    <DialogClose/>                </DialogHeader>                <Input                    type="search"                    placeholder="Enter your search query..."                    className="w-full px-0 py-4 rounded-none border-t-0 border-x-0 border-b-1 border-b-gray-300 focus-visible:border-b-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0"                />            </DialogContent>        </Dialog>    );};export default SiteSearch;