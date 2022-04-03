import { RouteLocationNormalized } from 'vue-router';

/**
 * 获取该页签在多页签数据中的索引
 * @param tabs - 多页签数据
 * @param path - 该页签的路径
 */
export function getIndexInTabRoutes(tabs: RouteLocationNormalized[], path: string) {
  return tabs.findIndex((tab) => tab.path === path);
}

/**
 * 判断该页签是否在多页签数据中
 * @param tabs - 多页签数据
 * @param path - 该页签的路径
 */
export function isInTabRoutes(tabs: RouteLocationNormalized[], path: string) {
  return getIndexInTabRoutes(tabs, path) > -1;
}
