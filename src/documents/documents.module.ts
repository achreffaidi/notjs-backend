import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { AzureService } from 'src/azure/azure.service';

@Module({
  providers: [DocumentsService,AzureService],
  controllers: [DocumentsController]
})
export class DocumentsModule {}
