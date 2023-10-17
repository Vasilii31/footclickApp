import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acceuil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='Page1Body'>
          <h1 className='Welcome'>Bienvenue sur footclick !</h1>
          <h3 className='Guide'>Le premier onglet "Matchs" vous permettra de consulter les détails du déroulement des matchs.</h3>
          <h3 className='Guide'>L'onglet "Equipes" vous permettra de consulter les statistiques et performances d'une équipe sur une saison donnée.</h3>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
