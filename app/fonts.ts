import { Roboto_Condensed, Radio_Canada, Noto_Kufi_Arabic } from 'next/font/google';

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

export const radioCanada = Radio_Canada({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-radio-canada',
});

export const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-kufi-arabic',
});
