import { OnboardingSlideType } from "../@types/Onboard-slide";
import SlideOne from "../assets/graphics/slide_one.png";
import SlideTwo from "../assets/graphics/slide_two.png";
import SlideThree from "../assets/graphics/slide_three.png";
export const OnboardingSlide: OnboardingSlideType[] = [
  {
    image: SlideOne,
    title: "Prstige and Absloute Security",
    description:
      "Licensed by all banks in the world & secured with multi-tier PCI-DSS international standards",
    slide_index: 0,
  },
  {
    image: SlideTwo,
    title: "Leading Payment Application",
    description: "Consumer Loan Payment, pay bills and many other services",
    slide_index: 1,
  },
  {
    image: SlideThree,
    title: "Quick And Easy Money Transfer",
    description:
      "Send and receive money quickly just need a phone number or simple QR code",
    slide_index: 2,
  },
];
