export interface Ville{
    nom:string;
    pays:string;
    anneeFondation:number;
    population:number;
}

export interface Pays{
    nom: string;
    capitale: Ville;
    villesDuPays: Array<Ville>;
}

export function villeValide(v:Ville):boolean{

    if(v.anneeFondation<-2000 && v.anneeFondation<2018 && v.population > 500){
        return true;
    }
    else{
        return false;
    }
}

export function definirUneCapitale(p:Pays,v:Ville){
    p.capitale= {nom: v.nom,pays: p.nom,anneeFondation: v.anneeFondation,
        population:v.population};
}

export function ajouterVilleAuPays(p:Pays,v:Ville){
    if(villeValide(v)){
        p.villesDuPays.push(v);
    }else{
        console.error(v+" n'est pas une ville valide");
    }
}