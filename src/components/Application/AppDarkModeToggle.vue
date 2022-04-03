<script lang="tsx">
  import useChangeTheme from '/@/hooks/web/useChaneTheme';
  import { ThemeEnum } from '/@/enums/appEnum';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { NTooltip } from 'naive-ui';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { defineComponent } from 'vue';
  import Icon from '/@/components/Icon';
  export default defineComponent({
    name: 'AppDarkModeToggle',
    setup() {
      const { t } = useI18n();
      const { prefixCls } = useDesign('app-dark-mode-switch');
      const [darkModeRef, setLocalTheme] = useChangeTheme();
      const handleClick = () => {
        if (darkModeRef.value === ThemeEnum.DARK) {
          setLocalTheme(ThemeEnum.LIGHT);
        } else {
          setLocalTheme(ThemeEnum.DARK);
        }
      };

      return () => {
        return (
          <span class={prefixCls} onClick={handleClick}>
            {darkModeRef.value === ThemeEnum.LIGHT ? (
              <NTooltip>
                {{
                  default: () => t('common.dark'),
                  trigger: () => <Icon icon="clarity-sun-solid" />,
                }}
              </NTooltip>
            ) : (
              <NTooltip>
                {{
                  default: () => t('common.light'),
                  trigger: () => <Icon icon="clarity-moon-solid" />,
                }}
              </NTooltip>
            )}
          </span>
        );
      };
    },
  });
</script>
