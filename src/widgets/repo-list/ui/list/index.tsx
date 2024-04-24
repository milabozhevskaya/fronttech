import { Card } from '@/entities/repo/intex';
import type { Repo } from '@/shared/types';
import { useService } from '@/shared/api/useService';
import { getRepos } from '@/widgets/repo-list/api/getRepos';
import { useState } from 'react';
import { Item } from '../item';
import { Pagination } from '../pagination';

import css from './styles.module.scss';

const OPTIONS = {
  PER_PAGE: 4,
};

const List = ({ login, quantity }: { login: string; quantity: number }): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useService<Array<Repo>>(getRepos, {
    query: `${login}/repos?per_page=${OPTIONS.PER_PAGE}&page=${page}&type=public`,
  });

  return (
    <div className={css['repo-list']}>
      <h2 className={css['repo-list__title']}>Repositories ({quantity})</h2>
      {loading && <span>Loading...</span>}
      {!loading && error && <span>{error.message}</span>}
      {!loading && !error && data && data.length > 0 && (
        <ul className={css['repo-list__list']}>
          {...data.map((repo) => (
            <Item id={repo.id + repo.name} classNameItem={css['repo-list__item']}>
              <Card
                name={repo.name}
                description={repo.description}
                id={repo.id}
                htmlURL={repo.htmlURL}
              />
            </Item>
          ))}
        </ul>
      )}
      <div className={css['repo-list__pagination']}>
        <Pagination page={page} setPage={setPage} quantity={quantity} />
      </div>
    </div>
  );
};

export { List };
