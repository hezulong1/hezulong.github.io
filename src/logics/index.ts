import dayjs from 'dayjs'

export const isDark = useDark()

export function formatDate(d: string | Date) {
  const date = dayjs(d)
  if (date.year() === dayjs().year()) { return date.format('MM月DD日') } else {
    return date.format('YYYY年MM月DD日')
  }
}
