import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  create(createAuthDto: CreateAuthDto) {
    console.log(createAuthDto);

    return {
      message: 'User created successfully',
    };
  }
}
