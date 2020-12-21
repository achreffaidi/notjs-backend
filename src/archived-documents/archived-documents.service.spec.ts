import { Test, TestingModule } from '@nestjs/testing';
import { ArchivedDocumentsService } from './archived-documents.service';

describe('ArchivedDocumentsService', () => {
  let service: ArchivedDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchivedDocumentsService],
    }).compile();

    service = module.get<ArchivedDocumentsService>(ArchivedDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
