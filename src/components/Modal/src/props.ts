import type { PropType, CSSProperties } from 'vue';
import type { ModalWrapperProps } from './typing';
import { ButtonProps } from 'naive-ui';
import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export const modalProps = {
  show: { type: Boolean },
  height: { type: Number },
  minHeight: { type: Number },
  // open drag
  draggable: { type: Boolean, default: true },
  centered: { type: Boolean },
  cancelText: { type: String, default: t('common.cancelText') },
  okText: { type: String, default: t('common.okText') },

  closeFunc: Function as PropType<() => Promise<boolean>>,
};

export const basicProps = Object.assign({}, modalProps, {
  // 默认是否全屏
  defaultFullscreen: { type: Boolean },
  // 是否可以全屏
  canFullscreen: { type: Boolean, default: true },
  // After enabling the wrapper, the bottom can be increased in height
  wrapperFooterOffset: { type: Number, default: 0 },
  // Warm reminder message
  tipsMessage: [String, Array] as PropType<string | string[]>,
  // 是否开启自适应高度
  useWrapper: { type: Boolean, default: true },

  // 组件内容loading状态
  loading: { type: Boolean },

  // 组件loading提示
  loadingTip: { type: String },
  /**
   * @description: 显示取消按钮
   */
  showCancelBtn: { type: Boolean, default: true },
  /**
   * @description: 显示确认按钮
   */
  showOkBtn: { type: Boolean, default: true },

  // 内容容器props
  wrapperProps: Object as PropType<Partial<ModalWrapperProps>>,

  // modal完全关闭后回调
  onAfterLeave: Function as PropType<() => void>,

  // 卡片内容样式
  contentStyle: Object as PropType<CSSProperties>,

  // 确定按钮 loading
  confirmLoading: { type: Boolean },

  // 指定dom挂载位置，默认是在body下
  to: String || HTMLElement,

  // 使用esc关闭modal框
  closeOnEsc: { type: Boolean, default: true },

  // 点击遮罩时是否发出 update:show 事件
  maskClosable: { type: Boolean, default: true },

  // 确定按钮样式
  okType: { type: String, default: 'primary' },

  // naive-UI 确定按钮props
  okButtonProps: Object as PropType<ButtonProps>,
  // naive-UI取消按钮props
  cancelButtonProps: Object as PropType<ButtonProps>,

  // 是否自动聚焦 Modal 第一个可聚焦的元素
  autoFocus: { type: Boolean, default: true },

  // modal 标题
  title: { type: String },

  // 是否展示 Modal
  show: { type: Boolean },

  // modal 宽度 默认520
  width: [String, Number] as PropType<string | number>,

  // 对话框外层容器的类名
  wrapClassName: { type: String },

  zIndex: { type: Number },
});
