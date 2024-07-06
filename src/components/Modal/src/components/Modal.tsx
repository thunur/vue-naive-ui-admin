import { NModal } from 'naive-ui';
import { defineComponent, toRefs, unref } from 'vue';
import { basicProps } from '../props';
import { useModalDragMove } from '../hooks/useModalDrag';
import { useAttrs } from '@/hooks/core/useAttrs';
import { extendSlots } from '@/utils/helper/tsxHelper';

export default defineComponent({
  name: 'Modal',
  inheritAttrs: false,
  props: basicProps,
  emits: ['cancel'],
  setup(props, { slots }) {
    const { show, draggable } = toRefs(props);
    const attrs = useAttrs();
    useModalDragMove({
      show,
      draggable,
    });

    return () => {
      const propsData = { ...unref(attrs), ...props } as Recordable;
      console.log(propsData);
      return <NModal {...propsData}>{extendSlots(slots)}</NModal>;
    };
  },
});
