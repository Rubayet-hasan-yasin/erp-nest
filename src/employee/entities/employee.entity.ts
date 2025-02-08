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
  employeeID: number;

  @OneToOne(() => User, (user) => user.employee)
  @JoinColumn({ name: 'UserID' })
  user: User;

  @Column()
  companyID: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column({ type: 'date' })
  joinDate: Date;

  @Column({ length: 100 })
  designation: string;

  @Column()
  departmentID: number;

  @Column({ type: 'enum', enum: ['Male', 'Female', 'Other'] })
  gender: 'Male' | 'Female' | 'Other';

  @Column({ unique: true, length: 50 })
  nIDNumber: string;

  @Column({ type: 'text', nullable: true })
  userPhotoURL: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  leaveBalances: any;
}
