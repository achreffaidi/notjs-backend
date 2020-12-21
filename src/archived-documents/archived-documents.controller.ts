import { Controller, Get,Post,Put,Delete  } from '@nestjs/common';

@Controller('archived-documents')
export class ArchivedDocumentsController {
   
    @Get()
    get(): string {
        return 'get document';
    } 

    @Get()
    getAll(): string {
        return 'get All documents';
    }

    @Get()
    search(): string {
        return 'get by keyword and tags';
    }

    @Post() 
    addToBookmarks(): string {
        return 'add to current user Bookmarks';
    }
    @Delete()
    removeFromBookmarks(): string {
        return 'remove from user Bookmarks';
    }
    @Post()
    addVisit(): string {
        return 'add to current user Bookmarks';
    }
    @Get()
    getLastVisited(): string {
        return 'add to current user Bookmarks';
    }

    @Post()
    uploadFile(): string {
        return 'Generate a SignedURL to upload file to firebase DB';
    }

}
