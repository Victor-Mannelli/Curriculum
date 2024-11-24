import localFont from "next/font/local";

export const alkalami = localFont({
  src: "../../app/public/fonts/Alkalami-Regular.woff",
  variable: "--font-alkalami-regular",
  weight: "100 900",
});
export const roboto_regular = localFont({
  src: "../../app/public/fonts/Roboto-Regular.woff",
  variable: "--font-roboto-regular",
  weight: "400",
});
export const roboto_bold = localFont({
  src: "../../app/public/fonts/Roboto-Bold.woff",
  variable: "--font-roboto-bold",
  weight: "700",
});