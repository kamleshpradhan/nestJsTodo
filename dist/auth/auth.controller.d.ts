import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginUser(login: LoginDto): Promise<{
        access_token: string;
    }>;
}
