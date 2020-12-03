import { Test, TestingModule } from '@nestjs/testing';
import { ArchivedDocumentsController } from './archived-documents.controller';

describe('ArchivedDocumentsController', () => {
  let controller: ArchivedDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchivedDocumentsController],
    }).compile();

    controller = module.get<ArchivedDocumentsController>(ArchivedDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
