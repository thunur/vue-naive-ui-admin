import type { LocaleSetting, LocaleType } from '#/config';

import { defineStore } from 'pinia';
import { store } from '@/store';
import { zhCN, dateZhCN, NLocale, NDateLocale } from 'naive-ui';

import { LOCALE_KEY } from '@/enums/cacheEnum';
import { createLocalStorage } from '@/utils/cache';
import { localeSetting } from '@/settings/localeSetting';

const ls = createLocalStorage();

const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;

interface LocaleState {
  localInfo: LocaleSetting;
}

interface NaiveLocale {
  locale: NLocale;
  dateLocale: NDateLocale;
}

export const useLocaleStore = defineStore({
  id: 'app-locale',
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting,
  }),
  getters: {
    getShowPicker(): boolean {
      return !!this.localInfo?.showPicker;
    },
    getLocale(): LocaleType {
      return this.localInfo?.locale ?? 'zh_CN';
    },
    getNaiveLocale(): NaiveLocale | null {
      return this.getLocale === 'zh_CN'
        ? {
            locale: zhCN,
            dateLocale: dateZhCN,
          }
        : null;
    },
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info };
      ls.set(LOCALE_KEY, this.localInfo);
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo,
      });
    },
  },
});

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
