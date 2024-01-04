import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const SettingPage = () => {
  return (
    <div>
      <p>SettingPage</p>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit">SignOut</Button>
      </form>
    </div>
  );
};

export default SettingPage;
