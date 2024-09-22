import { Dispatch, SetStateAction } from "react";
import { LocalStorageKeys } from "../enum/LocalStorageKeys.enum";

interface Params {
  setLoading?: Dispatch<SetStateAction<boolean>>;
  action: (token: string | null) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export async function requestAction({
  setLoading,
  action,
  onSuccess,
  onError,
}: Params) {
  try {
    if (setLoading) setLoading(true);
    const token = localStorage.getItem(LocalStorageKeys.TOKEN);
    await action(token);
    if (onSuccess) onSuccess();
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  } finally {
    if (setLoading) setLoading(false);
  }
}
