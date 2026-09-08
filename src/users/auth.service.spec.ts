// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthService } from './auth.service';
// import { UsersService } from './users.service';

import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";


  describe('AuthService',()=>{

    let service : AuthService;
    let fakeUsersService : Partial<UsersService>;


    beforeEach(async () =>{


      // Mock Implementation of UsersService
   
      fakeUsersService = {
        isEmailTaken: (email) => Promise.resolve([]),
        create : (email:string,password:string) => Promise.resolve({id:1,email,password})
      }

      const module  = await Test.createTestingModule({

         providers:[AuthService,{
            provide:UsersService,
            useValue:fakeUsersService
         }]
      }).compile();

      service = module.get(AuthService);
  })

    
  it('can create an instance of AuthService', async () => {
      expect(service).toBeDefined();
  })


  // 3rd test
  it('throws an error if the email is already taken',async ()=>{


    // npx jest auth.service.spec.ts -t "create a new user with a salted and hashed password"

    fakeUsersService.isEmailTaken = () => Promise.resolve([{ id: 1 } as User]);

    await expect(service.signup('ali','ali23@gmail.com','12345')).rejects.toThrow();

  });


  // 2nd test
  it('create a new user with a salted and hashed password',async ()=>{


    // npx jest auth.service.spec.ts -t "create a new user with a salted and hashed password"

    const user = await service.signup('ali','ali23@gmail.com','12345')
    expect(user.password).not.toEqual('12345');

    const [salt,hash] = user.password.split('.');

    expect(salt).toBeDefined();

    expect(hash).toBeDefined();

  });




  })