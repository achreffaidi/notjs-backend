import { Controller, Get,Post,Put,Delete } from '@nestjs/common';

@Controller('reservations')
export class ReservationsController {

@Get()
me(): String{
    return 'get my reservation'; 
}
@Post()
create(): string {
    return 'create reservation';
}
@Get()
    get(): string {
    return 'get Reservation';
}
@Get()
    getAll(): string {
    return 'get all Reservations';
}
@Get()
    getByRoom(): string {
    return 'get all Reservations';
}
@Put()
    update(): string {
    return 'update Reservation ';
}
@Delete()
    delete(): string {
    return 'remove Reservation';
}
    
}
