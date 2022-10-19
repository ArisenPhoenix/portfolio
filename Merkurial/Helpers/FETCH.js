const FETCH = async (api_route, method, body, functionThatCalled) => {
  functionThatCalled &&
    console.log(`${functionThatCalled} is fetching using the ${method} method`);
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
    if (response.err || response.error || response.status == 400) {
      console.log("IN FETCH RESPONSE: ", response);
      return response;
    }
    const data = await response.json();
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
