import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import "../assets/styles/toast.css";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  exiting?: boolean;
}

const ICONS: Record<ToastType, string> = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
};

const TITLES: Record<ToastType, string> = {
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Info",
};

let toastIdCounter = 0;
let addToastFn: ((toast: Omit<ToastItem, "id">) => void) | null = null;

/** Toast container component — renders all active toasts */
const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    addToastFn = (toast) => {
      const id = ++toastIdCounter;
      setToasts((prev) => [...prev, { ...toast, id }]);

      // Auto-dismiss after 3s
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
        );
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 300);
      }, 3000);
    };

    return () => {
      addToastFn = null;
    };
  }, []);

  const dismiss = (id: number) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  };

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.type}${t.exiting ? " exiting" : ""}`}>
          <span className="toast-icon">{ICONS[t.type]}</span>
          <div className="toast-body">
            <div className="toast-title">{TITLES[t.type]}</div>
            <div className="toast-message">{t.message}</div>
          </div>
          <button className="toast-close" onClick={() => dismiss(t.id)}>✕</button>
          <div className="toast-progress" />
        </div>
      ))}
    </div>
  );
};

/** Initialize toast container — call once at app startup */
let initialized = false;
function ensureContainer() {
  if (initialized) return;
  initialized = true;

  let container = document.getElementById("toast-root");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-root";
    document.body.appendChild(container);
  }
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(ToastContainer));
}

/** Public API — drop-in replacement for window.alert */
const toast = {
  success(message: string) {
    ensureContainer();
    setTimeout(() => addToastFn?.({ message, type: "success" }), 0);
  },
  error(message: string) {
    ensureContainer();
    setTimeout(() => addToastFn?.({ message, type: "error" }), 0);
  },
  warning(message: string) {
    ensureContainer();
    setTimeout(() => addToastFn?.({ message, type: "warning" }), 0);
  },
  info(message: string) {
    ensureContainer();
    setTimeout(() => addToastFn?.({ message, type: "info" }), 0);
  },
  /** Auto-detect type from message content */
  show(message: string) {
    const lower = message.toLowerCase();
    if (lower.includes("success") || lower.includes("added") || lower.includes("placed") || lower.includes("verified") || lower.includes("deleted") || lower.includes("updated") || lower.includes("resent")) {
      toast.success(message);
    } else if (lower.includes("fail") || lower.includes("error") || lower.includes("wrong") || lower.includes("expired")) {
      toast.error(message);
    } else if (lower.includes("please") || lower.includes("login") || lower.includes("fill")) {
      toast.warning(message);
    } else {
      toast.info(message);
    }
  },
};

export default toast;
