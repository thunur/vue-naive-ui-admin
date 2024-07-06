<script lang="tsx">
  import type { CSSProperties, PropType } from 'vue';
  import { defineComponent, computed, unref } from 'vue';
  import { NTooltip } from 'naive-ui';
  import { getPopupContainer } from '@/utils';
  import { isString, isArray } from '@/utils/is';
  import { getSlot } from '@/utils/helper/tsxHelper';
  import { useDesign } from '@/hooks/web/useDesign';
  import Icon from '@/components/Icon';

  const props = {
    /**
     * Help text max-width
     * @default: 600px
     */
    maxWidth: { type: String, default: '600px' },
    /**
     * Whether to display the serial number
     * @default: false
     */
    showIndex: { type: Boolean },
    /**
     * Help text font color
     * @default: #ffffff
     */
    color: { type: String, default: '#ffffff' },
    /**
     * Help text font size
     * @default: 14px
     */
    fontSize: { type: String, default: '14px' },
    /**
     * tips text list
     */
    placement: { type: String, default: 'right' },
    /**
     * tips text list
     */
    text: { type: [Array, String] as PropType<string[] | string> },
    /**
     * tips trigger
     */
    trigger: { type: String, default: 'hover' },
  };

  export default defineComponent({
    name: 'BasicTips',
    props,
    setup(props, { slots }) {
      const { prefixCls } = useDesign('basic-tips');

      const getTooltipStyle = computed(
        (): CSSProperties => ({ color: props.color, fontSize: props.fontSize })
      );

      const getOverlayStyle = computed((): CSSProperties => ({ maxWidth: props.maxWidth }));

      function renderTitle() {
        const textList = props.text;

        if (isString(textList)) {
          return <p>{textList}</p>;
        }

        if (isArray(textList)) {
          return textList.map((text, index) => {
            return (
              <p key={text}>
                <>
                  {props.showIndex ? `${index + 1}. ` : ''}
                  {text}
                </>
              </p>
            );
          });
        }
        return null;
      }

      return () => {
        return (
          <NTooltip
            overlayClassName={`${prefixCls}__wrap`}
            autoAdjustOverflow={true}
            overlayStyle={unref(getOverlayStyle)}
            placement={props.placement as 'right'}
            getPopupContainer={() => getPopupContainer()}
          >
            {{
              trigger: () => (
                <span class={[prefixCls, 'text-$app-text-color-3']}>
                  {getSlot(slots) || <Icon icon="ant-design:info-circle-outlined" />}
                </span>
              ),
              default: () =>
                getSlot(slots) || <div style={unref(getTooltipStyle)}>{renderTitle()}</div>,
            }}
          </NTooltip>
        );
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-basic-tips';

  .@{prefix-cls} {
    display: inline-block;
    margin-left: 6px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: var(--app-primary-color);
    }

    &__wrap {
      p {
        margin-bottom: 0;
      }
    }
  }
</style>
