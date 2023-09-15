export const exceptionHandler = (error) => {

  console.log("🚀 ~ file: createAccount.ts:9 ~ error", { error });
  if (error.response) {
    console.log(error.response.data);

    return {
      error: error.response.data,
    };
  } else if (error.request) {
    console.log(error.request);
    return {
      error: error.request,
    };
  }
  // Something happened in setting up the request that triggered an Error
  console.log("Error", error.message);
  return {
    error: {
      message: "Error Application",
    },
  };
}

