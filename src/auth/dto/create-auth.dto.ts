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
  IsNumber,
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
  joinDate: Date;

  @IsString()
  @IsNotEmpty()
  designation: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @IsEnum(['Male', 'Female', 'Other'])
  gender: 'Male' | 'Female' | 'Other';

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  confirmPassword: string;

  @IsNumber()
  @IsNotEmpty()
  companyId: number;

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

  @IsNumber()
  @IsNotEmpty()
  departmentId: number;

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
