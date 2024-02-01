export interface IErrorMessages {
    required: (field: string) => string;
    minlength: (field: string, minlength: number) => string;
    maxlength: (field: string, maxlength: number) => string;
    min: (field: string, minval: number) => string;
    max: (field: string, maxval: number) => string;
  }