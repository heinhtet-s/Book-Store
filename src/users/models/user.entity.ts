import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
  @Column({
    default: false,
  })
  public: boolean;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
