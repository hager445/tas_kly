import Button from "./Button";
import { getUser } from "@/app/_lib/auth/data-service";
import UserAvatar from "./UserAvatar";
type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    department: string;
    email: string;
    email_verified: boolean;
    name: string;
    phone_verified: boolean;
    sub: string;
  };
  identities: {
    identity_id: string;
    id: string;
    user_id: string;
    identity_data: Record<string, unknown>;
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
    email: string;
  }[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
export default async function UserLogo() {
  const user: User = await getUser();
  console.log(user);
  return (
    <div className="w-nav-item flex gap-4 items-center ">
      <div className="">
        <p className="text-neutral-dark text-nowrap text-body-md font-title-md capitalize">
          {user?.user_metadata.name}
        </p>
        <p className="text-primary text-label-xs font-label-xs uppercase">
          {user?.user_metadata.department}
        </p>
      </div>
      {/* ========== */}
      <UserAvatar userName={user?.user_metadata.name} />
    </div>
  );
}
