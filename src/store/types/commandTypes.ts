export const createCommandTypes = {
  SET_CREATE_COMMAND: "COMMAND/SET_CREATE_COMMAND",
  SET_CREATE_COMMAND_LOADING: "COMMAND/SET_CREATE_COMMAND_LOADING",
  SET_CREATE_COMMAND_ERROR: "COMMAND/SET_CREATE_COMMAND_ERROR"
};

export const createProductInCommandTypes = {
  SET_CREATE_PRODUCT_IN_COMMAND: "COMMAND/SET_CREATE_PRODUCT_IN_COMMAND",
  SET_CREATE_PRODUCT_IN_COMMAND_LOADING:
    "COMMAND/SET_CREATE_PRODUCT_IN_COMMAND_LOADING",
  SET_CREATE_PRODUCT_IN_COMMAND_ERROR:
    "COMMAND/SET_CREATE_PRODUCT_IN_COMMAND_ERROR"
};

export const addProductInCommandTypes = {
  SET_ADD_PRODUCT_IN_COMMAND: "COMMAND/SET_ADD_PRODUCT_IN_COMMAND",
  SET_ADD_PRODUCT_IN_COMMAND_LOADING:
    "COMMAND/SET_ADD_PRODUCT_IN_COMMAND_LOADING",
  SET_ADD_PRODUCT_IN_COMMAND_ERROR: "COMMAND/SET_ADD_PRODUCT_IN_COMMAND_ERROR"
};

// interfaces
export interface ICommand {
  nameProduct: string;
  product: number;
  options: string;
  quantity: number;
  priceUnit: number;
  total: number;
}

export interface IPanier {
  nameProduct: string;
  product: number;
  options: string;
  quantity: number;
  priceUnit: number;
  total: number;
}
