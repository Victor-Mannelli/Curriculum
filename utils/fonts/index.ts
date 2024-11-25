import localFont from "next/font/local";

const alkalami = localFont({
  src: "../../public/fonts/Alkalami-Regular.woff",
  variable: "--font-alkalami-regular",
  weight: "100 900",
});
const roboto_regular = localFont({
  src: "../../public/fonts/Roboto-Regular.woff",
  variable: "--font-roboto-regular",
  weight: "400",
});
const roboto_bold = localFont({
  src: "../../public/fonts/Roboto-Bold.woff",
  variable: "--font-roboto-bold",
  weight: "700",
});

export {
  alkalami,
  roboto_regular,
  roboto_bold,
}