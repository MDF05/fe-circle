import { createContext } from "react";

interface EditProfProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any;
}

export const EditProfileContext = createContext({} as EditProfProps);

export default function ModalEditProvileProvider({
  children,
  stateClosure,
}: {
  stateClosure: EditProfProps;
  children: JSX.Element;
}) {
  return (
    <EditProfileContext.Provider value={stateClosure}>
      {children}
    </EditProfileContext.Provider>
  );
}
