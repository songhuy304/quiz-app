import React, { createContext, useContext, useState, ReactNode, JSX, Fragment } from 'react';

// Interface cho modal
interface ModalProps {
  title: string;
  content?: string;
  onOk?: () => void;
  onCancel?: () => void;
  component?: ReactNode | JSX.Element;
}

interface ModalContextType {
  showModal: (options: ModalProps) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Hook để sử dụng context
// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (options: ModalProps) => {
    setModalProps(options);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalProps(null);
  };

  const handleOk = () => {
    if (modalProps?.onOk) modalProps.onOk();
    closeModal();
  };

  const handleCancel = () => {
    if (modalProps?.onCancel) modalProps.onCancel();
    closeModal();
  };

  return (
    <ModalContext.Provider value={{ showModal }}>
      {children}
      {isOpen && modalProps && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2>{modalProps.title}</h2>
            {modalProps.content && <p>{modalProps.content}</p>}
            {modalProps.component && <Fragment>{modalProps.component}</Fragment>}
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={handleCancel} className="bg-gray-300 px-4 py-2 rounded">
                Cancel
              </button>
              <button onClick={handleOk} className="bg-blue-500 text-white px-4 py-2 rounded">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
