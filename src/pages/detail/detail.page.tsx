import React from 'react';
import { useParams } from 'react-router-dom';

import styled from '@emotion/styled'
import { css } from '@emotion/css'

import Spinner from '../../ components/general/spinner/spinner.component';

import { useGetAnimeDetail } from '../../hooks/animes/useGetAnimeDetail';

interface RouteParams {
    detailId: string;
}

/* CSS */
const Banner = styled.div`
    display: grid;
    place-items: start;
    grid-template-areas: "inner-div";
`

const Image = styled.img`
    height: 220px;
    grid-area: inner-div;
`

const StatusLabel = styled.div`
    grid-area: inner-div;
    width: fit-content;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 8px;
    text-align: center;
    color: #FFFFFF;
    background: #FFA300;
    border-radius: 4px 100px 100px 0;
`

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
`

const SubTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`

const AddCollectionButton = styled.div`
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 15px;
    border-radius: 10px;
    background: #003F7E;
    border: none;
    color: #fff;
    &:hover {
        background: #004890;
    }
`

const BasicInfo = styled.div`
    font-size: 16px;
    font-weight: 600;
`

const Info = styled.div`
    font-size: 14px;
`

const Detail: React.FC = () => {
    const { detailId } = useParams<RouteParams>();

    const {anime, loading} = useGetAnimeDetail(detailId);

    const displayDate = (date: any) => {
        return `${date.month}-${date.year}`
    }

    return (
        <div className="position-relative pb-5">
            {
                !loading ?
                <>
                    <div className="container">
                        <Banner>
                            <Image className='img-fluid w-100' src={anime.bannerImage} alt="" />
                            <StatusLabel>
                                { anime.status }
                            </StatusLabel>
                        </Banner>

                        <div>
                            <div className="mt-4 d-flex">
                                <Title className='my-auto'>{anime.title.english}</Title>
                                <AddCollectionButton className='ml-4'>Add to collection</AddCollectionButton>
                            </div>

                            <hr className='m-1' />
                            <SubTitle>{anime.title.native}</SubTitle>

                            {
                                anime.isAdult ?
                                <><BasicInfo className={css`margin-top:15px;color: red;`}>18+ ADULT CONTENT</BasicInfo></>:<></>
                            }
                            <div className='mt-4'>
                                <BasicInfo>{anime.duration} minutes/eps</BasicInfo>
                                <BasicInfo>{displayDate(anime.startDate)} to {displayDate(anime.endDate)}</BasicInfo>
                            </div>

                            <BasicInfo className='mt-4'>DESCRIPTION:</BasicInfo>
                            <Info>{anime.description}</Info>

                            <BasicInfo className='mt-4'>EPISODES:</BasicInfo>
                            <Info>{anime.episodes}</Info>

                            <BasicInfo className='mt-4'>SEASON:</BasicInfo>
                            <Info>{anime.season}</Info>

                            <BasicInfo className='mt-4'>SEASON YEAR:</BasicInfo>
                            <Info>{anime.seasonYear}</Info>

                            <BasicInfo className='mt-4'>FORMAT:</BasicInfo>
                            <Info>{anime.format}</Info>
                        </div>
                    </div>
                </>:<><Spinner/></>
            }
        </div>
    );
}

export default Detail;