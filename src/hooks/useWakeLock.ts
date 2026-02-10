import { useEffect, useRef, useState } from "react";

export function useWakeLock() {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsSupported("wakeLock" in navigator);
  }, []);

  const requestWakeLock = async () => {
    if (!isSupported) return;

    try {
      wakeLockRef.current = await navigator.wakeLock!.request("screen");
      setIsActive(true);

      // Re-acquire wake lock if user switches tabs and comes back
      wakeLockRef.current.addEventListener("release", () => {
        setIsActive(false);
      });
    } catch (err) {
      console.error("Wake Lock error:", err);
    }
  };

  const releaseWakeLock = async () => {
    if (wakeLockRef.current) {
      await wakeLockRef.current.release();
      wakeLockRef.current = null;
      setIsActive(false);
    }
  };

  // Auto-request on mount, release on unmount
  useEffect(() => {
    requestWakeLock();

    // Re-acquire when page becomes visible
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      releaseWakeLock();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isSupported]);

  return { isSupported, isActive, requestWakeLock, releaseWakeLock };
}
