import { DropdownOption } from "naive-ui";
import { DropEventEnum } from "../types/dropdown";
import Icon from "/@/components/Icon";
import { useI18n } from "/@/hooks/web/useI18n";
const { t } = useI18n();

/**
 * 表格右键菜单
 * @date 2022-03-16
 * @returns { DropdownOption[] }
 */
const dropMenuList: DropdownOption[] = [
	{
		key: DropEventEnum.REFRESH,
		label: t('component.table.refresh'),
		icon: () => <Icon icon="ant-design:reload-outlined" />
	},
	{
		key: DropEventEnum.SELECT,
		label: t('component.table.select'),
		icon: () => <Icon icon="ci:select-multiple" />
	},
	{
		key: DropEventEnum.EDITOR,
		label: t('component.table.editor'),
		icon: () => <Icon icon="ant-design:edit-filled" />
	},
	{
		key: DropEventEnum.DELETE,
		label: t('component.table.delete'),
		icon: () => <Icon icon="ant-design:delete-outlined" />
	}
]
export { dropMenuList }
