import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

interface HeaderProps {
    label: string;
}

export const Header = ({
    label
}: HeaderProps) => {
    return (
        <div className='space-y-6 text-center'>
            <h1 className={cn(
                'text-6xl font-semibold',
                font.className
            )}>
                🔐Auth
            </h1>
            <p className='text-sm text-muted-foreground'>
                {label}
            </p>
        </div>
    )
}
