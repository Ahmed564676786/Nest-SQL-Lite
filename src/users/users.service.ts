import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // Create user
  create(userData: Partial<User>) {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  // Get all users
  findAll() {
    return this.usersRepository.find();
  }

  // Get one user
  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  // Update user
  async update(id: number, userData: Partial<User>) {
    await this.usersRepository.update(id, userData);

    return this.findOne(id);
  }


  async isEmailTaken(email: string): Promise<boolean> {
      const user = await this.userRepository.findOne({
        where: { email },
      });

      return !!user;
  }
  // Delete user
  async remove(id: number) {
    await this.usersRepository.delete(id);

    return {
      message: `User ${id} deleted successfully`,
    };
  }
}
