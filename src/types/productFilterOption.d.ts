export type productFilterOption = {
  label: string;
  options: option[];
};

export type option = {
  name: string;
  url: string;
  checked?: boolean;
  price?: {
    min?: number;
    max?: number;
  };
};
