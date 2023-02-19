import { gql } from "@apollo/client";

type Company = {
  name: string;
  ceo: string;
  cto: string;
};

export type Data = {
    company : Company
}

export const GetData = gql`
  {
    company {
      ceo
      cto
      name
    }
  }
`;
