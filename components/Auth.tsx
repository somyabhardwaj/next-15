"use client";

import { useEffect, useState } from "react";

export default function ClientProvider({
  auth,
  app,
}: {
  auth: React.ReactNode;
  app: React.ReactNode;
}) {
  const [hasToken, setHasToken] = useState<boolean | null>(null);

  useEffect(() => {
    localStorage.setItem("auth-token","5545454");
    const token = localStorage.getItem("auth-token");
    setHasToken(!!token);
  }, []);

  if (hasToken === null) {
    // Optional: you can return a loading spinner here
    return <div>Loading...</div>;
  }

  return <>{hasToken ? auth:app }</>;
}
