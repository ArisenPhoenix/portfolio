const FETCH = async (
  api_route,
  method,
  body,
  functionThatCalled,
  nameOfData
) => {
  // functionThatCalled &&
  //   console.log(`${functionThatCalled} is fetching using the ${method} method`);
  const m = method.toUpperCase();
  const b = body ? body : null;
  try {
    const response = await fetch(api_route, {
      method: m.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: m === "GET" ? null : JSON.stringify(b),
    });
    if (
      !response.ok ||
      response.err ||
      response.error ||
      response.status == 400 ||
      response.status == 500
    ) {
      return { err: response };
    }
    const data = await response.json();
    nameOfData && console.log(`Enjoy the ${nameOfData}`);
    return data;
  } catch (err) {
    console.log(
      functionThatCalled
        ? `ERROR IN FETCH CATCH | Called By: ${functionThatCalled}`
        : "",
      err
    );
    return { error: err };
  }
};

export default FETCH;
