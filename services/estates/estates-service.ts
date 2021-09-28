import { estatesApi } from 'api';

import { EstatesApi } from 'common/enums/api';
import { IRealEstate } from 'common/interfaces';

const { ROOT } = EstatesApi;

class EstatesService {
  async getAll(): Promise<IRealEstate[]> {
    const response = await estatesApi.get<IRealEstate[]>(ROOT);

    return response.data;
  }
}

export default new EstatesService();
