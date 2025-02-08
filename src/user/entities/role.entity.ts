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
  roleID: number;

  @Column({ type: 'enum', enum: RoleName })
  roleName: RoleName;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
