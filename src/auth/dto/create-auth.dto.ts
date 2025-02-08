import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export enum UserRole {
  ADMIN = 'Admin',
  USER = 'User',
}

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsPhoneNumber('BD') // Change 'BD' if needed
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  joinDate: string; // Consider using Date if working with timestamps

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  @Matches(/^.*$/, {
    message: 'Passwords do not match',
    context: {
      validate: (value: string, dto: CreateAuthDto) => value === dto.password,
    },
  })
  confirmPassword: string;

  @IsString()
  @IsNotEmpty()
  permanentAddress: string;

  @IsString()
  @IsNotEmpty()
  currentAddress: string;

  @IsObject()
  @IsOptional()
  documentUpload?: object;

  @IsObject()
  @IsOptional()
  userPhoto?: object;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsEnum(UserRole)
  @IsNotEmpty()
  role: UserRole;

  @IsPhoneNumber('BD')
  @IsOptional()
  othersPhoneNumber?: string;

  @IsPhoneNumber('BD')
  @IsOptional()
  emergencyContact?: string;
}
