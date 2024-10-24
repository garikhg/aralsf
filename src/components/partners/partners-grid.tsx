import React from 'react';
import {Container} from "@/components/container";
import Image from "next/image";

const PartnersGrid = ({data}: { data?: any }) => {

    if (!data) return false;

    return (
        <div className="bg-gray-100">
            <Container className="py-16 xl:py-24">
                <h2 className="scroll-m-20 font-belleza text-3xl text-center tracking-wide uppercase lg:text-4xl mb-6">
                    Our Clients
                </h2>
                <div className="flex flex-wrap justify-center items-center -mx-4 lg:-mx-8">
                    {data?.map( (partner: any) => (
                        <div id={partner?.id} key={partner?.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4">
                            <div className="w-full flex justify-center items-center p-4 lg:py-8">
                                {partner?.image?.url && (
                                    <Image
                                        src={partner.image.url}
                                        alt={partner.name}
                                        width={partner.image.width}
                                        height={partner.image.height}
                                        className="max-w-full"
                                        priority={true}
                                    />
                                )}
                                <span className="sr-only">{partner.name}</span>
                            </div>
                        </div>
                    ) )}
                </div>
            </Container>
        </div>
    );
};

export default PartnersGrid;
