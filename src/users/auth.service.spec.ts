import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let authService: AuthService;


  const fakeUserService = {

      find:() => Promise.resolve([]),
      create: (email: string, name: string, password: string) => Promise.resolve({id: 1, email, name, password}),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('can create an instance of AuthService', () => {
    expect(authService).toBeDefined();
  });
});
