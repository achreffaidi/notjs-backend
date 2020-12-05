import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { ReservationsModule } from './reservations/reservations.module';
import { SeasonModule } from './season/season.module';
import { DocumentsModule } from './documents/documents.module';
import { ArchivedDocumentsModule } from './archived-documents/archived-documents.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, RoomsModule, ReservationsModule, SeasonModule, DocumentsModule, ArchivedDocumentsModule, MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ofoym.mongodb.net/pfeDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
