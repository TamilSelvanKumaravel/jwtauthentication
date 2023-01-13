import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guards';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req):any{
    return this.authService.login(req.user)//ToDo :return jwt access token
     //return req.user
}
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Req() req): string {//TODO: require bearer token,validate token
    return req.user
  }
}
