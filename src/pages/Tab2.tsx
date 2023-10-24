import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonModal, IonButtons, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import './Tab2.css';
import React, { useState, useEffect, useRef } from 'react';
import { navigate } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core';
import MatchDetails from './MatchDetails';
import {MatchVignetteProps, MatchDetailsProps} from '../interfaces/Interfaces'


const Tab2: React.FC = () => {

  const [matches, setMatches] = useState<MatchVignetteProps[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [matchSelected, setmatchSelected] = useState<string>("");
  const [DetailsMatch, setDetailsMatch] = useState<MatchDetailsProps>();
  const [error, setError] = useState<any>(null);
  const dataNull:any = null;
  
  const modal = useRef<HTMLIonModalElement>(null);

  
  useEffect(() => {
    setTimeout(() => {
    fetch('http://footclick.com/api/api.php?f=matchs')
      .then(response => {return response.json();})
      .then(data => {
        console.log(data);
        setMatches(data);
        setIsPending(false);
      })
      .catch(error =>setError(error));
      
  }, 1000);},
   []);

   useEffect(() => {
    setTimeout(() => {
      if(matchSelected === "")
        return;
      const id = matchSelected;
      const url = 'http://footclick.com/api/api.php?f=infosMatch&idmatch='+id;
      console.log(url);
      fetch(url)
        .then(response => {return response.json();})
        .then(data => {
          setDetailsMatch(data);
          setIsPending(false);
        })
        .catch(error => setError(error.message));
      }, 1000);},
    [matchSelected]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Matchs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='MatchesPage' fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Matchs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {isPending &&  <IonItem key={'itemloading'}>
            <IonLabel key={"loading"}>{"Chargement..."}
            </IonLabel></IonItem>}
          {
            matches && matches.map((match:MatchVignetteProps) => <div key={'div' + match.IdFeuille} className="Match" onClick={() => {
              setmatchSelected(match.IdFeuille);
              setIsPending(true);
              setShowModal(true);
              console.log('click'+match.IdFeuille);}}>
              <IonItem key={'item' + match.IdFeuille}>
                <IonLabel key={match.IdFeuille}>
                  <div className='vignetteMatch'>
                    <div>{match.DateRencontre.toString().substring(8, 10) + '/'+ match.DateRencontre.toString().substring(5, 7) + '/' + match.DateRencontre.toString().substring(0, 4)}</div>
                    <div>{match.Equipe1 + ' vs ' + match.Equipe2}</div>
                  </div>
                </IonLabel>
              </IonItem>
            </div>)
          }
        </IonList>
        <IonModal ref={modal} isOpen={showModal}>
          <IonHeader>
              <IonToolbar>
                <IonButtons slot="end">
                  <IonButton strong={true} onClick={() => {setShowModal(false); setmatchSelected(""); setDetailsMatch(dataNull);}}>Fermer</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent id='Modal' className="ion-padding">
                  {isPending && <div>Chargement...</div>}
                  {(matchSelected != "" && !isPending) && <MatchDetails {...DetailsMatch as MatchDetailsProps} />}
            </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

