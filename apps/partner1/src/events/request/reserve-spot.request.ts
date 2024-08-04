import { TicketKind } from '@prisma/client';

export class ReserveSpotRequest {
  spots: string[]; //['A1','A2']
  ticked_kind: TicketKind;
  email: string;
}
