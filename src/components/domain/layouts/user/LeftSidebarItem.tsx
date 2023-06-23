import { Link } from '~/components/domain/Link';

export type LeftSidebarItemType = {
  href: string;
  title: string;
  isActive: boolean;
};

function LeftSidebarItem({ href, title, isActive }: LeftSidebarItemType) {
  const ActiveComponent = isActive ? (
    <span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary " aria-hidden="true" />
  ) : null;
  const textClassIsActive = isActive ? 'font-semibold bg-base-200' : 'font-normal';

  return (
    <Link href={href} className={textClassIsActive}>
      <span>{title}</span>
      {ActiveComponent}
    </Link>
  );
}

export default LeftSidebarItem;
