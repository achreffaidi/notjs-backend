import { Controller, Get,Post,Put,Delete } from '@nestjs/common';

@Controller('rooms')
export class RoomsController {

@Post()
create(): string {
    return 'create room';
}
@Get()
    get(): string {
    return 'get room info';
}
@Get()
    getAll(): string {
    return 'get all rooms info';
}
@Put()
    update(): string {
    return 'update room info';
}
@Delete()
    delete(): string {
    return 'remove';
}

}
