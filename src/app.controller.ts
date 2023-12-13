import { Controller, Get, Post, Render,UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './decorator/customise';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService: AuthService) { }
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    handleLogin(@Request() req) {
      return this.authService.login(req.user);
    }

  
    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
