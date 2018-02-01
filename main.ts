import * as V from "./Villes"
import { ajouterVilleAuPays } from "./Villes";

//Creation d'une ville
let paris:V.Ville={nom: 'Paris',pays: 'France', anneeFondation: -100, population:2000000};
let bejaia:V.Ville={nom: 'Bejaia',pays: 'Algerie', anneeFondation: -25, population:200000};


let villesDeFrance=Array();
let france:V.Pays={nom: 'France',capitale:paris,villesDuPays:villesDeFrance};

ajouterVilleAuPays(france,paris);