import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/authContext";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
