import { useAppSelector } from "./use-store";

export default function useSidebarRightHook() {
  const user = useAppSelector((state) => state.auth);

  return {
    user,
  };
}
