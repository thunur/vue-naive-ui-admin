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

    const screenWidth = document.body.clientWidth; // body当前宽度
    const screenHeight = document.body.clientHeight; // 可见区域高度

    const dragDomW = target.offsetWidth; // 对话框宽度
    const dragDomH = target.offsetHeight; // 对话框高度

    const minDomLeft = target.offsetLeft;
    const minDomTop = target.offsetTop;

    const maxDragDomLeft = screenWidth - minDomLeft - dragDomW;
    const maxDragDomTop = screenHeight - minDomTop - dragDomH;

    if (getStyle(target, 'left') !== 'auto') {
      params.left = getStyle(target, 'left');
    }
    if (getStyle(target, 'top') !== 'auto') {
      params.top = getStyle(target, 'top');
    }

    // o是移动对象
    bar.onmousedown = function (event) {
      params.flag = true;
      if (!event) {
        // @ts-ignore
        event = window.event;
        // 防止IE文字选中
        bar.onselectstart = function () {
          return false;
        };
      }
      const e = event;
      params.currentX = e.clientX;
      params.currentY = e.clientY;
    };
    document.onmouseup = function () {
      params.flag = false;
      if (getStyle(target, 'left') !== 'auto') {
        params.left = getStyle(target, 'left');
      }
      if (getStyle(target, 'top') !== 'auto') {
        params.top = getStyle(target, 'top');
      }
    };
    document.onmousemove = function (event) {
      const e: any = event || window.event;
      if (params.flag) {
        const nowX = e.clientX;
        const nowY = e.clientY;
        const disX = nowX - params.currentX;
        const disY = nowY - params.currentY;

        let left = parseInt(params.left) + disX;
        let top = parseInt(params.top) + disY;

        // 拖出屏幕边缘
        if (-left > minDomLeft) {
          left = -minDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDomTop) {
          top = -minDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        target.style.left = `${left}px`;
        target.style.top = `${top}px`;

        if (event.preventDefault) {
          event.preventDefault();
        }
        return false;
      }
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
