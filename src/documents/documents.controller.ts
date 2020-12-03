import { Controller, Get,Post,Put,Delete  } from '@nestjs/common';

@Controller('documents')
export class DocumentsController {


    @Post()
    create(): string {
        return 'create document';
    }   

    @Get()
    get(): string {
        return 'get document';
    } 

    @Get()
    me(): string {
        return 'get my document';
    } 

    @Get()
    getAll(): string {
        return 'get All documents';
    }
    
    @Post()
    uploadFile(): string {
        return 'Generate a SignedURL to upload file to firebase DB';
    }

    @Post()
    archive():String{
        return 'Document archived'; 
    }
    

    



    


}
