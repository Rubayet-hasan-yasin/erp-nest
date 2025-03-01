import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { DataSource, QueryFailedError, Repository } from 'typeorm';
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
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    try {
      console.log(createAuthDto);
      const existingUser = await this.usersRepository.findOne({
        where: { email: createAuthDto.email },
      });

      if (existingUser) {
        throw new ConflictException('Email already exists');
      }

      const newUser = new User();
      newUser.firstName = createAuthDto.firstName;
      newUser.lastName = createAuthDto.lastName;
      newUser.email = createAuthDto.email;
      newUser.gender = createAuthDto.gender;
      newUser.userPhotoURL = createAuthDto.userPhoto;
      newUser.password = createAuthDto.password;
      newUser.phone = createAuthDto.phone;

      const newEmployee = new Employee();
      newEmployee.companyId = createAuthDto.companyId;
      newEmployee.firstName = createAuthDto.firstName;
      newEmployee.lastName = createAuthDto.lastName;
      newEmployee.email = createAuthDto.email;
      newEmployee.joinDate = createAuthDto.joinDate;
      newEmployee.designation = createAuthDto.designation;
      newEmployee.departmentId = createAuthDto.departmentId;
      newEmployee.gender = createAuthDto.gender;
      newEmployee.userPhotoURL = createAuthDto.userPhoto;
      newEmployee.phone = createAuthDto.phone;
      newEmployee.emergencyContact = createAuthDto.emergencyContact;
      newEmployee.othersPhoneNumber = createAuthDto.othersPhoneNumber as string;
      newEmployee.currentAddress = createAuthDto.currentAddress;
      newEmployee.permanentAddress = createAuthDto.permanentAddress;

      newUser.employee = newEmployee;

      await this.employeesRepository.save(newEmployee);

      return {
        message: 'User created successfully',
        user: newUser,
      };
    } catch (error) {
      if (error instanceof QueryFailedError) {
        const pgError = error as QueryFailedError & { code: string };

        if (pgError.code === '23505') {
          throw new ConflictException('Email already exists');
        }
      }

      throw error;
    }
  }

  findAll() {
    return this.employeesRepository.find();
  }
}
