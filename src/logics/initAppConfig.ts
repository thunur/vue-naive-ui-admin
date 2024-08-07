/**
 * Application configuration
 */
import type { ProjectConfig } from '#/config';

import { PROJ_CFG_KEY } from '@/enums/cacheEnum';
import projectSetting from '@/settings/projectSetting';

// import { updateHeaderBgColor, updateSidebarBgColor } from '@/logics/theme/updateBackground';
// import { updateColorWeak } from '@/logics/theme/updateColorWeak';
// import { updateGrayMode } from '@/logics/theme/updateGrayMode';
// import { updateDarkTheme } from '@/logics/theme/dark';
// import { changeTheme } from '@/logics/theme';

import { useAppStore } from '@/store/modules/app';
import { useLocaleStore } from '@/store/modules/locale';

import { getCommonStoragePrefix, getStorageShortName } from '@/utils/env';

// import { primaryColor } from '../../build/config/themeConfig';
import { Persistent } from '@/utils/cache/persistent';
import { deepMerge } from '@/utils';
import { cloneDeep } from 'lodash-es';
// import { ThemeEnum } from '@/enums/appEnum';

// Initial project configuration
export function initAppConfigStore() {
  const localeStore = useLocaleStore();
  const appStore = useAppStore();
  let projCfg: ProjectConfig = Persistent.getLocal(PROJ_CFG_KEY) as ProjectConfig;
  projCfg = deepMerge(cloneDeep(projectSetting), projCfg || {});

  appStore.setProjectConfig(projCfg);

  localeStore.initLocale();

  setTimeout(() => {
    clearObsoleteStorage();
  }, 16);
}

/**
 * As the version continues to iterate, there will be more and more cache keys stored in localStorage.
 * This method is used to delete useless keys
 */
export function clearObsoleteStorage() {
  const commonPrefix = getCommonStoragePrefix();
  const shortPrefix = getStorageShortName();

  [localStorage, sessionStorage].forEach((item: Storage) => {
    Object.keys(item).forEach((key) => {
      if (key && key.startsWith(commonPrefix) && !key.startsWith(shortPrefix)) {
        item.removeItem(key);
      }
    });
  });
}
