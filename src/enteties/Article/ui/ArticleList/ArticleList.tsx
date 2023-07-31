import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, HTMLAttributeAnchorTarget, memo, useEffect, useState } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlePage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLES_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/cost/localeStorage';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  onLoadNextPart?:() => void;
  target?: HTMLAttributeAnchorTarget;
}

const Header = () => <ArticlesPageFilters />;

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, view = ArticleView.SMALL, isLoading, target, onLoadNextPart } = props;
  const { t } = useTranslation();

  const [selectedArticleId, setSelectedArticleId] = useState(1);

  useEffect(() => {
    const paged = sessionStorage.getItem(ARTICLES_LIST_ITEM_LOCALSTORAGE_IDX) || 1;
    setSelectedArticleId(+paged);

    return () => {
      sessionStorage.removeItem(ARTICLES_LIST_ITEM_LOCALSTORAGE_IDX);
      setSelectedArticleId(1);
    };
  }, []);
  const renderArticle = (index: number, article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
      target={target}
      index={index}
    />
  );

  const Footer = memo(() => {
    if (isLoading) {
      return (
        <div className={cls.skeleton}>
          {getSkeletons(view)}
        </div>
      );
    }
    return null;
  });

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  const ItemContaner: FC<{height:number, width:number, index:number}> = ({ height, width, index }) => (
    <div className={cls.ItemContainer}>
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />

    </div>
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {view === ArticleView.BIG
        ? (
          <Virtuoso
            style={{ height: '100%' }}
            data={articles}
            itemContent={renderArticle}
            endReached={onLoadNextPart}
            initialTopMostItemIndex={selectedArticleId}
            components={{
              Header,
              Footer,
            }}
          />
        )
        : (
          <VirtuosoGrid
            totalCount={articles.length}
            endReached={onLoadNextPart}
            data={articles}
            itemContent={renderArticle}
            listClassName={cls.itemsWrapper}
            components={{
              Header,
              ScrollSeekPlaceholder: ItemContaner,
            }}
            scrollSeekConfiguration={{
              enter: (velocity) => Math.abs(velocity) > 200,
              exit: (velocity) => Math.abs(velocity) < 30,
            }}

          />
        )}

      {/* {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)} */}
    </div>
  );
});
