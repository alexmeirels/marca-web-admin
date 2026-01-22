type ILinkItem = {
  to: string;
  label: string;
  icon: React.ReactNode;
  match: (pathname: string) => boolean;
};

export interface ISectionItem {
  title: string;
  links: ILinkItem[];
}