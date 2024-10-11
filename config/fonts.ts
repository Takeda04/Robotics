import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Tektur as FontTektur,
} from "next/font/google";

// Import "Inter" as the sans-serif font
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Import "Fira Code" as the monospaced font
export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Import "Tektur" as another font (using correct next/font/google method)
export const fontTektur = FontTektur({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Define the available font weights
  variable: "--font-tektur",
});
