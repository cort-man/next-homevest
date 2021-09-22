import React from 'react';
import { IRealEstate } from 'common/interfaces';
import style from 'styles/modules/real-estates-list/real-estates-card.module.scss';
import { Button, Link } from 'common/components';

interface IRealEstateCardProps {
  estate: IRealEstate;
}

const RealEstateCard: React.FC<IRealEstateCardProps> = ({ estate }) => {
  const { city, images, name, buildingTechnology, priceForSqM } = estate;

  return (
    <div className={style.real_estates_card}>
      <div className={style.real_estates_card_content}>
        <div
          className={style.picture}
          style={{
            backgroundImage: `url(${images[0]})`,
          }}
        >
          <div className={style.picture_caption}>
            <div>{name}</div>
          </div>
        </div>
        <div className={style.info_container}>
          <div className={style.text}>
            <span>{city}</span>
            <span>{buildingTechnology}</span>
          </div>
          <div className={style.buttons}>
            <Button text="See now" className={style.see_now__button} />
            <Link text="Analyze >" href="/" className={style.analyze__link} />
          </div>
          <div>
            Main price: <span className={style.bold_text}>${priceForSqM}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateCard;
