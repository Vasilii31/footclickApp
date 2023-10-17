import {  EquipeSeasonProps } from "../interfaces/Interfaces";
import './TeamDetails.css';

const TeamDetails: React.FC<EquipeSeasonProps> = ({
    id,
    nomEquipe,
    saison,
    nbButsEncaisses,
    nbButsMarques, 
    nbCartonsAttribues,
    nbMatchsJoues,
    nbMatchsGagnes,
    tauxDeVictoires,
    top5Buteurs,
    pireMatch,
    meilleurMatch}) => {

    if(!id)
        return(<div>Aucune donnée pour cette saison...</div>);   
    return (<><div className="StatsEquipe">
    <div> Equipe : {nomEquipe}</div>
    <div> Saison : {saison}</div>
    <div>Matchs joués : {nbMatchsJoues} - Match gagnés : {nbMatchsGagnes}</div>
    <div>Taux de victoire : {tauxDeVictoires} %</div>
    <div>Buts Encaissés : {nbButsEncaisses} - Buts Marqués : {nbButsMarques}</div>
    <div>Cartons Attribués : {nbCartonsAttribues}</div>
    <div className="incased">
    <div> Meilleurs Buteurs de la saison :</div>{top5Buteurs && top5Buteurs.map((buteur:any) => 
            <div key={'div' + buteur.IdJoueur}>
              {buteur.Nom + ' ' + buteur.Prenom + ' - ' + buteur.butsMarques + ' buts marqués'}
            </div>)
          }
    </div>
    <div className="incased">
        <div>Meilleur match de la saison :</div>
        <div> {meilleurMatch.nomEquipe1 && meilleurMatch.nomEquipe1 + ' contre ' + meilleurMatch.nomEquipe2}{!meilleurMatch.nomEquipe1 && "Aucun match gagné cette saison !"}</div>
        <div> {meilleurMatch.DateRencontre && 'Le ' + meilleurMatch.DateRencontre.toString().substring(8, 10) + '/'+ meilleurMatch.DateRencontre.toString().substring(5, 7) + '/' + meilleurMatch.DateRencontre.toString().substring(0, 4)}</div>
        <div> {meilleurMatch.scoreDiff && "Victoire avec " + meilleurMatch.scoreDiff + " buts d'avance."}</div>
    </div>
    <div className="incased">
        <div>Pire match de la saison : </div>
            <div>
                {pireMatch.nomEquipe1 && pireMatch.nomEquipe1 + ' contre ' + pireMatch.nomEquipe2}{!pireMatch.nomEquipe1 && "Aucun match perdu cette saison !"}
                <div> {pireMatch.DateRencontre && 'Le ' + pireMatch.DateRencontre.toString().substring(8, 10) + '/'+ pireMatch.DateRencontre.toString().substring(5, 7) + '/' + pireMatch.DateRencontre.toString().substring(0, 4)}</div>
                <div> {pireMatch.scoreDiff && "Defaite avec " + pireMatch.scoreDiff + " buts de retard."}</div>
            </div>
        </div>
    </div>      
    </>
    );
}
 
export default TeamDetails;