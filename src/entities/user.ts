import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('User_Auth')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ unique: true})
  email: string

  @Column()
  password: string

  @Column({ unique: true })
  username: string

  @CreateDateColumn({ type: 'timestamp' })
  dateCreated: Date

  @UpdateDateColumn({ type: 'timestamp' })
  dateUpdated: Date
}
