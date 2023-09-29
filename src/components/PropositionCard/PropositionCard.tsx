import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axios';

import './PropositionCard.scss';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

interface PropositionCardProps {
  previewImageUrl: string;
  altImage: string;
  title: string;
  authorName: string;
  localisation: string;
  url: string;
}

function PropositionCard({
  previewImageUrl,
  altImage,
  title,
  authorName,
  localisation,
  url,
}: PropositionCardProps) {
  const [propositionData, setPropositionData] = useState<any>(null);

  useEffect(() => {
    axiosInstance
      .get('/trips/:id/links/:link_id')
      .then((response) => {
        setPropositionData(response.data);
      })
      .catch((error) => {
        console.error(
          'Une erreur est survenue lors de la récupération des données :',
          error
        );
      });
  }, []);

  const handleClickEdit = () => {
    console.log('Au clic sur le bouton, afficher la page EditProposition');
  };

  const handleClickDelete = () => {
    // Effectuez la requête DELETE ici
    axiosInstance
      .delete('/trips/:id/links/:link_id')
      .then(() => {
        console.log('La proposition a été supprimée avec succès.');
        // Vous pouvez ajouter ici une logique pour mettre à jour l'interface utilisateur, par exemple, supprimer la carte de proposition.
      })
      .catch((error) => {
        console.error(
          'Une erreur est survenue lors de la suppression de la proposition :',
          error
        );
      });
  };

  return (
    <Link to={url} className="proposition-card-url-detail">
      <img
        className="proposition-card-image"
        src={previewImageUrl}
        alt={altImage}
      />
      <div className="proposition-card-container">
        <div className="proposition-card-header">
          <h3 className="proposition-card-header-title">{title}</h3>
          <div className="proposition-card-header-icon">
            <ButtonIcon icon="fa-solid fa-pen" handleClick={handleClickEdit} />
            <ButtonIcon
              icon="fa-solid fa-trash"
              handleClick={handleClickDelete}
            />
          </div>
        </div>
        <p className="proposition-card-author">Creé par {authorName}</p>
        <div className="proposition-card-localisation">
          <i className="fa-solid fa-location-dot" />
          <p className="proposition-card-localisation-name">{localisation}</p>
        </div>
        <i className="fa-solid fa-square-arrow-up-right" />
        Voir détail en cliquant sur la proposition.
      </div>
    </Link>
  );
}

export default PropositionCard;
