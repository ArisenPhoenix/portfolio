import { useContext, useEffect, useState } from "react";
import USER_CONTEXT from "../store/Context/USER_CONTEXT/user_context";
import { useRouter } from "next/router";

const AUTH_GUARD = (props) => {
  const [canGo, setCanGo] = useState(false);
  const router = useRouter();
  const userCtx = useContext(USER_CONTEXT);
  const isAdmin = userCtx.isAdmin;
  const isLoggedIn = userCtx.isLoggedIn;
  const isWorker = userCtx.isWorker;
  const { needsAdmin, needsLoggedIn, needsWorker } = props;

  useEffect(() => {
    if (needsAdmin && isAdmin) {
      setCanGo(true);
    } else if (needsWorker && isWorker) {
      setCanGo(true);
    } else if (needsLoggedIn && isLoggedIn) {
      setCanGo(true);
    } else {
      router.push("/login");
    }
  }, [isAdmin, isLoggedIn, isWorker]);

  if (canGo) {
    return props.children;
  } else {
    return <h1>Loading</h1>;
  }
};

export default AUTH_GUARD;
