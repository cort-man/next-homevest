import React from 'react';
import { IRealEstate } from 'common/interfaces';
import classes from 'styles/modules/estates-map/estates-popup.module.scss';
import { XIcon } from '@heroicons/react/outline';
import {
  HomeIcon,
  StarIcon,
  UserIcon,
  MusicNoteIcon,
  LightBulbIcon,
  BeakerIcon,
} from '@heroicons/react/solid';
import { Coords } from 'google-map-react';

interface IEstatePopupProps extends Coords {
  setSelectedProperty: (property: IRealEstate | null) => void;
  selectedProperty: IRealEstate;
}

const EstatePopup: React.FC<IEstatePopupProps> = ({
  selectedProperty,
  setSelectedProperty,
}) => (
  <div style={{ position: 'absolute', transform: 'translate(-49%, -105%)' }}>
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
            <span className={classes.home_text}>Entire Home</span>
          </div>
          <div className={classes.top__button_close}>
            <XIcon
              className={classes.icon}
              onClick={() => setSelectedProperty(null)}
            />
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.icon_container}>
            <MusicNoteIcon className={classes.icon} />
            <span>2</span>
          </div>
          <div className={classes.icon_container}>
            <LightBulbIcon className={classes.icon} />
            <span>2.5</span>
          </div>
          <div className={classes.icon_container}>
            <UserIcon className={classes.icon} />
            <span>4</span>
          </div>
          <div className={classes.icon_container}>
            <StarIcon className={classes.icon} />
            <span>47.3</span>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.content__info}>
          <div className={classes.title}>
            <div>Best Loft in Denver, Lodo</div>
            <BeakerIcon className={classes.icon} />
          </div>
          <div className={classes.description}>
            <div>
              Loft in
              <span className={classes.description__selected}> LoDo</span>
            </div>
          </div>
        </div>
        <div className={classes.content__stats}>
          <div className={classes.header}>Last 12 Month</div>
          <div className={classes.container}>
            <div className={classes.card}>
              <div className={classes.card__value}>61</div>
              <div className={classes.card__name}>Days Available</div>
            </div>
            <div className={classes.card}>
              <div className={classes.card__value}>$764</div>
              <div className={classes.card__name}>Avg. Daily Rate</div>
            </div>
            <div className={classes.card}>
              <div className={classes.card__value}>59%</div>
              <div className={classes.card__name}>Occupancy</div>
            </div>
            <div className={classes.card}>
              <div className={classes.card__value}>$27.5k</div>
              <div className={classes.card__name}>Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EstatePopup;
