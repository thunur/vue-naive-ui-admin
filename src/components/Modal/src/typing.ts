import type { ButtonProps } from 'naive-ui';
import type { CSSProperties, VNodeChild, ComputedRef } from 'vue';
/**
 * @description: 弹窗对外暴露的方法
 */
export interface ModalMethods {
  setModalProps: (props: Partial<ModalProps>) => void;
  emitShow?: (show: boolean, uid: number) => void;
  redoModalHeight?: () => void;
}

export type RegisterFn = (modalMethods: ModalMethods, uuid?: string) => void;

export interface ReturnMethods extends ModalMethods {
  openModal: <T = any>(props?: boolean, data?: T, openOnSet?: boolean) => void;
  closeModal: () => void;
  getShow?: ComputedRef<boolean>;
}

export type UseModalReturnType = [RegisterFn, ReturnMethods];

export interface ReturnInnerMethods extends ModalMethods {
  closeModal: () => void;
  changeLoading: (loading: boolean) => void;
  changeOkLoading: (loading: boolean) => void;
  getShow?: ComputedRef<boolean>;
  redoModalHeight: () => void;
}

export type UseModalInnerReturnType = [RegisterFn, ReturnInnerMethods];

export interface ModalProps {
  minHeight?: number;
  height?: number;
  // 启用wrapper后 底部可以适当增加高度
  wrapperFooterOffset?: number;
  // 是否允许拖动
  draggable?: boolean;

  // 是否可以进行全屏
  canFullscreen?: boolean;
  // 默认是否全屏
  defaultFullscreen?: boolean;
  // 是否显示modal
  show?: boolean;
  // 温馨提醒信息
  tipsMessage: string | string[];

  // 是否使用modalWrapper
  useWrapper: boolean;

  // loading状态
  loading: boolean;

  // loading 提示
  loadingTip?: string;
  // 内容容器props
  wrapperProps: Omit<ModalWrapperProps, 'loading'>;

  // 是否显示提交按钮
  showOkBtn: boolean;
  // 是否显示取消按钮
  showCancelBtn: boolean;
  // 关闭前执行，返回 true 则关闭，否则不关闭
  closeFunc: () => Promise<any>;

  /**
   * Modal 关闭后的回调.
   * @type Function
   */
  onAfterLeave?: () => any;

  /**
   * contentStyle 容器样式.
   * @default {}
   * @type object
   */
  contentStyle?: CSSProperties;

  /**
   * 取消按钮文本
   * @default 'cancel'
   * @type string
   */
  cancelText?: string;

  /**
   * 确定按钮 loading
   * @default false
   * @type boolean
   */
  confirmLoading?: boolean;

  /**
   * modal挂载html节点
   * @default () => document.body
   * @type Function
   */
  to?: (instance: any) => HTMLElement;

  /**
   * 	点击遮罩时是否发出 update:show 事件
   * @default true
   * @type boolean
   */
  maskClosable?: boolean;

  /**
   * 确定按钮文本
   * @default 'OK'
   * @type string
   */
  okText?: string;

  /**
   * 确定按钮类型
   * @default 'primary'
   * @type string
   */
  okType?: 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error';

  /**
   * naive ui 确定 button props
   * @type object
   */
  okButtonProps?: ButtonProps;

  /**
   * naive ui 取消 button props
   * @type object
   */
  cancelButtonProps?: ButtonProps;

  /**
   * modal标题
   * @type any (string | slot)
   */
  title?: VNodeChild | JSX.Element;

  /**
   * modal 宽度
   * @default 520
   * @type string | number
   */
  width?: string | number;

  /**
   * // 对话框外层容器的类名
   * @type string
   */
  wrapClassName?: string;

  /**
   * z-index
   * @default 1000
   * @type number
   */
  zIndex?: number;
}

export interface ModalWrapperProps {
  footerOffset?: number;
  loading: boolean;
  modalHeaderHeight: number;
  modalFooterHeight: number;
  minHeight: number;
  height: number;
  show: boolean;
  fullScreen: boolean;
  useWrapper: boolean;
}
