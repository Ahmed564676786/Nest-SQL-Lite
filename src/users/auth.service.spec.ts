import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';


  // describe('AuthService',()=>{

  //   let service : AuthService;
  //   let fakeUsersService : Partial<UsersService>;


  //   beforeEach(async () =>{


  //     // Mock Implementation of UsersService
   
  //     fakeUsersService = {
  //       isEmailTaken: (email) => Promise.resolve([]),
  //       create : (email:string,password:string) => Promise.resolve({id:1,email,password})
  //     }

  //     const module  = await Test.createTestingModule({

  //        providers:[AuthService,{
  //           provide:UsersService,
  //           useValue:fakeUsersService
  //        }]
  //     }).compile();

  //     service = module.get(AuthService);
  // })

    
  // it('can create an instance of AuthService', async () => {
  //     expect(service).toBeDefined();
  // })


  // // 3rd test
  // it('throws an error if the email is already taken',async ()=>{


  //   // npx jest auth.service.spec.ts -t "throws an error if the email is already taken"

  //   fakeUsersService.isEmailTaken = () => Promise.resolve([{ id: 1 } as User]);

  //   await expect(service.signup('ali','ali23@gmail.com','12345')).rejects.toThrow();

  // });


  // // 2nd test
  // it('create a new user with a salted and hashed password',async ()=>{


  //   // npx jest auth.service.spec.ts -t "create a new user with a salted and hashed password"

  //   const user = await service.signup('ali','ali23@gmail.com','12345')
  //   expect(user.password).not.toEqual('12345');

  //   const [salt,hash] = user.password.split('.');

  //   expect(salt).toBeDefined();

  //   expect(hash).toBeDefined();

  // });




  // })



describe('AuthService', () => {

  let service: AuthService;


  const fakeUsersService: Partial<UsersService> = {
    create: jest.fn().mockResolvedValue({ id: 1 }),
    isEmailTaken: jest.fn().mockResolvedValue(null),
  };

  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    await service.signup('Test User', 'test@example.com', 'password');

    const createMock = fakeUsersService.create as jest.Mock;

    // Get the first argument passed to create()
    const createdUser = createMock.mock.calls[0][0];

    console.log('Created user:', createdUser);
    console.log('Password:', createdUser.password);

    expect(createdUser.name).toBe('Test User');
    expect(createdUser.email).toBe('test@example.com');

    // Password should not be the original password
    expect(createdUser.password).not.toBe('password');

    // Should contain salt.hash
    const [salt, hash] = createdUser.password.split('.');

    expect(salt).toBeDefined();
    expect(hash).toBeDefined();

    expect(salt).not.toBe('');
    expect(hash).not.toBe('');
  });
});