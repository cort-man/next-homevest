import React, { useEffect } from 'react';
import EstatesMap from 'modules/estates-map/estates-map';
import { IRealEstate } from 'common/interfaces';
import { withHandling, WithHandlingProps } from 'common/hoc';
import { EstatesService } from 'services';
import RealEstatesList from 'modules/real-estates-list';
import style from 'styles/pages/real-estates-map.module.scss';

type RealEstatesProps = WithHandlingProps<unknown, unknown, IRealEstate[]>;

const RealEstatesMap: React.FC<RealEstatesProps> = ({
  data,
  makeControlledRequest,
}) => {
  useEffect(() => {
    if (makeControlledRequest) makeControlledRequest();
  }, [makeControlledRequest]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className={style.real_estates_map}>
      <div className={style.real_estates_map__estates_list}>
        <RealEstatesList estates={data} />
      </div>
      <div className={style.real_estates_map__map}>
        <EstatesMap estates={data} />
      </div>
    </div>
  );
};

export default withHandling(EstatesService.getAll)(RealEstatesMap);
