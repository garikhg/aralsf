import React from 'react';import {Search} from "lucide-react";import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";const SiteSearch = () => {    return (        <Dialog>            <DialogTrigger                className="h-14 w-14 p-4 text-primary-foreground hover:text-primary-foreground/80 transition-all duration-150"            >                <Search size={24}/>                <span className="sr-only">Search</span>            </DialogTrigger>            <DialogContent className="max-w-7xl top-[20%]">            </DialogContent>        </Dialog>    );};export default SiteSearch;