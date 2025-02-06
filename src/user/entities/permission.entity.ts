import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  PermissionID: number;

  @ManyToMany(() => Role, (role) => role.RoleID, { onDelete: 'CASCADE' })
  Role: Role;

  @Column({ type: 'varchar', length: 255 })
  PermissionName: string;

  @CreateDateColumn({ type: 'timestamp' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  UpdatedAt: Date;
}
