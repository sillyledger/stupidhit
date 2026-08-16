"use client";

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-bone px-4 py-2 text-xs font-semibold text-void shadow-none"
      style={{ animation: "toast-in 0.15s ease-out" }}
      role="status"
    >
      {message}
    </div>
  );
}
