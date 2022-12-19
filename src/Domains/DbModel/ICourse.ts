import { IAuthor } from "./IAuthor";

export interface ICourse {
  Id: number;
  Name: string;
  Description: string; 
  FullPrice: number;
  AuthorId: number;
  Author: IAuthor;
}

