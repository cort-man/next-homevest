import { IRealEstate } from 'common/interfaces';
import { StateStatus } from 'common/types';
import { StateError } from 'common/types/state-error';

export type EstatesState = {
  data: IRealEstate[];
  status: StateStatus;
  error: StateError;
};
