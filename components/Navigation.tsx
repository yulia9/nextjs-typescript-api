import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PathNames } from '@/shared/pathnames';

const Navigation: React.FC = () => {
  const { query, asPath, pathname } = useRouter();

  const activePageStyle = "text-orange-500 font-bold mx-2";
  const defaultPageStyle = "mx-2";

  return (
    <div className="flex px-20 py-5 border-solid border border-gray-100">
      <Link href={PathNames.HOME} className={pathname === PathNames.HOME ? activePageStyle : defaultPageStyle}>
        HOME
      </Link>
      {query.id && <>
        <span>/</span>
        <Link href={asPath} className={pathname === PathNames.CURRENCY ? activePageStyle : defaultPageStyle}>
          {(query.id as string).toUpperCase()}
        </Link>
      </>}
    </div>
  )
};

export default Navigation;
