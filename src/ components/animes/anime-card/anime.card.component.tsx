import React from 'react';
import { useHistory } from 'react-router-dom';
import { Anime } from '../../../common/interfaces/anime.interface';

import styled from '@emotion/styled'
import { css } from '@emotion/css'

const AnimeCardDiv = styled.div`
    border-radius: 4px;
    background: var(--neutral-10, #FFF);
    border: 1px solid transparent;
    box-shadow: 0px 2px 15px 0px rgba(48, 48, 48, 0.08);
    height: 100%;
`

const Image = styled.img`
    height: 110px;
`

const Ul = styled.ul`
    margin-left: 20px;
    font-size: 12px;
`

const BasicInfo = styled.div`
    font-size: 12px;
    font-weight: 600;
`

const Info = styled.div`
    font-size: 12px;
`

const AnimeCard: React.FC<{ anime: Anime }> = ({ anime }: { anime: Anime }) => {
    const history = useHistory();

    const goToDetailPage = (id: number) => {
        history.push(`/detail/${id}`);
    };

    return (
        <AnimeCardDiv
            className={css`cursor: pointer; &:hover{border: 1px solid #e8e8e8}`}
            onClick={() => goToDetailPage(anime.id)}
        >
            <Image className='img-fluid w-100' src={anime.bannerImage} alt="" />
            <div className="p-3">
                <p className="m-0">{anime.title.english}</p>
                <hr className="my-1"/>
                <p className={css`
                    font-size: 11px;
                    color: #979797;
                `}
                >{anime.title.native}</p>
                <BasicInfo>BASIC INFO</BasicInfo>
                <Info>{anime.duration} minutes / eps</Info>
                <Info>{anime.seasonYear}</Info>
                <Info>{anime.status}, {anime.season}, {anime.episodes} episodes</Info>

                <br />

                <Info>GENRES:</Info>
                <Ul>
                {
                    anime.genres.map((genre, index) => {
                        return (
                            <li key={index}>{genre}</li>
                        )
                    })
                }
                </Ul>
            </div>
        </AnimeCardDiv>
    );
}

export default AnimeCard;