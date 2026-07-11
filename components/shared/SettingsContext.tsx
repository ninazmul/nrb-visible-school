"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ISettingSafe } from "@/lib/database/models/setting.model";
import { getSetting } from "@/lib/actions/setting.actions";

interface SettingsContextValue {
  settings: ISettingSafe | null;
  loading: boolean;
}

const SettingsContext = createContext<SettingsContextValue>({
  settings: null,
  loading: true,
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<ISettingSafe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchSettings = async () => {
      try {
        const setting = await getSetting();
        if (!cancelled) {
          setSettings(setting);
        }
      } catch (err) {
        console.error("Settings load failed", err);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchSettings();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  return useContext(SettingsContext);
}
