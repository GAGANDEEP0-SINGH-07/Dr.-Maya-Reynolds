import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lilac Template",
  description: "Homepage clone project",
};

const typekitUrl =
  "https://use.typekit.net/ik/MKo0s4tW_aprvHMbtJgoMo7uLcSPlojcLhb_AUHVjk9fen3gfFHN4UJLFRbh52jhWDjuZ2I3jDZyZeFcjA48wQ6U5AmqFe93FUGMJygcScmTZhyXOWs8pYblSY4zJ6Z1dagGZWJ7fbKj-sMMeMb6MKG4f4TTIMMjgkMfH6qJcAqbMg65JMJ7fbKd-sMMegI6MKGHfO1mMyMgeMb6MKGHfOzmMyMgeM96MKGHfOamMyMgeMS6MKGHfOnmMyMgeMt6MKGHfODmMyMgeMv6MKGHfO_mMyMgegI6MTMgN5Q5n6j.js";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.squarespace-cdn.com" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
      </head>
      <body>
        <Script id="font-loading-class" strategy="beforeInteractive">
          {`document.documentElement.classList.add('wf-loading');`}
        </Script>
        <Script id="typekit-loader" strategy="afterInteractive">
          {`(function () {
            var root = document.documentElement;
            var script = document.createElement('script');
            script.src = '${typekitUrl}';
            script.async = true;
            script.onload = function () {
              try { Typekit.load(); } catch (e) {}
              root.classList.remove('wf-loading');
            };
            script.onerror = function () {
              root.classList.remove('wf-loading');
            };
            document.head.appendChild(script);
          }());`}
        </Script>
        {children}
      </body>
    </html>
  );
}
