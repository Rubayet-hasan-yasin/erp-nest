import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column({ length: 100 })
  FirstName: string;

  @Column({ length: 100 })
  LastName: string;

  @Column({ unique: true, length: 255 })
  Email: string;

  @Column({ length: 20, nullable: true })
  Phone: string;

  @Column({ type: 'enum', enum: ['Male', 'Female', 'Other'] })
  Gender: 'Male' | 'Female' | 'Other';

  @Column({ type: 'text', nullable: true })
  UserPhotoURL: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @OneToOne(() => Employee, (employee) => employee.User)
  Employee: Employee;
}
