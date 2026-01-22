export type ISelectCompanyItem = {
  companyName: string;
  neighborhood: string;
};

export interface ISelectCompanyProps {
  items: ISelectCompanyItem[];
}
