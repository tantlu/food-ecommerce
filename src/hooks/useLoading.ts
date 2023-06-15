import React, { useState } from "react";

export default function useLoading() {
  const [isLoading, setisLoading] = useState<boolean>(false);
  return isLoading;
}
