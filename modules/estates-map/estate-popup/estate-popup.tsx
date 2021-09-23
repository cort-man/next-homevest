import React from 'react';
import { IRealEstate } from 'common/interfaces';
import { Popup } from 'react-map-gl';
import classes from 'styles/modules/estates-map/estates-popup.module.scss';
import { XIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

interface IEstatePopupProps {
  setSelectedProperty: (property: IRealEstate) => void;
  selectedProperty: IRealEstate;
}

const EstatePopup: React.FC<IEstatePopupProps> = ({ selectedProperty }) => (
  <Popup
    latitude={selectedProperty.coordinates[0]}
    longitude={selectedProperty.coordinates[1]}
    closeButton={false}
  >
    <div className={classes.estates_popup}>
      <div
        className={classes.picture}
        style={{
          backgroundImage: `url(${selectedProperty.images[0]})`,
        }}
      >
        <div className={classes.top}>
          <div className={classes.top__button}>
            <HomeIcon className={classes.home_icon} />
            <span>Entire Home</span>
          </div>
          <div className={classes.top__button_close}>
            <XIcon className={classes.icon} />
          </div>
        </div>
      </div>
      <div>asd</div>
    </div>
  </Popup>
);

export default EstatePopup;
