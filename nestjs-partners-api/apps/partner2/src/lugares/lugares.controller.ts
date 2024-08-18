import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarLugarRequest } from './request/criar-lugar.request';
import { AtualizarLugarRequest } from './request/update-spot.request';

@Controller('eventos/:eventosId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarLugarRequest: CriarLugarRequest,
    @Param('eventosId') eventId: string,
  ) {
    return this.spotsService.create({
      name: criarLugarRequest.nome,
      eventId,
    });
  }

  @Get()
  findAll(@Param('eventosId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(
    @Param('eventosId') eventId: string,
    @Param('spotId') spotId: string,
  ) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(
    @Param('eventosId') eventId: string,
    @Param('spotId') spotId: string,
    @Body() atualizarLugarRequest: AtualizarLugarRequest,
  ) {
    return this.spotsService.update(eventId, spotId, {
      name: atualizarLugarRequest.nome,
    });
  }

  @HttpCode(204)
  @Delete(':spotId')
  remove(@Param('eventosId') eventId: string, @Param('spotId') spotId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
