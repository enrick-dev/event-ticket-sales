import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventosModule } from './eventos/eventos.module';
import { LugaresModule } from './lugares/lugares.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { AuthModule } from '@app/core/auth/auth.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        join(__dirname, '..', `.env.partner2${process.env.NODE_ENV}`),
        join(__dirname, '..', '.env.partner2'),
      ],
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    EventosModule,
    LugaresModule,
  ],
})
export class Partner2Module {}
