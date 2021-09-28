import { buildUseRequest } from 'common/hooks';
import EstatesService from './estates-service';

export const useEstatesGetAllRequest = buildUseRequest(EstatesService.getAll);
