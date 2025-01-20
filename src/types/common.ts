export interface Benefit {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface Plan {
  type: 'individual' | 'family' | 'business';
  title: string;
  description: string;
  link: string;
  buttonText: string;
  image: string;
  overlayColor: string;
}

export interface BankInfo {
  bank: string;
  agency: string;
  account: string;
  accountType: 'corrente' | 'poupanca';
}

export interface UserInfo {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
}

export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}
