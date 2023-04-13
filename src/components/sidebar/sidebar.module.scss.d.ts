import globalClassNames from '..../style.d'
declare const classNames: typeof globalClassNames & {
  readonly filters: 'filters'
  readonly filters__header: 'filters__header'
  readonly filters__label: 'filters__label'
}
export = classNames
