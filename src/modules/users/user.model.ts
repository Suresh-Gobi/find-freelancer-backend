import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column
  address_street01: string;

  @Column
  address_street02: string;

  @Column
  city: string;

  @Column
  district: string;

  @Column
  province: string;

  @Column
  phone_number: string;

  @Column
  nic_no: string;

  @Column
  password: string;
}
