import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
@Get()
  me(): string {
    return 'Return current user';
  }

@Post('test')
async register(@Body() createUserDto: CreateUserDto): Promise<string> {
    var result = await this.usersService.create(createUserDto);
    return result.name + ' created';
}
@Post()
    login(): string {
    return 'login';
}
@Get()
    get(): string {
    return 'get user info';
}
@Get('test')
    getAll(): Promise<User[]> {
    return this.usersService.getAll();
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
