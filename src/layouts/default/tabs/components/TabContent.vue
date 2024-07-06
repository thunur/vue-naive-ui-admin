<script lang="tsx">
  import { PropType, reactive, nextTick, shallowRef, defineComponent, computed, unref } from 'vue';
  import type { RouteLocationNormalized } from 'vue-router';
  import type { PopoverTrigger } from 'naive-ui';

  import { NDropdown } from 'naive-ui';

  import { TabContentProps, MenuEventEnum } from '../types';

  import { useDesign } from '@/hooks/web/useDesign';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useTabDropdown } from '../useTabDropdown';
  import getCommonCls from './useExtra';
  import Icon from '@/components/Icon';

  export default defineComponent({
    name: 'TabContent',
    props: {
      tabItem: {
        type: Object as PropType<RouteLocationNormalized>,
        default: null,
      },
      isExtra: Boolean,
    },
    setup(props) {
      const { prefixCls } = useDesign('multiple-tabs-content');
      const { t } = useI18n();
      const pos = reactive({
        x: 0,
        y: 0,
      });
      const showDropdown = shallowRef<boolean>(false);

      const getTitle = computed(() => {
        const { tabItem: { meta } = {} } = props;
        return meta && t(meta.title as string);
      });

      const getIcon = computed(() => {
        const { tabItem: { meta } = {} } = props;
        return meta?.icon;
      });

      const getIsTabs = computed(() => !props.isExtra);

      const X = computed(() => (unref(getIsTabs) ? pos.x : undefined));
      const Y = computed(() => (unref(getIsTabs) ? pos.y : undefined));
      const Show = computed(() => (unref(getIsTabs) ? unref(showDropdown) : undefined));
      const ClickOutsize = computed(() => (unref(getIsTabs) ? clickOutside : undefined));

      const getTrigger = computed((): PopoverTrigger => (unref(getIsTabs) ? 'manual' : 'click'));
      const getPlacement = computed(() => (unref(getIsTabs) ? 'bottom-start' : 'bottom-end'));

      const { getDropMenuList, handleMenuEvent, handleContextMenu } = useTabDropdown(
        props as TabContentProps,
        getIsTabs
      );

      async function handleContext(e: MouseEvent) {
        if (props.tabItem) {
          e.preventDefault();
          showDropdown.value = false;
          await nextTick();
          pos.x = e.clientX;
          pos.y = e.clientY;
          showDropdown.value = true;
          handleContextMenu(props.tabItem)(e);
        }
      }

      function handleClick(e: MouseEvent) {
        if (props.tabItem) {
          handleContextMenu(props.tabItem)(e);
        }
      }

      function clickOutside() {
        showDropdown.value = false;
      }

      function onHandleSelect(key: MenuEventEnum) {
        handleMenuEvent(key);
        clickOutside();
      }

      return () => {
        const { wrapperClass, iconClass } = getCommonCls();
        return (
          <>
            {unref(getIsTabs) && (
              <div class="tabContent" onContextmenu={handleContext}>
                {unref(getIcon) && (
                  <Icon
                    icon={getIcon.value}
                    class="inline-block align-text-bottom mr-4px text-16px"
                  />
                )}
                <span>{unref(getTitle)}</span>
              </div>
            )}

            <NDropdown
              x={unref(X)}
              y={unref(Y)}
              show={unref(Show)}
              onSelect={onHandleSelect}
              onClickoutside={unref(ClickOutsize)}
              options={unref(getDropMenuList)}
              trigger={unref(getTrigger)}
              placement={unref(getPlacement)}
            >
              {!unref(getIsTabs) && (
                <span
                  class={[`${prefixCls}__extra-quick`, unref(wrapperClass)]}
                  onClick={handleClick}
                >
                  <Icon icon="fluent-options-48-regular" class={`${iconClass}`} />
                </span>
              )}
            </NDropdown>
          </>
        );
      };
    },
  });
</script>
