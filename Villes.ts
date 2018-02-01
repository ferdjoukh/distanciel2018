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

    if(v.anneeFondation<2018 && v.population > 500){
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
        if(p.nom==v.pays){
            p.villesDuPays.push(v);
        }else{
            console.error(v.nom+" n'est pas une ville du pays "+ p.nom);    
        }
    }else{
        console.error(v.nom+" n'est pas une ville valide");
    }
}