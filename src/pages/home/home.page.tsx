import React, { useState } from 'react';

import AnimeList from '../../ components/animes/anime.list.component';
import Pagination from '../../ components/general/pagination/pagination.component';
import Spinner from '../../ components/general/spinner/spinner.component';

import { useGetAnimePage } from '../../hooks/animes/useGetAnimePage';

const Home: React.FC = () => {
    const perPage = 12;

    const [page, setPage] = useState<number>(1);

    const { AnimePage, loading } = useGetAnimePage(page, perPage);

    const handleDataFromChild = (data: number) => {
        setPage(data);
      };

    return (
        <div className="position-relative">
            <div className="container">
                {
                    !loading ?
                    <>
                        <AnimeList animes={AnimePage?.Page?.media || []} />
                        <Pagination
                            currentPage={page}
                            totalData={AnimePage?.Page?.pageInfo?.total || 0}
                            totalPage={AnimePage?.Page?.pageInfo?.lastPage}
                            onDataReady={ handleDataFromChild }
                        />
                    </>:<><Spinner/></>
                }
            </div>
        </div>
    );
}

export default Home;