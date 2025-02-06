import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  DepartmentID: number;

  @Column()
  CompanyID: number;

  @Column({ length: 100 })
  DepartmentName: string;

  @Column({ length: 50, unique: true })
  DepartmentCode: string;

  @CreateDateColumn({ type: 'timestamp' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  UpdatedAt: Date;
}
