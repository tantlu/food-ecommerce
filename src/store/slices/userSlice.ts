import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleRequest } from "@/helpers/handleAsync";
import { uiSliceActions } from "./uiSlice";
import { type } from "os";
import { User, UserAddress } from "@/types/user";
import accountService, {
  LoginPayload,
  RegisterPayload,
} from "@/services/accountService";
import { Toast } from "@chakra-ui/react";

// state type

export type UserState = {
  access_token?: string;
  userData?: User;
};

// payload type
export type addTokenPayload = {
  newValue: string;
};

// init state
const initialState: UserState = {};

// thunk action
const Login = createAsyncThunk<unknown, LoginPayload>(
  "user/Login",
  async (arg, thunk) => {
    thunk.dispatch(uiSliceActions.startLoading());
    const [LoginRes, LoginError] = await handleRequest(
      accountService.login(arg)
    );
    if (LoginError) {
      thunk.dispatch(uiSliceActions.endLoading());

      Toast({
        title: "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    thunk.dispatch(userSliceActions.addToken(LoginRes!!.access_token));

    const [accountRes, accountError] = await handleRequest(
      accountService.getAccount()
    );
    if (accountError) {
      thunk.dispatch(uiSliceActions.endLoading());

      Toast({
        title: "An error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    thunk.dispatch(userSliceActions.addUserData(accountRes!!));
    thunk.dispatch(uiSliceActions.endLoading());
  }
);

//thunk action register
const Register = createAsyncThunk<unknown, RegisterPayload>(
  "user/Register",
  async (arg, thunk) => {
    thunk.dispatch(uiSliceActions.startLoading());
    const [RegisterRes, RegisterError] = await handleRequest(
      accountService.register(arg)
    );
    if (RegisterError) {
      thunk.dispatch(uiSliceActions.endLoading());

      Toast({
        title: "Account create fail",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    thunk.dispatch(userSliceActions.addToken(RegisterRes!!.access_token));
    thunk.dispatch(uiSliceActions.endLoading());
  }
);

// slice create
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state: UserState, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    addUserData: (state: UserState, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    logoutUser: (state: UserState) => {
      state.userData = undefined;
      state.access_token = undefined;
    },
  },
  extraReducers(builder) {
    // builder.addCase(asyncExample.fulfilled, (state, action) => {
    // state.keyName = action.payload;
    // });
  },
});

// normal flow action
export const userSliceActions = {
  ...UserSlice.actions,
  Login,
  Register,
};

// export
export default UserSlice.reducer;
