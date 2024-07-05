import { Ref, unref, watchEffect } from 'vue';
import { useTimeoutFn } from '@vueuse/core';

export interface UseModalDragMoveContext {
  draggable: Ref<boolean>;
  show: Ref<boolean>;
}

export function useModalDragMove(context: UseModalDragMoveContext) {
  const getStyle = function (dom: Element, attr: string) {
    return getComputedStyle(dom)[attr];
  };
  const params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false,
  };
  const drag = (wrap: any) => {
    if (!wrap) return;
    wrap.setAttribute('data-drag', unref(context.draggable));
    const bar = wrap.querySelector('.n-card-header ,.n-dialog__title') as HTMLDivElement;
    const target = wrap.querySelector('.n-modal') as HTMLDivElement;

    if (!bar || !target || !unref(context.draggable)) return;
    const title = bar.querySelector('.aso-basic-title') as HTMLDivElement;
    bar.style.cursor = 'move';
    title.style.cursor = 'move';

    if (getStyle(target, 'left') !== 'auto') {
      params.left = getStyle(target, 'left');
    }
    if (getStyle(target, 'top') !== 'auto') {
      params.top = getStyle(target, 'top');
    }

    // o是移动对象
    bar.onmousedown = function (e) {
      if (!e) return;
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX;
      const disY = e.clientY;
      const screenWidth = document.body.clientWidth; // body当前宽度
      const screenHeight = document.documentElement.clientHeight; // 可见区域高度(应为body高度，可某些环境下无法获取)

      const dragDomWidth = target.offsetWidth; // 对话框宽度
      const dragDomheight = target.offsetHeight; // 对话框高度

      const minDragDomLeft = target.offsetLeft;

      const maxDragDomLeft = screenWidth - target.offsetLeft - dragDomWidth;
      const minDragDomTop = target.offsetTop;
      const maxDragDomTop = screenHeight - target.offsetTop - dragDomheight;
      // 获取到的值带px 正则匹配替换
      const domLeft = getStyle(target, 'left');
      const domTop = getStyle(target, 'top');
      let styL = +domLeft;
      let styT = +domTop;

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (domLeft.includes('%')) {
        styL = +document.body.clientWidth * (+domLeft.replace(/%/g, '') / 100);
        styT = +document.body.clientHeight * (+domTop.replace(/%/g, '') / 100);
      } else {
        styL = +domLeft.replace(/px/g, '');
        styT = +domTop.replace(/px/g, '');
      }
      e.preventDefault();
      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        // 移动当前元素
        target.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  };

  const handleDrag = () => {
    const dragWraps = document.querySelectorAll('.n-modal-body-wrapper');
    for (const wrap of Array.from(dragWraps)) {
      if (!wrap) continue;
      const display = getStyle(wrap, 'display');
      const draggable = wrap.getAttribute('data-drag');
      if (display !== 'none') {
        // 拖拽位置
        if (draggable === null) {
          drag(wrap as HTMLElement);
        }
      }
    }
  };

  watchEffect(() => {
    if (!unref(context.show) || !unref(context.draggable)) {
      return;
    }
    useTimeoutFn(() => {
      handleDrag();
    }, 30);
  });
}
