import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

describe('UsersController', () => {
  let controller: UsersController;

  let fakeUserService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {


    fakeUserService = {
      findAll: jest.fn(W),
    };

    fakeAuthService = {
      
      signup: jest.fn().mockResolvedValue({
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
      }),

      
      signin: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUserService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it('creates a new user', async () => {
  const dto = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123',
  };

  const result = await controller.signup(dto);

  expect(result).toEqual({
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  });

  expect(fakeAuthService.signup).toHaveBeenCalledWith(
    'Test User',
    'test@example.com',
    'password123',
  );
  });
});