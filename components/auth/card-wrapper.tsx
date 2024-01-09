"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "./header";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    showSocial: boolean;
}

const CardWrapper = ({
    children,
    headerLabel
}: CardWrapperProps) => {

    return (
        <Card>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            
        </Card>
    );
}

export default CardWrapper;