import { Controller, Get,Post,Put,Delete  } from '@nestjs/common';

@Controller('season')
export class SeasonController {

    @Post()
    create(): string {
        return 'create Season';
    }   

    @Get()
    get(): string {
        return 'get Season';
    } 
    @Get()
    getAll(): string {
        return 'get All seasons';
    }

    
}
