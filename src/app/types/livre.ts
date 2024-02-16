import { Guid } from "guid-typescript";

export interface livre {
    Id:Guid;
    Titre:string; 
    Description:string;
    Editeur:string;
    Auteur:string;
    AnneeEdition:number;
}