export interface MatchVignetteProps{
    IdFeuille : string;
    DateRencontre : Date;
    Equipe1 : string;
    Equipe2 : string;
    ScoreEquipeGagnante : string;
    ScoreEquipePerdante : string;
}

export interface MatchDetailsProps{
    id: string;
    dateRencontre : Date;
    duree : string;
    stade : string;
    scoreEquipeGagnante : string;
    scoreEquipePerdante : string;
    vainqueur : string;
    perdant: string;
    arbitrePrincipal : string[];
    arbitreAssistant1 : string[];
    arbitreAssistant2 : string[];
    equipe1 : equipeMatchProps;
    equipe2 : equipeMatchProps;
    buts: butProps[];
    changements: changementsProps[];
    fautes: fautesProps[];
}

interface equipeMatchProps{
    id: string;
    nom: string;
    nomEntraineur: string;
    nomEntraineurAdjoint: string;
    joueurs : joueurProps[];
}

export interface joueurProps{
    IdJoueur: string;
    Nom : string;
    Prenom : string;
    NomPoste : string;
    NumeroMaillot : string;
}

export interface fautesProps{
    idCarton: string;
    NomCarton: string;
    joueurSanctionne: string;
    minute: string;
}

export interface butProps{
    idBut: string;
    idButeur: string;
    minute: string;
    nomButeur: string;
    prenomButeur: string;
    contreSonCamp: boolean;
}

export interface changementsProps{
    idChangement: string;
    joueurEntrant: string;
    joueurSortant: string;
    minute : string;
}

export interface EquipeItemProps{
    id: string;
    nomEquipe : string;
}

export interface EquipeSeasonProps{
    id: string;
    nomEquipe: string;
    saison : string;
    nbButsEncaisses: string;
    nbButsMarques : string;
    nbCartonsAttribues: string;
    nbMatchsGagnes: string;
    nbMatchsJoues : string;
    nbMatchsPerdus: string;
    tauxDeVictoires : string;
    top5Buteurs: topButeur[];
    meilleurMatch: ResumeMatchSaison;
    pireMatch : ResumeMatchSaison;
}

interface ResumeMatchSaison{
    id: string;
    nomEquipe1: string;
    nomEquipe2: string;
    DateRencontre : Date;
    scoreDiff : string;
}

interface topButeur{
    id: string;
    nom: string;
    prenom : string;
    butsMarques : string;
}