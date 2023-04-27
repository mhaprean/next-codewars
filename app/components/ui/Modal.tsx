'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import Button from './Button';

interface IPropsModal {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal = ({
  isOpen,
  onClose = () => {},
  onSubmit = () => {},
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: IPropsModal) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0
          top-0
          left-0
          h-screen
          w-screen
          z-50 
          outline-none 
          focus:outline-none
          bg-gray-500/70
          dark:bg-black/60
          backdrop-blur-sm
        "
        onClick={handleClose}
      >
        <div
          className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          h-full
          mx-auto
          lg:h-auto
          md:h-auto
          "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-200
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-[-200px]'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
          >
            <div
              className="
              translate
              lg:h-auto
              md:h-auto
              border-0 
              rounded-0
              md:rounded-md
              shadow-md 
              relative 
              flex 
              flex-col 
              w-full 
              h-full
              bg-white
              dark:bg-gray-700
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                justify-between
                p-6
                rounded-t
                border-b-[1px]
                border-gray-300
                dark:border-gray-500
                "
              >
                <div className="text-lg font-bold">{title}</div>
                <button
                  className="
                    p-1
                    border
                    rounded-full
                    hover:opacity-70
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6">{body}</div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction} outline />
                  )}
                  <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
