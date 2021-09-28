import React from 'react';
import RealEstateCard from './real-estate-card';
import { IRealEstate } from 'common/interfaces';
import styles from 'styles/modules/real-estates-list/real-estates-list.module.scss';

interface IRealEstateListProps {
  estates: IRealEstate[] | undefined;
}

const RealEstatesList: React.FC<IRealEstateListProps> = ({ estates }) => {
  if (!estates?.length) return <div>No Estates</div>;

  const cards = estates?.map((estate, index) => (
    <RealEstateCard key={index} estate={estate} />
  ));

  return <div className={styles.real_estates_list}>{cards}</div>;
};

export default RealEstatesList;
