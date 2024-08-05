import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Import UsersModule
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

// import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<number>('JWT_EXPIRATION_TIME'),
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule, // Import UsersModule here
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.register({
//       secret: '2Vm5JTERlTrdG3KxdoqW1wL-g7RFM8OPjlvegVfynqk',
//       signOptions: { expiresIn: '60m' },
//     }),
//     UsersModule, // Import UsersModule here
//   ],
//   providers: [AuthService, JwtStrategy, LocalStrategy],
//   controllers: [AuthController],
// })
export class AuthModule {}
