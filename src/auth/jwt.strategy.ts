import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:'SECRET'//protect this,move env var
        })
    }
    async validate(payload:any){
        //const user=await this.userService.login(payload.sub)
        return {
            id:payload.sub,
            name:payload.name,
        }
    }
}