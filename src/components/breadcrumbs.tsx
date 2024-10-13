import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Slash} from "lucide-react";
import {Container} from "@/components/container";

const Breadcrumbs = ({title}: { title?: string }) => {
    if (!title) return false;

    return (
        <Container className="hidden sm:block py-6 pb-0 md:py-6 md:pb-0 xl:py-6 xl:pb-0">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator><Slash/></BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </Container>
    );
};

export default Breadcrumbs;
