import { Module } from '@nestjs/common';
import { ArchivedDocumentsService } from './archived-documents.service';
import { ArchivedDocumentsController } from './archived-documents.controller';

@Module({
  providers: [ArchivedDocumentsService],
  controllers: [ArchivedDocumentsController]
})
export class ArchivedDocumentsModule {}
