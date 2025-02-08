import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
  IsArray,
  ArrayMinSize,
  IsUrl,
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

  @IsPhoneNumber('BD')
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  joinDate: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  confirmPassword: string;

  @IsString()
  @IsNotEmpty()
  permanentAddress: string;

  @IsString()
  @IsNotEmpty()
  currentAddress: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  @IsUrl({}, { each: true })
  @IsOptional()
  documentUpload?: string[];

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  userPhoto: string;

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
  @IsNotEmpty()
  emergencyContact: string;
}
