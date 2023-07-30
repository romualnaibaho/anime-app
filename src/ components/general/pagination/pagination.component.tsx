import React from 'react';

import styled from '@emotion/styled'
// import { css } from '@emotion/css'

import './pagination.component.css'

interface PaginationProps {
    currentPage: number,
    totalData: number,
    totalPage: number,
    onDataReady: (data: number) => void
}

const Ul = styled.ul`
    padding: 0;
`

const Li = styled.li`
list-style-type: none;
`

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalData, totalPage, onDataReady }) => {
    let mutableCurrentPage = currentPage ? currentPage : 0

    /* Functions */
    const canPrev = (index: number) => {
        return index >= 1
    }

    const canNext = (index: number) => {
        return index <= totalPage
    }

    const updatePage = (newPage: number) => {
        mutableCurrentPage = newPage
        onDataReady(newPage)
    }

    const handleFirstPage = (page: number) => {
        if (canPrev(page)) {
            updatePage(page)
        }
    }

    const handleLastPage = (page: number) => {
        if (canNext(page)) {
            updatePage(page)
        }
    }

    return (
        <>
            {
                totalData > 0 && totalPage > 1 ?
                <>
                    <nav>
                        <Ul className="d-flex align-items-center justify-content-right">
                            <Li className={canPrev(mutableCurrentPage - 1) ? 'page-item' : 'disabled'}>
                                <span
                                    className="page-link"
                                    onClick={() => handleFirstPage(mutableCurrentPage - 1)}
                                >
                                    <em className="fa fa-angle-left"></em>
                                </span>
                            </Li>
                            {
                                canPrev(1) && mutableCurrentPage > 3 ?
                                <>
                                    <Li className="page-item">
                                        <span
                                            className="page-link"
                                            onClick={() => updatePage(1)}
                                        >
                                            1
                                        </span>
                                    </Li>
                                </> : <></>
                            }
                            {
                                mutableCurrentPage > 3 ? 
                                <>
                                    <Li className="page-divider">
                                        <div
                                        className="page-link"
                                        >
                                        &middot;&middot;&middot;
                                        </div>
                                    </Li>
                                </>:<></>
                            }
                            {
                                canPrev(mutableCurrentPage - 2) ?
                                <>
                                    <Li className="page-item">
                                        <span
                                            className="page-link"
                                            onClick={() => updatePage(mutableCurrentPage - 2)}
                                        >
                                            { mutableCurrentPage - 2 }
                                        </span>
                                    </Li>
                                </>:<></>
                            }
                            {
                                canPrev(mutableCurrentPage - 1) ?
                                <>
                                    <Li className="page-item">
                                        <span
                                            className="page-link"
                                            onClick={() => updatePage(mutableCurrentPage - 1)}
                                        >
                                            { mutableCurrentPage - 1 }
                                        </span>
                                    </Li>
                                </>:<></>
                            }
                            <Li className="page-item active">
                                <span className="page-link cursor-default">
                                { mutableCurrentPage }
                                </span>
                            </Li>
                            {
                                canNext(mutableCurrentPage + 1) ?
                                <>
                                    <Li className="page-item">
                                        <span
                                            className="page-link"
                                            onClick={() => updatePage(mutableCurrentPage + 1)}
                                        >
                                            { mutableCurrentPage + 1 }
                                        </span>
                                    </Li>
                                </>:<></>
                            }
                            {
                                canNext(mutableCurrentPage + 2) ?
                                <>
                                    <Li className="page-item">
                                        <span
                                            className="page-link"
                                            onClick={() => updatePage(mutableCurrentPage + 2)}
                                        >
                                            { mutableCurrentPage + 2 }
                                        </span>
                                    </Li>
                                </>:<></>
                            }
                            {
                                mutableCurrentPage <= totalPage - 3 ?
                                <>
                                    <Li className="page-divider">
                                        <div
                                            className="page-link"
                                        >
                                            &middot;&middot;&middot;
                                        </div>
                                    </Li>
                                </>:<></>
                            }
                            {
                                canNext(totalPage) && mutableCurrentPage <= totalPage - 3 ?
                                <>
                                <Li className="page-item">
                                    <span
                                        className="page-link"
                                        onClick={() => updatePage(totalPage)}
                                    >
                                        { totalPage }
                                    </span>
                                </Li>
                                </> : <></>
                            
                            }
                            <Li className={canNext(mutableCurrentPage + 1) ? 'page-item' : 'disabled'}>
                                <span
                                    className="page-link"
                                    onClick={() => handleLastPage(mutableCurrentPage + 1) }
                                >
                                    <em className="fa fa-angle-right"></em>
                                </span>
                            </Li>
                        </Ul>
                    </nav>
                </>:<></>
            }
        </>
    );
}

export default Pagination;