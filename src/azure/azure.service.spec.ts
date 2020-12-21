import { Test, TestingModule } from '@nestjs/testing';
import { AzureService } from './azure.service';

describe('GcService', () => {
  let service: AzureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureService],
    }).compile();

    service = module.get<AzureService>(AzureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
