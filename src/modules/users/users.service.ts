import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

async createUser(createUserDto: CreateUserDto): Promise<User> {
  const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  return this.userModel.create({
    ...createUserDto,
    password: hashedPassword,
  });
}
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async delete(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
