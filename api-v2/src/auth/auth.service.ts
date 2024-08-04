import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schemas/user.schema';
import { JwtPayload } from './jwt-payload.interface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private JwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user.toObject();
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload: JwtPayload = { username: user.username };
    return {
      access_token: this.JwtService.sign(payload),
    };
  }

  async register(username: string, password: string): Promise<User> {
    const newUser = new this.userModel({ username, password });
    return await newUser.save();
  }
}
