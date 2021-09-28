import { EstatesActionType } from 'contexts/real-estates/constants/estates-action.type';
import {
  estatesRequest,
  estatesIdle,
  estatesError,
  getAllEstatesSuccess,
  getEstatesInAreaSuccess,
} from 'contexts/real-estates/actions';

import React from 'react';
import { estatesApi } from 'api';

import { EstatesApi } from 'common/enums/api';
import { IRealEstate } from 'common/interfaces';
import { IViewPoints } from 'common/interfaces/view-points.interface';

const { ROOT, IN_AREA } = EstatesApi;

class EstatesService {
  dispatch: React.Dispatch<EstatesActionType>;

  constructor(dispatch: React.Dispatch<EstatesActionType>) {
    this.dispatch = dispatch;
  }

  async getAll(): Promise<void> {
    this.dispatch(estatesRequest());

    try {
      const estates = await estatesApi.get<IRealEstate[]>(ROOT);

      this.dispatch(getAllEstatesSuccess(estates.data));
    } catch (error) {
      const message = (error as Error).message;

      if (message) this.dispatch(estatesError(message));
      else this.dispatch(estatesError('unknown error'));
    }
  }

  async getInArea(viewPoints: IViewPoints): Promise<void> {
    this.dispatch(estatesRequest());

    try {
      const estates = await estatesApi.get<IRealEstate[]>(IN_AREA, {
        params: { viewPoints },
      });

      this.dispatch(getEstatesInAreaSuccess(estates.data));
    } catch (error) {
      const message = (error as Error).message;

      if (message) this.dispatch(estatesError(message));
      else this.dispatch(estatesError('unknown error'));
    }
  }

  idleEstates(): void {
    this.dispatch(estatesIdle());
  }
}

export default EstatesService;
