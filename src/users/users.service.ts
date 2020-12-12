import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { compare, hash } from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = new this.userModel(createUserDto);
    userCreated.password = await hash(userCreated.password,10);
    return userCreated.save();
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async userLogin(createUserDto: CreateUserDto): Promise<any> {
    let u = await this.userModel.findOne({ email: createUserDto.email }).exec();
    if (!u)
      throw new NotFoundException('Email not found');
    if(await compare(createUserDto.password, u.password))
      return u;
    else
      throw new NotFoundException('Incorrect Pass');
  }
}
