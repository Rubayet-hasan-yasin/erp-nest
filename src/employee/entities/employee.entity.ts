import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  EmployeeID: number;

  @OneToOne(() => User, (user) => user.Employee)
  @JoinColumn({ name: 'UserID' })
  User: User;

  @Column()
  CompanyID: number;

  @Column({ length: 100 })
  FirstName: string;

  @Column({ length: 100 })
  LastName: string;

  @Column({ unique: true, length: 255 })
  Email: string;

  @Column({ length: 20, nullable: true })
  Phone: string;

  @Column({ type: 'date' })
  JoinDate: Date;

  @Column({ length: 100 })
  Designation: string;

  @Column()
  DepartmentID: number;

  @Column({ type: 'enum', enum: ['Male', 'Female', 'Other'] })
  Gender: 'Male' | 'Female' | 'Other';

  @Column({ unique: true, length: 50 })
  NIDNumber: string;

  @Column({ type: 'text', nullable: true })
  UserPhotoURL: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
  leaveBalances: any;
}
