import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  departmentID: number;

  @OneToOne(() => Employee, (employee) => employee.departmentId)
  @Column()
  companyID: number;

  @Column({ length: 100 })
  departmentName: string;

  @Column({ length: 50, unique: true })
  departmentCode: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
