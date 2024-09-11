import { createContext } from "react";

interface ModalContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps,
);

export default function ModalPostProvider({
  children,
  stateClosure,
}: {
  stateClosure: ModalContextProps;
  children: JSX.Element;
}) {
  return (
    <ModalContext.Provider value={stateClosure}>
      {children}
    </ModalContext.Provider>
  );
}
