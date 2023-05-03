import { create } from 'zustand';

interface IAppThemeStore {
  isDark: boolean;
  setDark: () => void;
  setLight: () => void;
}

const useAppTheme = create<IAppThemeStore>((set) => ({
  isDark: false,
  setDark: () => set({ isDark: true }),
  setLight: () => set({ isDark: false }),
}));

export default useAppTheme;
