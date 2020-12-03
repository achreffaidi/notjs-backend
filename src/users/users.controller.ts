import { Controller, Get,Post,Put,Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {

@Get()
  me(): string {
    return 'Return current user';
  }

@Post()
    register(): string {
    return 'create user';
}
@Post()
    login(): string {
    return 'login';
}
@Get()
    get(): string {
    return 'get user info';
}
@Get()
    getAll(): string {
    return 'get user info';
}
@Put()
    update(): string {
    return 'get user info';
}
@Delete()
    delete(): string {
    return 'remove';
}
@Post()
    import(): String {
        return 'import users from xmls';
    }
@Get()
    export(): String {
        return 'import users from xmls';
    }

}
