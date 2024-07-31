import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, (builder) => {
  builder.addCase("loginRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("loginSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  });
  builder.addCase("loginFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });

  builder.addCase("registerRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("registerSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;
  });
  builder.addCase("registerFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });

  builder.addCase("logoutRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("logoutSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
    state.message = action.payload;
  });
  builder.addCase("logoutFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.error = action.payload;
  });

  builder.addCase("loadUserRequest", (state) => {
    state.loading = true;
  });
  builder.addCase("loadUserSuccess", (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  });
  builder.addCase("loadUserFail", (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  });

  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});

// export const profileReducer = createReducer(
//   {},
//   {
//     updateProfileRequest: state => {
//       state.loading = true;
//     },
//     updateProfileSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     updateProfileFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     updateProfilePictureRequest: state => {
//       state.loading = true;
//     },
//     updateProfilePictureSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     updateProfilePictureFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     changePasswordRequest: state => {
//       state.loading = true;
//     },
//     changePasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     changePasswordFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     forgetPasswordRequest: state => {
//       state.loading = true;
//     },
//     forgetPasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     forgetPasswordFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     resetPasswordRequest: state => {
//       state.loading = true;
//     },
//     resetPasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     resetPasswordFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     removeFromAilistRequest: state => {
//       state.loading = true;
//     },
//     removeFromAilistSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     removeFromAilistFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     clearError: state => {
//       state.error = null;
//     },
//     clearMessage: state => {
//       state.message = null;
//     },
//   }
// );

// export const subscriptionReducer = createReducer(
//   {},
//   {
//     buySubscriptionRequest: state => {
//       state.loading = true;
//     },
//     buySubscriptionSuccess: (state, action) => {
//       state.loading = false;
//       state.subscriptionId = action.payload;
//     },
//     buySubscriptionFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     cancelSubscriptionRequest: state => {
//       state.loading = true;
//     },
//     cancelSubscriptionSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload;
//     },
//     cancelSubscriptionFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     clearError: state => {
//       state.error = null;
//     },
//     clearMessage: state => {
//       state.message = null;
//     },
//   }
// );
