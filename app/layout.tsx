import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Script from 'next/script';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Persevere",
    description: "...",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                {/* Google Tag Manager (GTM) */}
                <Script id="gtm-script" strategy="afterInteractive">
                    {
                        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-W235JRLK');`}
                </Script>

                {/* Meta Pixel 1 */}
                <Script id="fb-pixel-1" strategy="afterInteractive">
                    {
                        `!function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '815762346869962');
                        fbq('track', 'PageView');`}
                </Script>
                <noscript>
                    <img height="1" width="1" style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=815762346869962&ev=PageView&noscript=1" alt="facebook-pixel" />
                </noscript>

                {/* Meta Pixel 2 - ISRAEL */}
                <Script id="fb-pixel-2" strategy="afterInteractive">
                    {
                        `!function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1424422082204815');
                        fbq('track', 'PageView');`}
                </Script>
                <noscript>
                    <img height="1" width="1" style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1424422082204815&ev=PageView&noscript=1" alt="facebook-pixel-israel" />
                </noscript>

                {/* Google Tag (gtag.js) - AW & G-ID */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=AW-10969351056" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {
                        `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-10969351056');
                        gtag('config', 'G-GKQYML3C2K');`}
                </Script>
                {children}
            </body>
        </html>
    );
}
