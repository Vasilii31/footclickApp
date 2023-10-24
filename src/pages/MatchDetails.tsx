import {  MatchDetailsProps, joueurProps, butProps, changementsProps, fautesProps } from "../interfaces/Interfaces";
import './MatchDetails.css';

const TeamDetails: React.FC<MatchDetailsProps> = (MatchDetailsProps) => {
    console.log(MatchDetailsProps);
    if(!MatchDetailsProps.id)
        return(<div>Chargement...</div>);   
    return (<><div className="ModalStructure">
    <div className="GeneralInfos">
        <div className="title">{MatchDetailsProps.vainqueur + ' vs ' + MatchDetailsProps.perdant}</div>
        <div>{MatchDetailsProps.dateRencontre.toString().substring(8, 10) + '/'+ MatchDetailsProps.dateRencontre.toString().substring(5, 7) + '/' + MatchDetailsProps.dateRencontre.toString().substring(0, 4)}</div>
        <div>{MatchDetailsProps.stade}</div>
        <div>Résultat : {MatchDetailsProps.scoreEquipeGagnante + ' - ' + MatchDetailsProps.scoreEquipePerdante}</div>
        <div>Vainqueur : {MatchDetailsProps.vainqueur}</div>
        <div className="Title">Composition des Equipes : </div>
    </div>
    <div className="TeamDisplayContainer">
        <div className="TeamDisplay">
            <div className="TeamGeneralInfos">{MatchDetailsProps.equipe1.nom}</div>
            <div className="Title">Entraineur(s) :</div>
            <div className="TeamGeneralInfos">{MatchDetailsProps.equipe1.nomEntraineur}</div>
            <div className="TeamGeneralInfos">{MatchDetailsProps.equipe1.nomEntraineurAdjoint && MatchDetailsProps.equipe1.nomEntraineurAdjoint}</div>
            <div className="Title"onClick={() => {document.getElementById("joueurDepliant1")?.setAttribute("style", "display: block;");
            document.getElementById("joueurDepliant2")?.setAttribute("style", "display: block;");}}>Joueurs :</div>
            <div className="Joueurs" id="joueurDepliant1" onClick={() => {document.getElementById("joueurDepliant1")?.setAttribute("style", "display: none;");
            document.getElementById("joueurDepliant2")?.setAttribute("style", "display: none;");}}>
                {MatchDetailsProps.equipe1.joueurs.map((joueur:joueurProps) => 
                    <div key={joueur.IdJoueur} className="joueur">
                        <div>{joueur.Nom + ' ' + joueur.Prenom + ' ' + joueur.NumeroMaillot}</div> 
                        <div>Poste : {joueur.NomPoste}</div>
                    </div>)}
            </div>
        </div>
        <div className="TeamDisplay">
            <div className="TeamGeneralInfos">{MatchDetailsProps.equipe2.nom}</div>
            <div className="Title">Entraineur(s) :</div>
            <div className="TeamGeneralInfos">{MatchDetailsProps.equipe2.nomEntraineur}</div>
            <div className="TeamGeneralInfos">{MatchDetailsProps.equipe2.nomEntraineurAdjoint && MatchDetailsProps.equipe2.nomEntraineurAdjoint}</div>
            <div className="Title" onClick={() => {document.getElementById("joueurDepliant1")?.setAttribute("style", "display: block;");
            document.getElementById("joueurDepliant2")?.setAttribute("style", "display: block;");}}>Joueurs :</div>
            <div className="Joueurs" id="joueurDepliant2" onClick={() => {document.getElementById("joueurDepliant1")?.setAttribute("style", "display: none;");
            document.getElementById("joueurDepliant2")?.setAttribute("style", "display: none;");}}>
                {MatchDetailsProps.equipe2.joueurs.map((joueur:joueurProps) => 
                    <div key={joueur.IdJoueur} className="joueur">
                        <div>{joueur.Nom + ' ' + joueur.Prenom + ' ' + joueur.NumeroMaillot}</div> 
                        <div>Poste : {joueur.NomPoste}</div>
                    </div>)}
            </div>
        </div>
        </div>
    </div>
    <div className="EventsContainer">
        <div className="Title" >Evenements:</div>
        <div className="Title">Buts</div>
        <div className="noShow" id="ButsDeplieur" onClick={() => {document.getElementById("eventDepliantChangements")?.setAttribute("style", "display: flex;");
            document.getElementById("ButsDeplieur")?.setAttribute("style", "display: none;");}}>Déplier les buts</div> 
        <div className="EventTypeContainer" id="eventDepliantBut" onClick={() => {
            document.getElementById("eventDepliantBut")?.setAttribute("style", "display: none;");
            document.getElementById("ButsDeplieur")?.setAttribute("style", "display: flex;");}}>
            {MatchDetailsProps.buts.map((but:butProps) => 
                <div key={but.idBut} className="but">
                    <div>{' - But de ' + but.nomButeur + ' ' + but.prenomButeur} à  la {but.minute}ème minute.</div> 
                </div>)}
        </div>
        <div className="Title">Changements</div>
        <div className="noShow" id="ChangementsDeplieur" onClick={() => {document.getElementById("eventDepliantChangements")?.setAttribute("style", "display: flex;");
            document.getElementById("ChangementsDeplieur")?.setAttribute("style", "display: none;");}}>Déplier les changements</div> 
        <div className="EventTypeContainer" id="eventDepliantChangements" onClick={() => {
            document.getElementById("eventDepliantChangements")?.setAttribute("style", "display: none;");
            document.getElementById("ChangementsDeplieur")?.setAttribute("style", "display: flex;");}}>
            {MatchDetailsProps.changements.map((changement:changementsProps) => 
                <div key={changement.idChangement} className="changement">
                    <div>{' - Sortie de ' + changement.joueurSortant }</div>
                    <div>{'remplacé par ' + changement.joueurEntrant }</div>
                    <div>à la {changement.minute}ème minute.</div>
                </div>)}
        </div>
        <div className="Title">Cartons</div>
        <div className="noShow" id="CartonsDeplieur" onClick={() => {document.getElementById("eventDepliantCarton")?.setAttribute("style", "display: flex;");
            document.getElementById("CartonsDeplieur")?.setAttribute("style", "display: none;");}}>Déplier les cartons</div>
        <div className="EventTypeContainer" id="eventDepliantCarton" onClick={() => {
            document.getElementById("eventDepliantCarton")?.setAttribute("style", "display: none;");
            document.getElementById("CartonsDeplieur")?.setAttribute("style", "display: flex;");}}>
            {MatchDetailsProps.fautes.map((faute:fautesProps) => 
                <div key={faute.idCarton} className="faute">
                    <div>{faute.NomCarton + ' attribué à ' + faute.joueurSanctionne + ' à la ' + faute.minute + 'ème minute.'}</div>
                </div>)}
        </div>
    </div>      
    </>
    );
}
 
export default TeamDetails;