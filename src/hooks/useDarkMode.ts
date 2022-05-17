import { useDark, useToggle } from "@vueuse/core";

export const useDarkMode = () => {
  const isDark = useDark({
    storageKey: "vueuse-color-scheme",
  });
  const toggleDark = useToggle(isDark);

  // 给media添加change事件，发生变化时会触发
  // 经测试，如果不加这个，当按钮显示为深色时，切换系统颜色，并不会改变按钮字体
  const query = window.matchMedia(`(prefers-color-scheme: dark)`);
  query.onchange = (e) => {
    const mediaMatches = (e.target as MediaQueryList).matches;
    isDark.value = mediaMatches;
  };

  return {
    isDark,
    toggleDark,
  };
};
