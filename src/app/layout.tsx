import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-family-main",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const headingFont = Playfair_Display({
  variable: "--font-family-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica, CA",
  description:
    "Licensed clinical psychologist offering evidence-based therapy for anxiety, trauma, PTSD, and burnout. In-person sessions in Santa Monica and secure telehealth across California. CBT, EMDR & mindfulness-based care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
