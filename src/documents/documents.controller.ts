import { Controller, Get,Post,Put,Delete, Body  } from '@nestjs/common';
import { AzureService } from 'src/azure/azure.service';

@Controller('documents')
export class DocumentsController {
    constructor(private readonly gcService: AzureService){}

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
    
    @Post('upload')
    async generateSignedUrlForUpload(@Body() body) {
        var fileName = body.fileName;
        const {DocumentUrl,SignedUrl} = await this.gcService.generateV4UploadSignedUrl(AzureService.PDF_BUCKET,fileName);
        //TODO Asign the DocumentURL to the Document
        return {
            "signedUrl": SignedUrl
        };
    }

    @Post()
    archive():String{
        return 'Document archived'; 
    }
    

    



    


}
