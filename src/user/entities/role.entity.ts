import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum RoleName {
  ADMIN = 'Admin',
  EMPLOYEE = 'Employee',
  HR = 'HR',
  MANAGER = 'Manager',
}

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  RoleID: number;

  @Column({ type: 'enum', enum: RoleName })
  RoleName: RoleName;

  @CreateDateColumn({ type: 'timestamp' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  UpdatedAt: Date;
}
