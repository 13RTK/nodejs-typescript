import { URLRecord } from './URLRecord.ts';

type ErrorResponse = {
  message: string;
};

type SuccessResponse = {
  message: string;
  data: string | URLRecord;
};

export type URLRecordResponse = ErrorResponse | SuccessResponse;
