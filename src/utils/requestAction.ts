import { Dispatch, SetStateAction } from "react";
import { LocalStorageKeys } from "../enum/LocalStorageKeys.enum";

interface Params {
  setLoading?: Dispatch<SetStateAction<boolean>>;
  action: (token: string | null) => Promise<void>;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
  onInit?: () => void;
  onEnd?: () => void;
}

export async function requestAction({
  setLoading,
  action,
  onSuccess,
  onError,
  onInit,
  onEnd,
}: Params) {
  try {
    if (setLoading) setLoading(true);
    if (onInit) onInit();

    const token = localStorage.getItem(LocalStorageKeys.TOKEN);
    await action(token);
    
    if (onSuccess) onSuccess();
  } catch (error) {
    console.log(error);
    if (onError) onError(error);
  } finally {
    if (setLoading) setLoading(false);
    if (onEnd) onEnd();
  }
}
