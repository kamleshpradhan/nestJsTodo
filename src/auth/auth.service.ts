import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  async loginUser(login: any) {
    const user = await this.userService.findUser(login);
    if (
      login.email == user[0]['email'] &&
      login.password == user[0]['password']
    ) {
      return {
        access_token: await this.jwtService.signAsync(login),
      };
    }
  }
}
