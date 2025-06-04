"use client";

import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/authProvider";
import Middleware from "./middleware";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <Auth>
          <Middleware>{children}</Middleware>
        </Auth>
      </Authenticator.Provider>
    </StoreProvider>
  );
};

export default Providers;
