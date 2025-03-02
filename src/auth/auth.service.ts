import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { QueryFailedError, Repository, DataSource } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'src/employee/entities/employee.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,

    private readonly dataSource: DataSource,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction(); // Start transaction

    try {
      const existingUser = await queryRunner.manager.findOne(User, {
        where: { email: createAuthDto.email },
      });

      if (existingUser) {
        throw new ConflictException('Email already exists');
      }

      // Create new User
      const newUser = new User();
      newUser.firstName = createAuthDto.firstName;
      newUser.lastName = createAuthDto.lastName;
      newUser.email = createAuthDto.email;
      newUser.gender = createAuthDto.gender;
      newUser.userPhotoURL = createAuthDto.userPhoto;
      newUser.password = createAuthDto.password;
      newUser.phone = createAuthDto.phone;

      // Save User first and ensure it's saved correctly
      const savedUser = await queryRunner.manager.save(User, newUser);
      if (!savedUser || !savedUser.userID) {
        throw new InternalServerErrorException('User not saved properly');
      }

      console.log('Saved User:', savedUser); // Debugging check

      // Create new Employee
      const newEmployee = new Employee();
      newEmployee.user = savedUser; // Associate User with Employee
      newEmployee.companyId = createAuthDto.companyId;
      newEmployee.firstName = createAuthDto.firstName;
      newEmployee.lastName = createAuthDto.lastName;
      newEmployee.email = createAuthDto.email;
      newEmployee.joinDate = new Date(createAuthDto.joinDate);
      newEmployee.designation = createAuthDto.designation;
      newEmployee.departmentId = createAuthDto.departmentId;
      newEmployee.gender = createAuthDto.gender;
      newEmployee.userPhotoURL = createAuthDto.userPhoto;
      newEmployee.phone = createAuthDto.phone;
      newEmployee.emergencyContact = createAuthDto.emergencyContact;
      newEmployee.othersPhoneNumber = createAuthDto.othersPhoneNumber as string;
      newEmployee.currentAddress = createAuthDto.currentAddress;
      newEmployee.permanentAddress = createAuthDto.permanentAddress;

      // Explicitly setting the userID in Employee to ensure linkage
      newEmployee.user = savedUser;

      // Save Employee
      const savedEmployee = await queryRunner.manager.save(
        Employee,
        newEmployee,
      );

      if (!savedEmployee) {
        throw new InternalServerErrorException('Employee not saved');
      }

      console.log('Saved Employee:', savedEmployee); // Debugging check

      // Commit transaction only if both saves succeed
      await queryRunner.commitTransaction();

      return {
        message: 'User created successfully',
        user: savedEmployee,
      };
    } catch (error: unknown) {
      // Ensure rollback if any step fails
      await queryRunner.rollbackTransaction();
      console.error('Error creating user and employee:', error);

      // Handle known errors
      if (error instanceof QueryFailedError) {
        const pgError = error as QueryFailedError & { code: string };

        if (pgError.code === '23505') {
          throw new ConflictException('Email already exists');
        }
      } else if (error instanceof ConflictException) {
        throw error;
      }

      if (error instanceof Error) {
        throw new InternalServerErrorException({
          message: 'User creation failed',
          error: error.message,
        });
      } else {
        throw new InternalServerErrorException({
          message: 'User creation failed',
          error: String(error),
        });
      }
    } finally {
      await queryRunner.release(); // Release query runner
    }
  }

  findAll() {
    return this.employeesRepository.find();
  }
}
