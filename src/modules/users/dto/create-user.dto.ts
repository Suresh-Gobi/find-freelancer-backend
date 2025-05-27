export class CreateUserDto {
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly address_street01: string;
  readonly address_street02?: string;
  readonly city: string;
  readonly district: string;
  readonly province: string;
  readonly phone_number: string;
  readonly nic_no: string;
  readonly password: string;
}
