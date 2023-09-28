import Main from '../../layout/Main/Main';

import ButtonOutline from '../../components/Button/ButtonOutline/ButtonOutline';
import ButtonColor from '../../components/Button/ButtonColor/ButtonColor';
import PropositionCard from '../../components/PropositionCard/PropositionCard';


import './OneTrip.scss';

function OneTrip() {
  return (
    <Main>
      <section className="one-trip-overview">
        <img
          className="one-trip-overview-image"
          src="https://fastly.picsum.photos/id/664/200/200.jpg?hmac=d8ZWM7R6VABV4JdJPvmCOGPqq3E6KTIFDz-FYp73TJo"
          alt="plane"
        />
        <div className="one-trip-overview-container">
          <h1 className="one-trip-overview-title">Voyage au Canada</h1>
          <div className="one-trip-overview-date">
            <i className="fa-solid fa-calendar" />
            <p className="one-trip-overview-date-name">1 Jan - 2 Jan 2024</p>
          </div>
          <div className="one-trip-overview-localisation">
            <i className="fa-solid fa-location-dot" />
            <p className="one-trip-overview-localisation-name">Canada</p>
          </div>
          <p className="one-trip-overview-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            corporis iur e p Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Saepe corporis iur e p
          </p>
          <div className="one-trip-overview-buttons">
            <ButtonOutline to="#" text="Editer" icon="fa-solid fa-pen" />
            <ButtonOutline to="#" text="Supprimer" icon="fa-solid fa-trash" />
                
          </div>
        </div>
      </section>

      <section className="one-trip-members">
        <ButtonColor text="Ajouter" to="#" icon="fa-solid fa-user-plus" />
        <i className="fa-solid fa-user one-trip-members-icon" />
        <i className="fa-solid fa-user one-trip-members-icon" />
        <i className="fa-solid fa-user one-trip-members-icon" />
        <i className="fa-solid fa-user one-trip-members-icon" />
      </section>

      <section className="one-trip-propositions">
        <h2 className="one-trip-propositions-title">Propositions</h2>
        <div className="one-trip-propositions-add-container">
          <p className="one-trip-propositions-add-text">
            Faites une nouvelle proposition.
          </p>
          <ButtonColor
            to="/new-proposition"
            text="Nouvelle proposition"
            icon="fa-solid fa-plus"
          />
        </div>
        <PropositionCard
          previewImageUrl="https://www.raftbanff.com/Portals/0/EasyDNNNews/44/1000600p702EDNmainHydra--Georgia-Russell-9996-2.jpg"
          altImage="Rafting au Canada"
          title="Rafting Hydra River"
          authorName="Eli la magnifique"
          localisation="Hydra River"
          url="https://www.raftbanff.com/About/Details/ArtMID/702/ArticleID/44/Best-Whitewater-rafting-rivers-in-Canada"
        />
      </section>
    </Main>
  );
}

export default OneTrip;
