"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "./header";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    showSocial: boolean;
    backButtonLabel: string;
    backButtonHref: string;
}

const CardWrapper = ({
    children,
    headerLabel,
    showSocial,
    backButtonLabel,
    backButtonHref
}: CardWrapperProps) => {

    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (<CardFooter>
                <Social />
            </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    );
}

export default CardWrapper;