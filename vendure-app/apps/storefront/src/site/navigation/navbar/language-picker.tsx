'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/platform/i18n/navigation';
import {routing, localeNames} from '@/platform/i18n/routing';
import {Globe} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguagePicker() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(pathname, {locale: newLocale});
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button data-test={`navbar-language-button-${localeNames[locale as keyof typeof localeNames] ?? locale.toUpperCase()}`} variant="ghost" size="sm" className="gap-1.5" />}>
                <Globe className="size-4" />
                <span data-test={`navbar-language-label-${localeNames[locale as keyof typeof localeNames] ?? locale.toUpperCase()}`}>
                    {localeNames[locale as keyof typeof localeNames] ?? locale.toUpperCase()}
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent data-test="navbar-language-options" align="end">
                {routing.locales.map((loc) => (
                    <DropdownMenuItem  data-test={`navbar-${loc}-option`}
                        key={loc}
                        onClick={() => handleLocaleChange(loc)}
                    >
                        <span data-test={`navbar-${loc}-option-label`}>{localeNames[loc] ?? loc.toUpperCase()}</span>
                        {locale === loc && <span data-test={`navbar-${loc}-option-selected`} className="ml-auto text-xs">✓</span>}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
