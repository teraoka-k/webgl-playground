export enum PageType {
    Home,
    Line
}

type Page = {
    type: PageType
    href: string,
    label: string,
}

const pageList: Page[] = [
    {type: PageType.Home, href: '/', label: 'Home'},
    {type: PageType.Line, href: '/line', label: 'Line'},
]

export const Navigation = (props: { currentPageType: PageType }) => <ul>
    {pageList.map(page => props.currentPageType != page.type ? <li><a href={page.href}>{page.label}</a></li> : null)}
</ul>
