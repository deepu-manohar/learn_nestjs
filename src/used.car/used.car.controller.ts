import { UseGuards, Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { DeleteUser, UpdateUser, UserSigninRequest, UserSignupRequest } from './user.signup.request';
import { UsedCarService } from './used.car.service';
import { Serialize } from 'src/interceptors/serialzer.interceptor';
import { UserResponse } from './user.responses';
import { Session } from '@nestjs/common/decorators/http';
import { CurrentUser } from './current.user.decorator';
import { AuthGaurd } from './auth.gaurd';

@Controller()
export class UsedCarController {
    usedCarService: UsedCarService;
    constructor(usercarService: UsedCarService){
        this.usedCarService = usercarService;
    }

    @Get('/user/:id')
    @Serialize(UserResponse)
    getUserById(@Param('id') id: number){
        return this.usedCarService.getUserById(id);
    }

    @Post("/user/signup")
    async userSignup(@Body() request: UserSignupRequest, @Session() session: any){
        const user = await this.usedCarService.userSignup(request);
        session.userId = user.id;
        return user;
    }

    @Post("/user/signin")
    async userSignIn(@Body() request: UserSigninRequest, @Session() session: any){
        const user = await this.usedCarService.userSingIn(request);
        session.userId = user.id;
        return user;
    }

    @Post("/user/signout")
    async userSignOut(@Body() request: any, @Session() session: any){
        session.userId = null;
        return true;
    }

    @UseGuards(AuthGaurd)
    @Get("/user/loggedIn/current")
    async currentUser(@CurrentUser() user: UserResponse){                
        return user;
    }

    @Put("/user")
    updatePassword(@Body() request: UpdateUser){
        return this.usedCarService.updatePassword(request);
    }

    @Delete("/user")
    deleteUser(@Body() request: DeleteUser){
        return this.usedCarService.deleteUser(request);
    }
}
