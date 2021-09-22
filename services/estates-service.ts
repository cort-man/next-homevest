import { EstatesActionType } from 'contexts/real-estates/constants/estates-action.type';
import {
  estatesRequest,
  estatesIdle,
  estatesError,
  getAllEstatesSuccess,
} from 'contexts/real-estates/actions';

import React from 'react';
import { estatesApi } from 'api';

import { EstatesApi } from 'common/enums/api';
import { IRealEstate } from 'common/interfaces';

const { ROOT } = EstatesApi;

class EstatesService {
  dispatch: React.Dispatch<EstatesActionType>;

  constructor(dispatch: React.Dispatch<EstatesActionType>) {
    this.dispatch = dispatch;
  }

  async getAll(): Promise<void> {
    this.dispatch(estatesRequest());

    try {
      const estates: IRealEstate[] = await estatesApi.get(ROOT);

      this.dispatch(getAllEstatesSuccess(estates));
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
