import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonModal, IonButtons, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import './Tab3.css';
import React, { useState, useEffect, useRef } from 'react';
import { navigate } from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/core';
import TeamDetails from './TeamDetails';
import {EquipeItemProps, EquipeSeasonProps} from '../interfaces/Interfaces'


const Tab3: React.FC = () => {

  const [equipes, setEquipes] = useState<EquipeItemProps[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [equipeSelected, setEquipeSelected] = useState<number>(0);
  const [season, setSeason] = useState<String>("");
  const [nomEquipeSelected, setNomEquipeSelected] = useState<String>("");
  const [DetailsEquipe, setDetailsEquipe] = useState<EquipeSeasonProps>();
  const [error, setError] = useState<any>(null);
  const dataNull:any = null;
  
  const modal = useRef<HTMLIonModalElement>(null);

  
  useEffect(() => {
    setTimeout(() => {
    fetch('http://footclick.com/api/api.php?f=equipes')
      .then(response => {return response.json();})
      .then(data => {
        setEquipes(data);
        setIsPending(false);
      })
      .catch(error =>setError(error));
      
  }, 1000);},
   []);

   useEffect(() => {
    if(season === "")
      return;
    const s = season;
    const id = equipeSelected;
    const url = 'http://footclick.com/api/api.php?f=statsEquipe&idequipe='+id+'&season='+s;
    console.log(url);
    fetch(url)
      .then(response => {return response.json();})
      .then(data => {
        setDetailsEquipe(data);
        setIsPending(false);
      })
      .catch(error => setError(error.message));
    },
   [season]);

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Equipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='EquipesPage' fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Equipes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {isPending &&  <IonItem key={'itemloading'}>
            <IonLabel key={"loading"}>{"Chargement..."}
            </IonLabel></IonItem>}
          {equipes && equipes.map((equipe:any) => 
            <div key={'div' + equipe.IdEquipe} className="equipeItem" onClick={() => {
              setIsPending(true);
              setEquipeSelected(equipe.IdEquipe);
              setNomEquipeSelected(equipe.NomEquipe);
              setShowModal(true);}}>
              <IonItem key={'item' + equipe.IdEquipe}>
                <IonLabel className="LabelEquipe" key={equipe.IdEquipe}>
                    {equipe.NomEquipe}
                </IonLabel>
              </IonItem>
            </div>)
          }
        </IonList>
        <IonModal ref={modal} isOpen={showModal} >
          <IonHeader>
              <IonToolbar>
                <IonTitle>{nomEquipeSelected && nomEquipeSelected}</IonTitle>
                <IonButtons slot="end">
                  <IonButton strong={true} onClick={() => {setShowModal(false); setEquipeSelected(0); setSeason(""); setDetailsEquipe(dataNull); setNomEquipeSelected(""); setIsPending(false);}}>Fermer</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent id='Modal' className="ion-padding">
                <IonSelect onIonChange={(e) => {setSeason(e.detail.value!);}} label="Saison :" placeholder="AAAA">
                  <IonSelectOption value="2020">2020</IonSelectOption>
                  <IonSelectOption value="2021">2021</IonSelectOption>
                  <IonSelectOption value="2022">2022</IonSelectOption>
                  <IonSelectOption value="2023">2023</IonSelectOption>
                </IonSelect>
                  {(season != "") && <TeamDetails {...DetailsEquipe as EquipeSeasonProps} />}
                
                
              
            </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
