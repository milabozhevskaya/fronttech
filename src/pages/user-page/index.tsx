import { UserInfo } from '@/entities/user';
import { RepoList } from '@/widgets/repo-list';

import type { User } from '@/shared/types';

import css from './styles.module.scss';

const UserPage = ({ ...props }: User): JSX.Element => (
    <div className={css['user-page']}>
      <div className={css['user-page__aside']}>
        <UserInfo {...props} />
      </div>
      <div className={css['user-page__content']}>
        <RepoList login={props.login} quantity={props.publicRepos} />
      </div>
    </div>
  );

export { UserPage };
