import { ImageSourcePropType } from "react-native";
export type ScreenSheetProps = {
  children: React.ReactNode;
  AvatarImage?: ImageSourcePropType | undefined;
  FooterComponents?: React.ReactNode;
  icon?: React.ReactNode;
};
